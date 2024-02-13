// app.js
const express = require('express');
const connectDB = require('./db');
const imoveisRouter = require('./routes/imoveis');

const app = express();

// Conecta ao banco de dados
connectDB();

// Middleware para processar dados JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('API da Imobiliária');
});

// Roteador para as rotas de imóveis
app.use('/api', imoveisRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
