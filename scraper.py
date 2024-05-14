import requests
import json
import time

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

    # Sending request to FlareSolverr to get cookies
    response = requests.post(FLARE_SOLVERR_URL, headers=headers, json=data)
    response.raise_for_status()  # This will raise an exception if the request failed

    # Parsing the response from FlareSolverr
    response_data = response.json()

    return response_data

def make_authenticated_request(target_url, cookie_url):
    # Get cookies and user-agent using FlareSolverr
    response_data = get_cookies_with_user_agent(cookie_url)
    
    # Extracting cookies and user-agent from the response
    cookies = {cookie['name']: cookie['value'] for cookie in response_data['solution']['cookies']}
    user_agent = response_data['solution']['userAgent']
    
    # Prepare headers for the new request
    headers = {
        "User-Agent": user_agent
    }

    # Wait for 10 seconds to ensure the content is loaded dynamically
    time.sleep(10)
    
    # Making a new request with the obtained cookies and user-agent
    response = requests.get(target_url, headers=headers, cookies=cookies)
    response.raise_for_status()  # Raise an exception if the request failed
    
    return response.content  # Or response.json() if the response is in JSON format

# Example usage
cookie_url = "https://datacvr.virk.dk/enhed/person/4000770103/deltager?fritekst=*&sideIndex=0&size=10"
target_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&sideIndex=0&size=10"

try:
    result = make_authenticated_request(target_url, cookie_url)
    print(result)  # Print the result to see the response from the target URL
except Exception as e:
    print(f"An error occurred: {e}")
