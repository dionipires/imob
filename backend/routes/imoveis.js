// routes/imoveis.js
const express = require('express');
const router = express.Router();
const Imovel = require('../models/imovel');

// Rota para listar todos os imóveis
router.get('/imoveis', async (req, res) => {
  try {
    const imoveis = await Imovel.find();
    res.json(imoveis);
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error.message);
    res.status(500).send('Erro do servidor ao buscar imóveis.');
  }
});

// Adicione outras rotas conforme necessário para CRUD

module.exports = router;
