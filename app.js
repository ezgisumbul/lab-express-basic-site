const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

// app.get('/home', (request, response) => {
//   response.sendFile(__dirname + '/views/home.html');
// });

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.use(express.static('public'));

app.get('*', (request, response) => {
  response.send('Page does not exist');
});

// dsjkdh
// dfjw
// jafk
// ajef

app.listen(5300);
