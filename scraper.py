import requests
from bs4 import BeautifulSoup
import logging
import json
import time

# Setup basic configuration for logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

FLARE_SOLVERR_URL = "http://localhost:8191/v1"
HEADERS = {"Content-Type": "application/json"}

def send_request(url, data):
    """Send HTTP POST request to the specified URL."""
    logging.info(f"Sending request to {url}.")
    response = requests.post(url, headers=HEADERS, json=data)
    response.raise_for_status()
    return response.json()

def parse_html(html_content):
    """Parse HTML and extract all companies' data."""
    soup = BeautifulSoup(html_content, 'html.parser')
    company_blocks = soup.find_all('div', class_='row', attrs={'data-v': '295c8b5e'})  # Each company data block
    return [parse_company_data(block) for block in company_blocks]

def parse_company_data(block):
    """Extract data from a single company block."""
    name_block = block.find('span', class_='bold value')
    name = name_block.text.strip() if name_block else 'N/A'
    address_block = name_block.find_next('div')  # Assumes address is next div
    address = address_block.text.strip().replace('<br>', ', ') if address_block else 'N/A'
    cvr_block = block.find('div', text='CVR-nummer:').find_next('div', class_='value')
    cvr = cvr_block.text.strip() if cvr_block else 'N/A'
    status_block = block.find('div', text='Status:').find_next('div', class_='value')
    status = status_block.text.strip() if status_block else 'N/A'
    form_block = block.find('div', text='Virksomhedsform:').find_next('div', class_='value')
    company_form = form_block.text.strip() if form_block else 'N/A'

    return {
        'Name': name,
        'Address': address,
        'CVR': cvr,
        'Status': status,
        'Company Type': company_form
    }


def fetch_page_data(page_url):
    """Fetch data for a single page."""

    headers = {
        "referer": "https://datacvr.virk.dk",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    }
    data = {
        "cmd": "request.get",
        "url": page_url,
        "maxTimeout": 90000
    }
    #response = send_request(FLARE_SOLVERR_URL, data)
    response = requests.post(FLARE_SOLVERR_URL, headers=headers, json=data)
    print("waiting 30 - first")
    time.sleep(30)
    response.raise_for_status()
    json_response = response.json()
    print("waiting 30 - second")
    time.sleep(30)
    if json_response.get("status") == "ok":
        html = json_response["solution"]["response"]
        return BeautifulSoup(html, "lxml")
#return parse_html(response['solution']['response'])

def fetch_all_data(base_url, max_pages=100):
    """Fetch data across multiple pages."""
    all_results = []
    for page_number in range(max_pages):
        page_url = f"{base_url}&sideIndex={page_number}"
        page_data = fetch_page_data(page_url)
        if not page_data:
            logging.info("No more data to fetch, stopping.")
            break
        all_results.extend(page_data)
        logging.info(f"Data from page {page_number} fetched successfully.")
    return all_results

def main():
    base_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&antalAnsatte=ANTAL_1000_999999&size=10"
    results = fetch_page_data(base_url)
    logging.info("Successfully retrieved all data.")
    print(results)

if __name__ == "__main__":
    main()
