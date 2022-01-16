const express = require('express');
const { stage, port, keyMap, keyID } = require('./config');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     console.log(req.params);
//     const api_url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_baufPaDiDCELtm7xL1PSucMWS46Ob&ipAddress=${params}`;
//     console.log('hello');
//     console.log(req);
//     res.send('yes');
// })

app.listen(port, () => {
    console.log(`App is listening on ${port}.`);
});