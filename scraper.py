import requests
from bs4 import BeautifulSoup
import logging
import time

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

FLARE_SOLVERR_URL = "http://localhost:8191/v1"
HEADERS = {"Content-Type": "application/json"}

def fetch_page_data(page_url):
    """Fetch data for a single page."""
    data = {
        "cmd": "request.get",
        "url": page_url,
        "maxTimeout": 150000
    }
    logging.info(f"Sending request to {page_url}.")
    response = requests.post(FLARE_SOLVERR_URL, headers=HEADERS, json=data)
    logging.info(f"json_response")
    time.sleep(10)
    json_response = response.json()
    time.sleep(10)
    if json_response.get("status") == "ok":
        logging.info("Response OK.")
        html = json_response["solution"]["response"]
        soup = BeautifulSoup(html, "lxml")

        # Debugging line to check the soup content
        #print(soup.prettify())  # This should show you the parsed HTML structure
        # Write to a file
        with open('soup.html', 'w', encoding='utf-8') as file:
            file.write(soup.prettify())

        table = soup.find("div", class_="soegeresultaterTabel")
        if not table:
            logging.error("The data table was not found in the HTML.")
            return None

        rows = table.find_all("div", class_="row")
        results = []
        for row in rows:
            company_name = row.find("span", class_="bold value").text.strip()
            address = row.find("div").find_next("div").text.strip().replace('<br>', ', ')
            cvr_column = row.find("div", class_="col-12 col-lg-2")
            cvr_number = cvr_column.find("div", class_="value").text.strip() if cvr_column else "N/A"
            status_column = row.find("div", class_="col-12 col-lg-2", string=lambda text: "Status:" in text)
            status = status_column.find("div", class_="value").text.strip() if status_column else "N/A"
            type_column = row.find("div", class_="col-12 col-lg-3")
            company_type = type_column.find("div", class_="value").text.strip() if type_pos else "N/A"
            
            results.append({
                "company_name": company_name,
                "address": address,
                "cvr_number": cvr_number, 
                "status": status, 
                "company_type": company_type
            })
        return results
    else:
        logging.error("Failed to fetch data.")
        return None

def fetch_all_data(base_url):
    """Fetch data across multiple pages."""
    all_results = []
    page_number = 0
    while True:
        page_url = f"{base_url}&sideIndex={page_number}"
        page_data = fetch_page_data(page_url)
        if not page_data:
            logging.info("No more data to fetch, stopping.")
            break
        all_results.extend(page_data)
        logging.info(f"Data from page {page_number} fetched successfully.")
        page_number += 1
    return all_results

def main():
    #&antalAnsatte=ANTAL_1000_999999
    base_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&enhedstype=virksomhed&size=100"
    results = fetch_all_data(base_url)
    logging.info("Successfully retrieved all data.")
    
    

if __name__ == "__main__":
    main()
