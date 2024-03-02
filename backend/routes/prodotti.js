const express = require('express');
const router = express.Router();
const Prodotto = require('../models').Prodotto;

// Route per ottenere tutti i prodotti
router.get('/', async (req, res) => {
  try {
    const prodotti = await Prodotto.find();
    res.json(prodotti);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Errore durante il recupero dei prodotti' });
  }
});

// Altre route per gestire le operazioni CRUD sui prodotti (ad esempio, creazione, aggiornamento, cancellazione)

module.exports = router;
