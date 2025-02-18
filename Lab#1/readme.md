# Lab#1 Web Architecture

###### The objective of this lab is to provide you with a hands-on understanding of web architecture, focusing on the interaction between front-end (FE) and back-end (BE) systems using APIs. By building upon a pre-existing project structure.

### How to Run the Project


- install node througth https://nodejs.org/en
to check node is installed correctly run:
```sh
node -v
```
- install dependencies in BE
```sh
npm install
```
- install nodemon globally
```sh
npm install -g nodemon 
```

- to run server
```sh
npm run start
```
- to run front end
install live server vscode extension https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
right click on index.html and click on open with live server

- to run both
```sh
npm run dev
```

### Project Structure
- **FE**: The front-end folder contains the static web page that will be served to the user. It contains an index.html file, which is a simple HTML file that loads the JavaScript file. The JavaScript file (main.js) contains the code that interacts with the BE.
- **BE**: The back-end folder contains the server code. The server is a simple Express server that listens for requests on port 3000. The server has a single endpoint /api/data, which serves the data to the FE.

### Project Dependencies
- **FE**: The front-end uses the fetch API to make requests to the BE. The fetch API is a modern replacement for XMLHttpRequest and is supported in all modern browsers.
- **BE**: The back-end uses the Express library to create the server. Express is a minimalistic web framework for Node.js that provides a robust set of features for web and mobile applications.

### Project Walkthrough
1. **FE**: The front-end code is contained in the FE folder. The index.html file is a simple HTML file that loads the main.js file. The main.js file contains the code that interacts with the BE.
2. **BE**: The back-end code is contained in the BE folder. The server.js file is a simple Express server that listens for requests on port 3000. The server has a single endpoint /api/data, which serves the data to the FE.
3. **Interaction**: The front-end code makes a request to the /api/data endpoint on the server using the fetch API. The server responds with the data, which is displayed on the front-end.

### Task
Your task is to extend the project by adding a new endpoint to the back-end that accepts a POST request with data and stores the data in a file. The front-end should have a form that allows the user to input data and submit it to the back-end. The back-end should then store the data in a file and respond with a success message.

### Steps
1. **BE**: Add a new endpoint to the back-end that accepts a POST request with data and stores the data in a file.
2. **FE**: Add a form to the front-end that allows the user to input data and submit it to the back-end.
3. **FE**: Update the front-end

