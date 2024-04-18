import requests
import json
import logging

# Setup basic configuration for logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

FLARE_SOLVERR_URL = "http://localhost:8191/v1"
HEADERS = {"Content-Type": "application/json"}

def send_request(url, data):
    """Send HTTP POST request to the specified URL."""
    logging.info("Sending request to FlareSolverr.")
    response = requests.post(url, headers=HEADERS, json=data)
    response.raise_for_status()
    return response

def handle_response(response):
    """Handle the response, parsing JSON and returning the data."""
    logging.info("Processing response data.")
    return json.loads(response.content)

def retry_request(cookie_url, retries=5):
    """Attempt to send request with retries on failure."""
    data = {
        "cmd": "request.get",
        "url": cookie_url,
        "maxTimeout": 60000
    }

    for attempt in range(retries):
        try:
            response = send_request(FLARE_SOLVERR_URL, data)
            return handle_response(response)
        except requests.exceptions.RequestException as e:
            logging.error(f"Attempt {attempt + 1} failed: {e}")
            if attempt == retries - 1:
                logging.critical("Maximum retry attempts reached, failing with exception.")
                raise

# Example usage with your specific URL
cookie_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&sideIndex=0&antalAnsatte=ANTAL_1000_999999&size=10"
try:
    result = retry_request(cookie_url)
    logging.info("Successfully retrieved data.")
    print(result)  # Print the result to see the response from FlareSolverr
except Exception as e:
    logging.error(f"An error occurred: {e}")
