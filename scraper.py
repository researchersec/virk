import html
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

def scrape_website(url):
    # Configure the Chrome driver
    service = Service(executable_path=r'chromedriver')
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    # Initialize the WebDriver with the specified service and options
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(url)

    try:
        # Wait for the page to load and a specific element to be present
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, 'element_id'))  # Replace 'element_id' with the ID of a relevant element
        )

        # Optional: Use BeautifulSoup to parse the page source
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Example of finding elements by tag
        headlines = soup.find_all('h1')
        for headline in headlines:
            print(headline.text.strip())

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    url = "https://datacvr.virk.dk/enhed/virksomhed/44743752?fritekst=*&sideIndex=0&startdatoFra=01%252F04%252F2024&startdatoTil=07%252F04%252F2024&size=10"
    scrape_website(url)
