# Glances - A video conferencing web app

An easy to use and intuitive video calling app which is developed using express, socket.io, WebRTC and node.js.

## Table of contents
* [Technologies and key Dependencies](#technologies)
* [Features](#features)
* [Basic set up (for local development environment)](#setup)

## Technologies and key Dependencies
This web app project relies on the node.js environment for the server side implementation. The technologies used in the project are as follows:
* Express - For a clean and light javascript server
* Socket.io - For signalling purposes to enable real-time, bidirectional and event-based communication
* WebRTC - 
* Bootstrap (sourced from CDN) - Used as front-end toolkit to build a neatly structured website that scales well to mobile devices as well
* Jquery (sourced from CDN) - For quick and easy 

## Features
* Multiple Users can join a single room (practically upto 4-5 users can connect simultaneously after which bandwidth becomes the bottleneck)
* Video Chat - Users can join with both **audio** and **video** streams
* Text Chat - Users can **chat** together in the room using the collapsible and auto-scrolling chat pane. The chats are time-stamped, dual colour-coded (reciever + all senders) and labelled by sender's name. 
* Stop Video - Users can disable their video stream.
* Mute Audio - Users can mute themselves.
* Screen Sharing - Users can share their desktop screens/entire screens, specific app windows or specific browser. Tested in Google Chrome and Microsoft Edge.
* Screen Recording
* Video Recording

* Users can join an existing room using either the room code or the room link.
* After creation of room, the user has option to share the room code/room link using Facebook, Twitter or Gmail.
* The web app incorporates accesibility layers - All non-labelled or non-obvious elements have aria text. Support for bigger font-size theoughout the app. Support for dyslexia-friendly font.
* The
*  
* 


This app uses the same stream and display element for handling both the remote videos and shared screens of users. This implementation allows an user to view the shared screens of multiple users simulatenously in the same slots where their videos woud appear. This can allow the meeting participants to share their screens while also being able to watch the shared screens of others since no particular shared screen is given focus.  

w