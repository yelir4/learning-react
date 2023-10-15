// index3.js
// https://www.youtube.com/watch?v=ENrzD9HAZK4&list=LL&index=4&t=267s
// still on that

// writing the app with promises rather than callbacks

// import the readFile class from 'fs.promises'
// its in { } because why?
const { readFile } = require('fs').promises;

// import the express class from the `express` module
const express = require('express');
// create the default `express` app
const app = express();

// read the GET request from the client
app.get('/', async (request, response) => {
    // await 'fs' to finish reading `home.html`
    // (not on the main thread)
    // then send the response
    response.send( await readFile('./home.html', 'utf8') );
});

// have the app listen ( it also wont just close instantly )
// callback function
app.listen(process.env.PORT || 3001, () => {
    console.log('app available on localhost:3001');
})


// now we can push to the cloud
// one way: Google Cloud App Engine