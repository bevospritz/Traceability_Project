const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Creazione app Express
const app = express();
const port = process.env.PORT || 5000;

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/PippoTom_Traceability_DB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connesso a MongoDB'))
  .catch(err => console.error('Errore durante la connessione a MongoDB:', err));


// Middlewares
app.use(bodyParser.json());

// Abilita CORS per tutte le origini
app.use(cors());

// Definizione delle route
const prodottiRoute = require('./routes/prodotti');
const utentiRoute = require('./routes/utenti');

app.use('/api/prodotti', prodottiRoute);
app.use('/api/utenti', utentiRoute);


// Gestione degli errori\
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Errore interno del server');
  });


// Avvio del server

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});