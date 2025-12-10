from playwright.sync_api import sync_playwright
import os

def verify_cadpro():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Get the absolute path to the HTML file
        file_path = os.path.abspath('cadpro.html')
        page.goto(f'file://{file_path}')
        page.screenshot(path='verification/cadpro.png')
        browser.close()

if __name__ == "__main__":
    verify_cadpro()
