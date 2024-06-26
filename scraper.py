import requests
from bs4 import BeautifulSoup
import logging
import time
import sqlite3

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

FLARE_SOLVERR_URL = "http://localhost:8191/v1"
HEADERS = {"Content-Type": "application/json"}
DB_NAME = 'companies.db'

def create_table():
    """Create the table in the SQLite database if it doesn't exist."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company_name TEXT,
            address TEXT,
            cvr_number TEXT UNIQUE,
            status TEXT,
            company_type TEXT
        )
    ''')
    conn.commit()
    conn.close()

def company_exists(cvr_number):
    """Check if a company with the given CVR number already exists in the database."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(1) FROM companies WHERE cvr_number = ?', (cvr_number,))
    exists = cursor.fetchone()[0]
    conn.close()
    return exists > 0

def insert_data(data):
    """Insert data into the SQLite database."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    for item in data:
        if not company_exists(item['cvr_number']):
            cursor.execute('''
                INSERT INTO companies (company_name, address, cvr_number, status, company_type)
                VALUES (?, ?, ?, ?, ?)
            ''', (item['company_name'], item['address'], item['cvr_number'], item['status'], item['company_type']))
    conn.commit()
    conn.close()

def fetch_page_data(page_url, max_retries=5, delay=5):
    """Fetch data for a single page with retry mechanism."""
    data = {
        "cmd": "request.get",
        "url": page_url,
        "maxTimeout": 300000  # Increase the max timeout to ensure the page loads completely
    }
    for attempt in range(max_retries):
        try:
            logging.info(f"Sending request to {page_url}, attempt {attempt + 1}.")
            response = requests.post(FLARE_SOLVERR_URL, headers=HEADERS, json=data)
            logging.info("Received response from FlareSolverr.")
            
            json_response = response.json()
            if json_response.get("status") == "ok":
                logging.info("Response OK.")
                html = json_response["solution"]["response"]
                soup = BeautifulSoup(html, "lxml")

                # Check for the presence of JavaScript indicators
                scripts = soup.find_all('script')
                if scripts:
                    logging.info(f"Found {len(scripts)} <script> tags in the response.")
                else:
                    logging.error("No <script> tags found in the response.")

                # Attempt to find the data table
                table = soup.find("div", class_="soegeresultaterTabel")
                if not table:
                    logging.error("The data table was not found in the HTML.")
                    raise ValueError("Data table not found")

                rows = table.find_all("div", class_="row")
                results = []
                for row in rows:
                    company_name = row.find("span", class_="bold value").text.strip()
                    address = row.find("div").find_next("div").text.strip().replace('<br>', ', ')
                    cvr_column = row.find("div", class_="col-12 col-lg-2")
                    cvr_number = cvr_column.find("div", class_="value").text.strip() if cvr_column else "N/A"
                    status_column = row.find("div", class_="col-12 col-lg-2", string=lambda text: text and "Status:" in text)
                    status = status_column.find("div", class_="value").text.strip() if status_column else "N/A"
                    type_column = row.find("div", class_="col-12 col-lg-3")
                    company_type = type_column.find("div", class_="value").text.strip() if type_column else "N/A"

                    results.append({
                        "company_name": company_name,
                        "address": address,
                        "cvr_number": cvr_number,
                        "status": status,
                        "company_type": company_type
                    })
                insert_data(results)
                return results
            else:
                logging.error(f"Failed to fetch data, attempt {attempt + 1}.")
        except Exception as e:
            logging.error(f"Error fetching data on attempt {attempt + 1}: {e}")
        if attempt < max_retries - 1:
            time.sleep(delay)
    logging.error("Failed to fetch data after several attempts.")
    return None

def fetch_all_data(base_url):
    """Fetch data across multiple pages."""
    all_results = []
    page_number = 300
    while True:
        page_url = f"{base_url}&sideIndex={page_number}"
        page_data = fetch_page_data(page_url)
        if not page_data:
            if page_number == 0:
                logging.error("Failed to fetch data from the first page. Stopping.")
                break
            else:
                logging.info("No more data to fetch, stopping.")
                break
        all_results.extend(page_data)
        logging.info(f"Data from page {page_number} fetched successfully.")
        page_number += 1
    return all_results

def main():
    create_table()
    base_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&enhedstype=virksomhed&size=10"
    results = fetch_all_data(base_url)
    logging.info("Successfully retrieved all data. -_-")

if __name__ == "__main__":
    main()
