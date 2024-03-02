const express = require('express');
const router = express.Router();
const Utente = require('../models').Utente;

// Route per ottenere tutti gli utenti
router.get('/', async (req, res) => {
  try {
    const utenti = await Utente.find();
    res.json(utenti);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Errore durante il recupero degli utenti' });
  }
});

// Altre route per gestire le operazioni CRUD sugli utenti (ad esempio, registrazione, login, aggiornamento, cancellazione)

// Route per aggiungere un nuovo utente
router.post('/', async (req, res) => {
    try {
      const { nome, email, password } = req.body;
  
      // Verifica se l'utente esiste già
      const existingUser = await Utente.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'L\'utente esiste già' });
      }
  
      // Crea un nuovo utente
      const nuovoUtente = new Utente({
        nome,
        email,
        password,
        // Altri campi se necessario
      });
  
      // Salva l'utente nel database
      await nuovoUtente.save();
  
      res.status(201).json(nuovoUtente);
    } catch (err) {
      console.error('Errore durante l\'aggiunta dell\'utente:', err);
      res.status(500).json({ message: 'Errore interno del server' });
    }
  });
  

module.exports = router;