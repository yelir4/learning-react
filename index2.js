// https://youtu.be/ENrzD9HAZK4?si=eCGa7oCzkJH2HMNg
// continuing with this, we need a new file
// because i already previously implemented readFile in the example


// one more solution that doesnt use callbacks: PROMISE BASED SOLUTION
// also asynchronous, non-blocking
// import readFile from the `promises` namespace
// gives function that returns promise when called
const { readFile } = require('fs').promises;

// async-await syntax
// makes code readable
async function hello()
{
    const file = await readFile('./hello.txt', 'utf8');
}

console.log(hello());


// modules, npm
// module: javascript file that exports its code
// kind of like a header file in c
// node has built in modules like `events` and `fs`

// we use `require()` to import modules
// we can also use import/export to import modules

// lets look at my-module.js
// and now we use `require` to import `./my-module.js` into this file
const myModule = require('./my-module');

// this is how you get the return of your module
// note that if you dont have any code exported
// this just gives you {}
console.log(myModule);

// { science: '🍣' }

// `npm` node package manager, used to import other people's code/modules
// included with node

// npm init -y
// creates `package.json` file in this directory
// contains metadata about our project, as well as its DEPENDENCIES

// now i'm installing express.js
// npm install express

// now there's a package-lock.json
// also in the package.json `express` is listed as a dependency
// this allows us to install these dependencies if working on another system

// the raw code for the actual dependency now lives in the `node_modules`
// folder in this directory
// we dont want to touch that code ...

// now we want to import the `express` package by name
const express = require('express');

console.log(express);


// now we're ready to build a real full-stack application, deploy it to the cloud
// this is the typical full-stack web application
// server lives on a URL
// when user makes request to this URL, server responds with HTML
//
//
//
//
// now we can go back to index.js, line 80