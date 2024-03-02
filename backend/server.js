const express = require('express');
const bodyParser = require('body-parser');


// Creazione app Express
const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(bodyParser.json());


// Definizione delle route
const prodottiRoute = require('./routes/prodotti');
const utentiRoute = require('./routes/utenti');

app.use('/api/prodotti', prodottiRoute);
app.use('/api/utenti', utentiRoute);


// Gestione degli errori
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Errore interno del server');
  });


// Avvio del server

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});