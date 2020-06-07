import express from 'express';

// Initializing packages
const app = express();

// Setting up server

app.set('port', process.env.PORT || 3000)


// routes
app.get('/', () => {
  res.send('Hello World');
});


// start the server
app.listen(app.get('port'), function () {
  console.log('server on port ', app.get('port'))
})
