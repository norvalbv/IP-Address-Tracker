const express = require('express');
const { stage, port, keyMap, keyID } = require('./config');
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening on ${port}.`);
});

app.get('/', (req, res) => {
    
})