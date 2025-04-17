
import express from 'express';
import { pool } from '../db.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const multiplier = (Math.random() * 10).toFixed(2);
    await pool.query(
      'INSERT INTO fortunerabbit_spins (multiplier, created_at) VALUES ($1, NOW())',
      [multiplier]
    );
    res.json({ multiplier });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao registrar jogada' });
  }
});

export default router;
