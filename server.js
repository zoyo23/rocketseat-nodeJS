const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNerParser: true });

//Primeira rota
app.get("/", (req, res) => {
    res.send("Hello rocketseat");
});
app.listen(3001);