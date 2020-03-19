const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello rocketseat");
});
app.listen(3001);