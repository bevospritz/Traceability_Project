const mongoose = require("mongoose");

// Schema per il modello degli utenti
const UtenteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Altri campi pertinenti all'utente
});

const Utente = mongoose.model("Utente", UtenteSchema);

module.exports = {
  Utente
};
