from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

def simple_test(url):
    service = Service(executable_path=r'chromedriver')
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')

    driver = webdriver.Chrome(service=service, options=options)
    try:
        driver.get(url)
        print("Page Title:", driver.title)  # Just print the title for now
    except Exception as e:
        print("An error occurred:", e)
    finally:
        driver.quit()

if __name__ == "__main__":
    url = "https://datacvr.virk.dk/enhed/virksomhed/44743752?fritekst=*&sideIndex=0&startdatoFra=01%252F04%252F2024&startdatoTil=07%252F04%252F2024&size=10"
    simple_test(url)
