const express = require('express');
const router = express.Router();
const Utente = require('../models/utente');

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
      const { username, password } = req.body;
  
      // Verifica se l'utente esiste già
      const existingUser = await Utente.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'L\'utente esiste già' });
      }
  
      // Crea un nuovo utente
      const nuovoUtente = new Utente({
        username,
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

  // Route per il login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Trova l'utente nel database
    const utente = await Utente.findOne({ username, password });

    if (!utente) {
      return res.status(401).json({ message: 'Nome utente o password non validi' });
    }

    // Autenticazione riuscita, restituisci informazioni sull'utente
    res.status(200).json(utente);
  } catch (error) {
    console.error('Errore durante il login:', error);
    res.status(500).json({ message: 'Errore interno del server' });
  }
});
  

module.exports = router;