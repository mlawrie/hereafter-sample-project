const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login', (req, res) => res.send('post'));

app.listen(6500, () => console.log('Example app listening on port 6500!'));