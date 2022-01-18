const express = require('express');
const app = express();

const path = require('path');
const { port } = require('./config');

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`App is listening on ${port}.`);
});