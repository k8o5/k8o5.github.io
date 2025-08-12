# k8OS - A Web-based Desktop Environment

A retro-inspired, AI-powered web desktop environment that runs entirely in your browser.

![A picture of Sparky, the k8OS assistant](sparky.svg)

k8OS is a sophisticated, client-side web application that simulates a desktop operating system environment. It features a classic graphical user interface with windows, icons, a taskbar, and a start menu. What makes k8OS unique is its suite of integrated applications, many of which are powered by generative AI, allowing users to create games, music, and graphics with simple text prompts.

## Core Features

*   **Familiar Desktop UI:** A fully client-side desktop experience with draggable windows, a taskbar, a start menu, and a right-click context menu.
*   **AI-Powered Applications:** A suite of creative tools that leverage generative AI to produce content on the fly.
*   **Multi-Provider AI Support:** Easily switch between different AI providers, including:
    *   Google Gemini
    *   Groq
    *   OpenRouter
    *   DeepSeek
    *   Hugging Face (Inference API)
    *   Transformers.js (for running local, in-browser LLMs)
    *   Custom, user-hosted endpoints
*   **Virtual File System (VFS):** A persistent file system that lives entirely in your browser's `localStorage`. Create, rename, delete, and download files and folders. You can even drag-and-drop files from your computer onto the k8OS desktop to import them.
*   **No Backend Required:** The entire OS and its applications run statically in the browser. No server-side processing is needed (except for the AI API calls, which go directly from your browser to the provider).

## Applications

k8OS comes with a variety of built-in applications:

*   **API Key Settings:** Configure the API keys for the various supported AI providers.
*   **File Explorer:** Browse and manage the virtual file system.
*   **Web Browser:** A basic iframe-based web browser to navigate the web or open local HTML files from the VFS.
*   **SVG Creator:** Generate SVG vector graphics from a text description.
*   **GIF Creator:** Create animated SVGs (SMIL) from a text prompt, or animate an existing static SVG.
*   **Game Generator:** A powerful tool that takes a game idea, generates a plan (mechanics, assets, sounds), generates all the required assets, and then writes the complete HTML/JavaScript game code.
*   **Music Studio:** Generate Web Audio API code to create musical themes and sound effects.
*   **System Settings:** Customize the k8OS appearance (background, icon size) and configure the AI models and prompts.
*   **Text Editor:** A simple text editor for creating and modifying files in the VFS.
*   **Sparky (The Assistant):** A helpful AI assistant that can create simple HTML pages or entire file/folder structures based on your requests.

## Getting Started

1.  **Run k8OS:** Since this is a static web app, you can run it by simply opening the `index.html` file in a modern web browser.
2.  **Set Up AI Features:**
    *   Upon first launch, the "API Key Settings" window will appear.
    *   Select your desired AI Provider from the dropdown menu.
    *   Paste your API key/token into the input field and click "Save".
    *   Once the key is saved, the AI-powered applications will be enabled.

## Technical Details

*   **Stack:** Built with pure, vanilla HTML, CSS, and JavaScript (ES Modules). No frameworks were used.
*   **Libraries:**
    *   `@google/generative-ai`: For interacting with the Gemini API.
    *   `marked`: For rendering Markdown in the UI.
    *   `JSZip`: For creating and downloading ZIP archives of files/folders.
    *   `es-module-shims`: To enable import maps in all browsers.
    *   `@huggingface/transformers`: For running local LLMs directly in the browser.
*   **Persistence:** All user data, including files created in the VFS and system settings, is stored in the browser's `localStorage`. A "Factory Reset" option is available in the Start Menu to clear all `localStorage` data.

## Customization

k8OS is designed to be customizable. You can tweak the behavior of the AI applications by modifying the base prompts used for generation.

*   Open the **System Settings** app (⚙️ icon).
*   Navigate to the **AI Config** tab.
*   Here you can modify the base instructions for the SVG Creator, Game Generator, Music Studio, and more.
*   This allows you to fine-tune the style, format, and rules the AI follows when creating content.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
