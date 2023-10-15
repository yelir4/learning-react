// https://youtu.be/ENrzD9HAZK4?si=eCGa7oCzkJH2HMNg


console.log('hello wrodl');
// now we can run
// 'node index.js' in the command line and it prints out hello world
// or some arcane spelling of it

// well also we can say `node .` since this is the `index` file of the directory ...


// global variables
global.luckyNum = 23;

// can be accessed anywhere in the node process
console.log(global.luckyNum);

// `process` is one of the most important globals
// can use it to check current platform/os or grab server's environment variable
// console.log(process);            // this one prints a lot of stuff
console.log(process.platform);      // print the platform (win32)


// `node.js` asynchronous event driven javascript runtime
// implements `event loop` like a web browser,
// node pushes intensive operations to another thread,
// fast operations happen in node -> node is `non-blocking`
// makes node good for operations that require high throughput



// listening to events on the `process` global
// when the program exits, it sends `exit` which we use to callback this function
process.on('exit', function() {
    // do something
})


// creating events from `events` module built into node
const { EventEmitter } = require('events')
// making an instance of the `EventEmitter` class
const eventEmitter = new EventEmitter();

// fires callback on the lunch event
eventEmitter.on('lunch', () => {
    console.log('yummy lunch')
})

// triggering the callback function
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');


// node's file system is called 'fs', can do things in a blocking or non-blocking way
// hello.txt

// readFile, readFileSync classes, require the `fs` module
// see `sync` -> think of BLOCKING
const { readFile, readFileSync } = require('fs');

// we read `hello.txt` by declaring a variable and calling its path
// utf-8 is the encoding
// reading files can take a while, note that sync is BLOCKING which makes this slow
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

// we refactor like so
// `readFile` is non blocking
// also if this call fails we will get an error and a text message
// example if we did `./hell.txt` the return is `undefined`
// and this NONBLOCKING example ends up executing after the `do this ASAP` statement
readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});

console.log('do this ASAP like rocky');

// now please look at index2.js
// UP UNTIL YOU REACH THE END OF IT
// THEN COME BACK HERE
//
// 
// 
// 
// 
// 
const express = require('express');

// create an instance of an express app
// allow us to make different URLs, endpoints that user can navigate to
// within the browser
// we define code for server to handle these requests
const app = express();

// HTTP BASICS: get request, client -> server
// `GET / HTML/1.1`
// you know the gist

// read the client's get request
// first argument is the URL
// `/` is the root url, remember
// different webpages are created by defining code for different urls
// ex: app.get('/foo/bar');
//
// `request`, `response` parameters for the CALLBACK function
// think of each GET request as an event, handled by the callback function
// request is the incoming data from the client, which we can PARSE
// for authentication or to understand their intention
app.get('/', (request, response) => {
    // remember that earlier in this code we imported readFile from `fs` module
    readFile('./home.html', 'utf8', (err, html) =>
    {
        // take care of possible errors occurring
        if (err)
        {
            response.status(500).send('sorry we are out of order');
        }

        response.send(html);
    })
});

// we can look at home.html here
// so note that our `server` has html in it, we needed to get a way to
// take the user's request and pass them html based on this request
// so we read the html in the readFile as 'non-blocking'
// and then as long as no error occurs we send this response to the client (browser)

// remember `process` is a global
// we get the port number to receive HTML requests on
// either the port of the process environment itself, or simply 3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`app available on localhost:3000`)
});


// note: callbacks can be difficult to work with, especially as
// project becomes more complex => callback hell
// instead we like to do promises

/*
const { readFile } = require('fs').promises

// callback function
app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8') );
});

*/

// we import from fs.promises
// our callback function is `async`,
// `response.send()` waits for the file to read


// lets move to index3.js