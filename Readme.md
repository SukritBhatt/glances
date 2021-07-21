# Glances - A video conferencing web app 
 <img src="src\assets\video_call_symbol_clr.png" width="40" height="40" float="left" alt="Glances"/> A simple and easy to use video conferencing app developed using express, socket.io and WebRTC.

## Working Demo - Deployed version
A complete working version of this web app is deployed on Heroku - https://glancesmeet.herokuapp.com.  

## Table of contents
* [Technologies and key Dependencies](#technologies-and-key-dependencies)
* [Features](#features)
* [Screenshot](#screenshot)
* [Using the Website](#using-the-website)
* [Basic setup for local system](#setup)
* [Notes](#notes)

## Technologies and key Dependencies
This web app project relies on the **Node.js** environment for server-side implementation. The technologies used in the project are as follows:
* Express - As a minimal and flexible framework
* Socket.io - For signalling purposes to enable real-time, bidirectional and event-based communication
* WebRTC - To enable real-time video-calling capabilities via its APIs
* Bootstrap - Used as front-end toolkit to build a neatly structured website that scales down to mobile devices as well
* Jquery - As a javascript library to write succinct, concise and functional code.

## Features
* **Multiple Users** (>2) can join a single room. See [Notes](#notes) point 1.
* **Video Chat** - Users can join with both **audio** and **video** streams
* **Text Chat** - Users can **chat** together in the room using the collapsible and auto-scrolling chat pane. The chats are time-stamped, dual colour-coded (receiver + all senders) and labelled by sender's name. 
* **Stop Video** - Users can disable their own video streams.
* **Mute Audio** - Users can mute themselves.
* **Screen Sharing** - Users can share their desktop screens/entire screens, specific app windows or specific browser tabs. See [Notes](#notes) point 2.
* **Screen Recording** - Users can record their shared screens.
* **Video Recording** - Users can record their shared videos.
* **Room Code/Room Link** - Users can join an existing room using either the **room code** or the **room link**.
* **Link/Code sharing through social media** - After creating a room, the user has the option to share the room code/room link using Facebook, Twitter, Gmail or WhatsApp.
* **Accessible Web App** - The web app incorporates **three accessibility features**.
    - All non-labelled elements have **aria text, alt text or titles**.
    - Support for **bigger font-size** throughout the app.
    - Support for **dyslexia-friendly** font throughout the app.
* **Dark Mode** - Once inside the room, the user can toggle between interface-wide dark and light modes.

## Screenshot
<img src="https://i.ibb.co/jD7fzxv/glances-gif-1.gif" alt="GIF1"/>

## Using the website
* On the landing page/home page, users have a choice to create either a new room or join an already existing room if they have its room code.
  - If a user enters an already existing room, they will be directly taken to the meeting page.
  - If a user creates a new room instead, a new form containing the new room details will appear.
* On creating a new room, the **Your Room Details** form will furnish the room code and the room link that can be copied to the clipboard using the buttons provided (or manually) and shared with the other meeting participants. Facebook, Twitter, Gmail, and WhatsApp sharing icons are also present in the form, and they will directly take the user to the sharing website in a new box window with the invitation message already typed out along with the link and code. On clicking the **Enter Room** button, the user will be taken to the meeting page.
* Users who want to join a room can either do so by using the Room Code directly on the home page, or if they have the link they will directly be taken to the meeting page with a prompt to enter their name.
* On the meeting page, all the meeting controls can be found on the top right of the screen in the top navbar.
* Individual users can be muted by hovering the mouse over their video feed, revealing a mute button and a fullscreen button.
* Accessibility buttons and the toggle for the dark mode are floating buttons on the lower right corner of the website.
* To exit the meeting, a user can either click on the rightmost button in the top navbar or click the Glances name/logo on the top-left corner.

## Setup
* Node.js and npm must be installed on the system.
* Obtain the code and place it in a folder.
* `cd` into the folder.
* Before the first run, execute `npm install` to install all the necesary dependencies. This is not required for subsequent launches of the app.
* To launch the app, `cd` into the root directory and run `npm start`.
* A message in the console will display the port on which the app is running. Unless the source code is changed or modified, you can find the app running on http://localhost:3000, i.e., port 3000.


## Notes
1. WebRTC establishes a P2P (peer-to-peer) connection between the communicating devices. Owing to this, no intermediary media server is required for communication. However, this becomes a bottleneck when it comes to scaling up the application. Due to the P2P nature, a mesh network is formed when more than 2 users connect together. With every new user, this mesh becomes more complex and dense. Hence, bandwidth limitations in practical scenarios might allow only **upto 4 users** to connect together. With better internet connections, the web app can handle **upto 8** users per room.

2. This app uses the same stream and display element for handling both the remote videos and shared screens of users. This implementation allows the user to view the shared screens of multiple users simultaneously in the same slots where their videos would appear. This can allow the meeting participants to share their screens while also being able to watch the shared screens of others since no one particular shared screen is given focus or priority.

3. This web project makes use of the autolink.js tool to find and hyperlink URLs within user text. This library can be found at https://github.com/bryanwoods/autolink-js developed by Bryan Woods.

4. The WebRTC project at https://github.com/amirsanni/Video-Call-App-NodeJS.git was of great help to me in understanding how to manage video streams and socket connections.
