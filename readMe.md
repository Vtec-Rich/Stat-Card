# Player Stats Card

## Description
Player stat card. NPM is used for package management, with node-sass used for sass compilation.
https://github.com/sass/node-sass

## Prerequisites
You will need node and npm installed on your system.

## Installing
Firstly we need a server; for this I have used http-server:
https://www.npmjs.com/package/http-server

Installation is via NPM. Open a command prompt and run:

```
npm install http-server -g
```

This will install http-server globally so it can be run from the command line.

Next open a command prompt and navigate to the root folder of the project, (inside the folder with the package.json file).
Then run:

```
npm install 
```

This will install the package node-sass. There are two available commands set up. To auto compile into expanded css for easier debugging run:

```
npm run scss-dev 
```
This will watch the scss files in the scss folder and re-compile when the file is changed and saved.

To compile a production version of the css run:

```
npm run scss-prod 
```

This will create a minified version of the css in the css folder. The index.html file will then need to be updated with the link to this file.

To view the stat card, open a command prompt and navigate to the root folder of the project, (inside the folder with the package.json file).
Then run:

```
http-server
```

The server will start and the component should now be available for viewing on:

http://127.0.0.1:8080/app/index.html

The address will be shown in the command prompt window. Simply open a browser and navigate to the specified address.