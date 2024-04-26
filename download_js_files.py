import os
import requests
from bs4 import BeautifulSoup

# Function to load HTML content from a file
def load_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

# Parse the HTML using BeautifulSoup
html_content = load_html('response4.html')
soup = BeautifulSoup(html_content, 'html.parser')

# Base URL for the files
base_url = "https://datacvr.virk.dk"

# Directory to save the downloaded files
save_dir = "js"
os.makedirs(save_dir, exist_ok=True)

# Find all <link> elements that contain JS files
for link in soup.find_all('link', href=True):
    href = link['href']
    if href.endswith('.js'):  # Check if the href value ends with .js
        full_url = base_url + href
        file_name = href.split('/')[-1]
        file_path = os.path.join(save_dir, file_name)

        # Download the JS file
        response = requests.get(full_url)
        if response.status_code == 200:
            with open(file_path, 'wb') as f:
                f.write(response.content)
            print(f'Downloaded {file_name}')
        else:
            print(f'Failed to download {file_name}')

print('Download complete.')
