const mongoose = require('mongoose');

const ImovelSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  // Adicione outros campos conforme necessário
});

const Imovel = mongoose.model('Imovel', ImovelSchema);

module.exports = Imovel;
