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

  module.exports = {
    Prodotto
  };