import requests
from bs4 import BeautifulSoup
import logging
import time

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

FLARE_SOLVERR_URL = "http://localhost:8191/v1"
HEADERS = {"Content-Type": "application/json"}

def get_cookies_from_virk():
    """Get cookies from virk.dk homepage."""
    logging.info("Fetching cookies from virk.dk.")
    initial_page = "https://datacvr.virk.dk"
    response = requests.get(initial_page)
    if response.ok:
        logging.info("Cookies fetched successfully.")
    else:
        logging.error("Failed to fetch cookies from virk.dk.")
    return response.cookies

def fetch_page_data(page_url, cookies):
    """Fetch data for a single page using FlareSolverr with cookies."""
    data = {
        "cmd": "request.get",
        "url": page_url,
        "maxTimeout": 150000,
        "cookies": [{"name": c.name, "value": c.value, "domain": c.domain} for c in cookies]
    }
    logging.info(f"Sending request to {page_url}.")
    response = requests.post(FLARE_SOLVERR_URL, headers=HEADERS, json=data)
    logging.info("Response received.")
    time.sleep(30)
    json_response = response.json()
    time.sleep(30)
    if json_entry := json_response.get("status") == "ok":
        logging.info("Response OK.")
        html = json_response["solution"]["response"]
        soup = BeautifulSoup(html, "lxml")
        rows = soup.find_all("div", class_="col-12 col-lg-4")
        results = []
        for row in rows:
            company_name = row.find("span", class_="bold value").text.strip()
            address = row.find("div").text.strip()
            cvr_number = row.find_next_sibling("div").find("div", class_="value").text.strip()
            status = row.find_next_sibling("div", class_="col-12 col-lg-2").find("div", class_="value").text.strip()
            company_type = row.find_next_sibling("div", class_="col-12 col-lg-3").find("div", class_="value").text.strip()
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

def fetch_all_data(base_url, cookies):
    """Fetch data across multiple pages with cookies."""
    all_results = []
    page_number = 0
    while True:
        page_url = f"{base_url}&sideIndex={page_number}"
        page_data = fetch_page_data(page_url, cookies)
        if not page_data:
            logging.info("No more data to fetch, stopping.")
            break
        all_results.extend(page_data)
        logging.info(f"Data from page {page_number} fetched successfully.")
        page_number += 1
    return all_results

def main():
    base_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&antalAnsatte=ANTAL_1000_999999&size=10"
    cookies = get_cookies_from_virk()
    results = fetch_all_data(base_url, cookies)
    logging.info("Successfully retrieved all data.")
    
    # Save results to a file
    with open("results.txt", "w") as file:
        for item in results:
            file.write(str(item) + "\n")

if __name__ == "__main__":
    main()
