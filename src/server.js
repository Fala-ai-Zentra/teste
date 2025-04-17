const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(() => console.log('✅ Conectado ao banco de dados!'))
  .catch(err => console.error('❌ Erro ao conectar no banco de dados:', err));

module.exports = pool;
