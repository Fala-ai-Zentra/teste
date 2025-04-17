require('dotenv').config();
const app = require('./app');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;

// Conexão com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => {
    console.log('✅ Conectado ao banco de dados!');
    // Só inicia o servidor após conectar ao banco
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no banco de dados:', err);
    process.exit(1); // Encerra o servidor se não conectar
  });

// Exporta o pool para ser usado em outros arquivos, se quiser
module.exports = pool;
