const express = require('express');
const app = express();
const dotenv = require('dotenv');
const result = dotenv.config();

// if (result.error) {
//     throw result.error;
// }

const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});