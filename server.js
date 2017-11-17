const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>hereafter-sample-project</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
  </html>
`));

app.get('/login', (req, res) => res.send('post'));

const port = 8080;
app.listen(port, () => console.log(`hereafter-sample-project listening on ${port}`));