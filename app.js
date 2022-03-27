const express = require('express');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'My Application';

app.get('/', (request, response) => {
  response.render('home', { pageTitle: 'Adrian Newey', text: 'Lorem ipsum.' });
});

// app.get('/home', (request, response) => {
//   response.sendFile(__dirname + '/views/home.html');
// });

app.get('/about', (request, response) => {
  response.render('about', { pageTitle: 'About', text: 'Lorem ipsum dolor.' });
});

app.get('/works', (request, response) => {
  response.render('works', {
    pageTitle: 'Works',
    text: 'Lorem ipsum dolor sit.'
  });
});

app.get('/gallery', (request, response) => {
  response.render('gallery', {
    pageTitle: 'Gallery',
    text: 'Lorem ipsum dolor sit amet.'
  });
});

app.get('*', (request, response) => {
  response.render('pagedne', {
    pageTitle: 'Error',
    text: 'Page does not exist.'
  });
});

app.listen(5300);
