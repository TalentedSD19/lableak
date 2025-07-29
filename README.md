# LabLeak: Real-Time Code Sharing App

Welcome to **LabLeak**, a lightweight, real-time code-sharing web app built with React and Firebase. Share code snippets instantly with others using unique URLs, perfect for collaborative coding, pair programming, or quick demos. No signup required for basic usage, and it’s hosted for free on Firebase!

## Features
- **Real-Time Sync**: Edit code in a textarea, and changes sync instantly across all users on the same URL slug.
- **Simple URLs**: Share code via unique slugs (e.g., `https://lab-leak.web.app/my-snippet`).
- **Firebase-Powered**: Uses Firebase Realtime Database for seamless, low-latency updates.
- **Responsive Design**: Full-screen textarea for distraction-free coding, optimized for all devices.
- **Free & Open**: Hosted on Firebase’s Spark Plan, no billing required.

## Tech Stack
- **Frontend**: React with Vite for fast builds.
- **Backend**: Firebase Realtime Database for real-time data syncing.
- **Hosting**: Firebase Hosting for static deployment.
- **Styling**: Minimal CSS for a clean, functional UI.

## How to Use
1. **Visit the App**:
   - Open `https://lab-leak.web.app` in a browser.

2. **Create or Join a Code Session**:
   - Add a slug to the URL, e.g., `https://lab-leak.web.app/my-snippet`.
   - The slug (e.g., `my-snippet`) is your unique session ID.

3. **Share Code**:
   - Type or paste code in the textarea.
   - Share the URL (e.g., `https://lab-leak.web.app/my-snippet`) with others.
   - Anyone with the URL can view and edit the code in real time.

4. **Real-Time Collaboration**:
   - Multiple users can edit the same slug simultaneously, with changes syncing instantly.
   - Use different slugs (e.g., `https://lab-leak.web.app/another-snippet`) for separate sessions.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

Check out the live app at [https://lab-leak.web.app](https://lab-leak.web.app)!
