import requests
import json
import logging

# Setup basic configuration for logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def get_cookies_with_user_agent(cookie_url):
    # Constant URL for FlareSolverr
    FLARE_SOLVERR_URL = "http://localhost:8191/v1"

    # Headers for the FlareSolverr POST request
    headers = {"Content-Type": "application/json"}

    # Data to send to FlareSolverr, requesting it to get the cookies and user-agent from the cookie URL
    data = {
        "cmd": "request.get",
        "url": cookie_url,
        "maxTimeout": 60000,  # Milliseconds, adjust the timeout as needed
    }

    # Initialize a retry count
    retries = 5
    for attempt in range(retries):
        try:
            logging.info(f"Attempt {attempt + 1}: Sending request to FlareSolverr.")
            # Sending request to FlareSolverr to get cookies
            response = requests.post(FLARE_SOLVERR_URL, headers=headers, json=data)
            response.raise_for_status()  # This will raise an exception if the request failed

            # Parsing the response from FlareSolverr
            response_data = json.loads(response.content)
            logging.info("Request successful. Data received.")
            return response_data  # Return the data if successful

        except requests.exceptions.HTTPError as e:
            logging.error(f"HTTP Error on attempt {attempt + 1}: {e}")
            if attempt < retries - 1:
                continue  # Continue to the next attempt
            else:
                logging.critical("Maximum retry attempts reached, raising the last exception.")
                raise  # Re-raise the last exception after all retries are exhausted

        except requests.exceptions.RequestException as e:
            logging.error(f"Request failed on attempt {attempt + 1}: {e}")
            if attempt < retries - 1:
                continue
            else:
                logging.critical("Maximum retry attempts reached, raising the last exception.")
                raise

# Example usage with your specific URL
cookie_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&sideIndex=0&antalAnsatte=ANTAL_1000_999999&size=10"
try:
    result = get_cookies_with_user_agent(cookie_url)
    logging.info("Final result obtained successfully.")
    print(result)  # Print the result to see the response from FlareSolverr
except Exception as e:
    logging.error(f"An error occurred after 5 attempts: {e}")
