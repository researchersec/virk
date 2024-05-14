import requests
import json

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
    response_data = json.loads(response.content)

    return response_data  # Returning the whole response data for now

# Example usage with your specific URL
cookie_url = "https://datacvr.virk.dk/enhed/person/4000770103/deltager?fritekst=*&sideIndex=0&size=10"
try:
    result = get_cookies_with_user_agent(cookie_url)
    print(result)  # Print the result to see the response from FlareSolverr
except Exception as e:
    print(f"An error occurred: {e}")
