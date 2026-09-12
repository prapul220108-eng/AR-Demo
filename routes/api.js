const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

router.get('/items', (req, res) => {
  res.json(Item.getAll());
});

router.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newItem = Item.create(name);
  res.status(201).json(newItem);
});

module.exports = router;