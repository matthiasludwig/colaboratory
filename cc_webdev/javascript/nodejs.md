# Node.js

## Accessing the Process Object

* `process.env` property is an object that sotres and controls information about the environment that it is currently running in
* This contains the `PWD` porperty that holds the current working directory
* We can set the `process.env.NODE_ENV` to reflect "development" or "productive" mode
* `process.memoryUsage()` returns information about the CPU demands of the current process
* `process.argv` returns the arguments that were used to start the program

## Core Moduls and Local Modules

* `require=('events');` imports a module to the program
* `module.exports` exports a (local) module

## Event-driven Architecture

```javascript
// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

const myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);
myEmitter.emit('celebration', 'Dogs!');

```

## Errors

* Node has the same Error types as Javascript
* In async situations the usual try...catch statements don't catch our errors
* Many async Node APIs use *error-first callback functions*

```javascript
const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback);
```

## Filesystem

* The `fs` module includes an API for interacting with the filesystem
* Usage: `fs.readFile('./file.txt', 'utf-8', readDataCallBack)

```javascript
const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong ${err}`);
  }
  else {
    console.log(`${data}`)
  }
}

fs.readFile('./finalFile.txt', 'UTF-8', readDataCallback);

let secretWord = "cheeseburgerpizzabagels";
```

## Readable Streams

```javascript
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt")
});

const printData = (data) => {
  console.log(`Item: ${data}`);
}

myInterface.on('line', printData);
```

## Writable Streams

```javascript
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);

fileStream.end();
```

## Create a HTTP Server

* `http.createServer()` return an instance of `http.server`
* An `http.server` has a method `.listen()`

```javascript
const http = require('http');

let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};

const server = http.createServer(requestListener);

server.listen(3000);
```
