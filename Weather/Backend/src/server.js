const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) =>
{
    res.send("Olá Mundo");
});

app.listen(9000, () =>
{
    console.log("Servidor iniciado...");
});