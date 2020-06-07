import express from 'express';

// Initializing packages
const app = express();

// Setting up server

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function () {
  console.log('server on port ', app.get('port'))
})
