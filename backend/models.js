const mongoose = require('mongoose');

// Schema per il modello dei prodotti
const ProdottoSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    codice: {
      type: String,
      required: true,
      unique: true
    },
    descrizione: String,
    // Altri campi pertinenti al prodotto
  });
  
  const Prodotto = mongoose.model('Prodotto', ProdottoSchema);

// Schema per il modello degli utenti
const UtenteSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    // Altri campi pertinenti all'utente
  });
  
  const Utente = mongoose.model('Utente', UtenteSchema);
  
  module.exports = {
    Prodotto,
    Utente
  };