const express = require('express');
const { port } = require('./config');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => {
    console.log(`App is listening on ${port}.`);
});