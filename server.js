const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'build')));

const indexTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>hereafter-sample-project</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
  </html>`;
const port = 8080;

app.get('/', (req, res) => res.send(indexTemplate));

app.get('/login', (req, res) => res.send('post'));

app.listen(port, () => console.log(`hereafter-sample-project listening on ${port}`));