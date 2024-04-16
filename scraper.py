import requests
import json

# Adjust these variables according to your setup
FLARE_SOLVERR_URL = "http://localhost:8191/v1"  # URL where FlareSolverr is listening
COOKIE_URL = "https://datacvr.virk.dk"  # URL to get the cookies
TARGET_URL = "https://datacvr.virk.dk/enhed/virksomhed/44743752?fritekst=*&sideIndex=0&startdatoFra=01%252F04%252F2024&startdatoTil=07%252F04%252F2024&size=10"

def access_protected_page(cookie_url, target_url, flare_solverr_url):
    try:
        # Headers for the FlareSolverr POST request
        headers = {"Content-Type": "application/json"}
        # Data to send to FlareSolverr, requesting it to get the cookies and user-agent from the cookie URL
        data = {
            "cmd": "request.get",
            "url": cookie_url,
            "maxTimeout": 1200000,  # Milliseconds, adjust the timeout as needed
        }

        # Sending request to FlareSolverr to get cookies
        response = requests.post(flare_solverr_url, headers=headers, json=data)
        response.raise_for_status()

        # Parsing the response from FlareSolverr
        response_data = json.loads(response.content)
        cookies = {cookie["name"]: cookie["value"] for cookie in response_data["solution"]["cookies"]}
        user_agent = response_data["solution"]["userAgent"]

        # Now use the obtained cookies and user agent to make the actual request to the target site
        result = requests.get(target_url, cookies=cookies, headers={"User-Agent": user_agent})
        result.raise_for_status()

        # You could do more processing with result.content or result.text here depending on your needs
        print("Target page successfully accessed.")
        return result.text

    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    html_content = access_protected_page(COOKIE_URL, TARGET_URL, FLARE_SOLVERR_URL)
    # Optionally, print the HTML content or process it further
    print(html_content)
