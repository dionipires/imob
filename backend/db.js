const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dionipires:IfYR7CWuVwX20oBu@imob.n5ujjmr.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexão com o banco de dados MongoDB estabelecida.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo com um código de erro
  }
}

module.exports = connectDB;
