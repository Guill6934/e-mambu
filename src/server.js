import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js'

// Initializing packages
const app = express();

// Setting up server

app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.json({api: "Hello World"})
});

// start the server
app.listen(app.get('port'), function () {
  console.log('server on port ', app.get('port'))
})
