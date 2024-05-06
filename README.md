# Getting Started with React Event App

This is a full-stack event management application built with React JS on the front end and Node JS on the back end. It allows users to perform CRUD operations on events, add comments to specific events, create accounts, authenticate themselves, and search for events.

## Available Scripts

In the project directory, you can run:

### `npm install` Installation of dependencies

    cd client
    npm install

    cd api
    npm install

### `npm start` Runs the app in the development mode.

    cd client
    npm start

    cd api
    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Details

### Front End

- TypeScript
- React JS
- Material UI for CSS styling
- Effector library for state management

### Back End

- Node JS
- GraphQL with "@graphql-tools" and "express-graphql"
- MongoDB for database storage using mongoose

## Features

- **Authentication**: Users can create accounts and authorize themselves.
- **CRUD Operations**: Users can create, read, update, and delete events.
- **Search**: Search functionality allows users to search for events.
- **Comments**: Users can add comments to specific events.

# API (.env file in api directory)

MONGODB_URL=<YOUR_MONGODB_URL>
PORT=<YOUR_PORT>
SECRET=<YOUR_SECRET_KEY>
