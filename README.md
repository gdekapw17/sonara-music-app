## Project Sonara

Sonara is a modern music player application built with React.js. It allows users to discover new songs, explore top charts, view artist and album details, and read the lyrics of their favorite songs.

This app heavily inspired from Lyriks App by JavaScript Mastery Youtube Channel, with some adjustment on the Player fiture logic, styling, and using alternatives API, this project done just for learning purpose to familiarize myself how to working with API.

Check out the complete tutorial for the project [here](https://youtu.be/I1cpb0tYV74?si=h5qwcBbFv8b2m3qdg)

## Tech Stack

This project is built with a modern web development stack, including:

- Framework: React.js
- Build Tool: Vite
- State Management: Redux Toolkit (with RTK Query for data fetching)
- Styling: Tailwind CSS
- Routing: React Router
- UI Components: Swiper.js (for sliders)

## Key Features

- Discover: Explore music by selectable genres.
- Top Charts: View global top charts.
- Top Artists & Top Albums: Discover popular artists and albums.
- Detail Pages: Dynamic pages for Songs, Artists, and Albums.
- Song Lyrics: Display lyrics for the current song (powered by Musixmatch).
- Related Songs: Get related song recommendations from the same artist on the song detail page.
- Search: Search for your favorite songs.
- Functional Music Player: Full playback controls (play, pause, next, previous, shuffle, repeat) with a seekbar and volume control.
- Responsive Design: Optimized for both mobile and desktop devices

# APIs Used

This application is powered by several external APIs:

1. Deezer API: As the primary source for music data (songs, artists, albums, charts).
2. Musixmatch API (via RapidAPI): To provide song lyrics data.

## Setup and Installation

To run this project in your local environment, please follow these steps:

1. Prerequisites
   Make sure you have the following installed:

   - git (version 2.13.1 or higher)
   - node.js (version 16.15.1 or higher)
   - npm (version 5.6.1 or higher)

2. Clone the Repository
   Open your terminal and run the following commands:

   - git clone <YOUR_REPOSITORY_URL>
   - cd <PROJECT_FOLDER_NAME>

3. Install Dependencies
   Install all the required packages by running:

   - npm install

4. Configure Environment Variables (Important!)
   This application requires an API key to access the Musixmatch service.

   - Create a new file in the root directory of your project and name it .env.
   - Open the .env file and add the following variable. Replace YOUR_API_KEY with your actual RapidAPI key.
     "VITE_RAPID_API_KEY=YOUR_API_KEY"
   - Important: Ensure the .env file is added to your .gitignore file to prevent your API key from being uploaded to GitHub.

5. Run the Application
   Once all dependencies are installed and the .env file is configured:

   - run this command on your terminal:
     npm run dev
   - Open your browser and navigate to http://localhost:5173 (or any other port shown in the terminal) to see the application running.development server:
