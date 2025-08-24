import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Navigate to the local HTML file
        page.goto(f'file://{file_path}')

        # Click the start button
        page.locator('#startButton').click()

        # Find the update button and click it
        update_button = page.locator('#startMenuUpdate')
        expect(update_button).to_be_visible()

        # Set up a handler for the dialog that will appear
        dialog_appeared = False
        def handle_dialog(dialog):
            nonlocal dialog_appeared
            dialog_appeared = True
            expect(dialog.message).to_contain("Are you sure you want to update?")
            dialog.dismiss()

        page.on('dialog', handle_dialog)

        # Click the update button to trigger the dialog
        update_button.click()

        # Give a moment for the dialog to appear and be handled
        page.wait_for_timeout(500)

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

        if not dialog_appeared:
            raise Exception("Confirmation dialog did not appear.")

if __name__ == "__main__":
    run_verification()
