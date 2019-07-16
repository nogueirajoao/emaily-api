const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hey: 'buddy' });
    console.log("GET")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);