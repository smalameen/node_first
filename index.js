const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hehehe modon");
});

app.listen(3000,console.log("ei shei node"));