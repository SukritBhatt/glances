# Glances - A video conferencing web app 
 <img src="src\assets\video_call_symbol_clr.png" width="40" height="40" float="left" alt="Glances"/> A simple and easy to use video conferencing app developed using express, socket.io and WebRTC.

## Working Demo - Deployed version
A complete working version of this web app is deployed on Heroku - https://glancesmeet.herokuapp.com.  

## Table of contents
* [Technologies and key Dependencies](#technologies)
* [Features](#features)
* [Screenshot](#screenshot)
* [Basic setup for local system](#setup)
* [Notes](#notes)

## Technologies and key Dependencies
This web app project relies on the **Node.js** environment for server side implementation. The technologies used in the project are as follows:
* Express - As a minimal and flexible framework
* Socket.io - For signalling purposes to enable real-time, bidirectional and event-based communication
* WebRTC - To enable real-time communication capabilities via its APIs
* Bootstrap - Used as front-end toolkit to build a neatly structured website that scales down to mobile devices as well
* Jquery - As a javascript library to write succint, concise and funcitonal code.

## Features
* **Multiple Users** (>2) can join a single room. See [Notes](#notes) point 1.
* **Video Chat** - Users can join with both **audio** and **video** streams
* **Text Chat** - Users can **chat** together in the room using the collapsible and auto-scrolling chat pane. The chats are time-stamped, dual colour-coded (reciever + all senders) and labelled by sender's name. 
* **Stop Video** - Users can disable their own video streams.
* **Mute Audio** - Users can mute themselves.
* **Screen Sharing** - Users can share their desktop screens/entire screens, specific app windows or specific browser tabs. See [Notes](#notes) point 2.
* **Screen Recording** - Users can record their shared screens.
* **Video Recording** - Users can record their shared videos.
* **Room Code/Room Link** - Users can join an existing room using either the **room code** or the **room link**.
* **Link/Code sharing through social media** - After creation of room, the user has option to share the room code/room link using Facebook, Twitter, Gmail or WhatsApp.
* **Accessible Web App** - The web app incorporates **three accesibility features**.
    - All non-labelled elements have **aria text, alt text or titles**.
    - Support for **bigger font-size** theoughout the app.
    - Support for **dyslexia-friendly** font throughout the app.
* **Dark Mode** - Once inside the app, the user can toggle between interface-wide dark and light modes.

## Screenshot
<img src="https://i.ibb.co/jD7fzxv/glances-gif-1.gif" alt="GIF1"/>


## Setup
* Node.js and npm must be installed on the system.
* Obtain the code and place it in a folder.
* `cd` into the folder.
* Before the first ever run, execute `npm install` so that all the necesary dependencies are installed. This is not required for subsequent launches of the app.
* To launch the app, `cd` into the root directory, and run `npm start`.
* A message in the console will display the port on which the app is running. Unless the source code is changed or modified, you can find the app running on http://localhost:3000, i.e., port 3000.


## Notes
1. WebRTC establishes a P2P (peer-to-peer) connection between the communicating devices. Due to this no intermediary media server is required for communication. However, this becomes a bottleneck when it comes to scaling up the application. Due to the P2P nature, a mesh network is formed when more than 2 users connect together. With every new user this mesh becomes more complex and dense. Hence, due to bandwidth limitations and in practical scenarios, **upto 4 users** can connect together. With better internet connections, the web app can handle **upto 7-8** users per room.

2. This app uses the same stream and display element for handling both the remote videos and shared screens of users. This implementation allows an user to view the shared screens of multiple users simulatenously in the same slots where their videos would appear. This can allow the meeting participants to share their screens while also being able to watch the shared screens of others since no one particular shared screen is given focus or priority.