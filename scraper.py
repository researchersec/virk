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

def make_authenticated_request(target_url, cookie_url, wait_selector, spinner_selector):
    # Get cookies and user-agent using FlareSolverr
    response_data = get_cookies_with_user_agent(cookie_url)
    
    # Extracting cookies and user-agent from the response
    cookies = {cookie['name']: cookie['value'] for cookie in response_data['solution']['cookies']}
    user_agent = response_data['solution']['userAgent']
    
    # Prepare headers for the new request
    headers = {
        "User-Agent": user_agent
    }

    # Use FlareSolverr to make the request to the target URL
    FLARE_SOLVERR_URL = "http://localhost:8191/v1"

    # Data to send to FlareSolverr for the target URL
    data = {
        "cmd": "request.get",
        "url": target_url,
        "maxTimeout": 120000,  # Milliseconds, adjust the timeout as needed
        "cookies": response_data['solution']['cookies'],  # Send cookies retrieved from the first request
        "headers": headers,  # Send the user-agent header
        "waitForSelector": wait_selector,  # Wait for the specific element to be loaded
        "waitFor": {
            "selector": spinner_selector,
            "visible": False  # Wait for the spinner to disappear
        }
    }

    # Sending request to FlareSolverr to get the target URL content
    response = requests.post(FLARE_SOLVERR_URL, headers=headers, json=data)
    response.raise_for_status()  # This will raise an exception if the request failed

    # Parsing the response from FlareSolverr
    response_data = response.json()

    return response_data['solution']['response']  # Return the response content

# Example usage
cookie_url = "https://datacvr.virk.dk/enhed/person/4000770103/deltager?fritekst=*&sideIndex=0&size=10"
target_url = "https://datacvr.virk.dk/soegeresultater?fritekst=*&sideIndex=0&size=10"
wait_selector = "div.soegeresultaterTabel[data-cy='soegeresultater-tabel']"  # Selector for the element indicating data is loaded
spinner_selector = "div.spinner"  # Selector for the spinner element

try:
    result = make_authenticated_request(target_url, cookie_url, wait_selector, spinner_selector)
    print(result)  # Print the result to see the response from the target URL
    # Write the result to a file to avoid truncation in the console
    with open("response_content.html", "w", encoding="utf-8") as file:
        file.write(result)
except Exception as e:
    print(f"An error occurred: {e}")
