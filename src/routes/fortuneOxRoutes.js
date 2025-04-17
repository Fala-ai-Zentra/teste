import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { user_id, bet_amount } = req.body;

    // Lógica de multiplicador aleatório (exemplo simples)
    const multiplier = parseFloat((Math.random() * 10).toFixed(2));
    const win_amount = parseFloat((bet_amount * multiplier).toFixed(2));

    const result = await pool.query(
      'INSERT INTO fortune_ox_spins (user_id, bet_amount, multiplier, win_amount) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, bet_amount, multiplier, win_amount]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao registrar a rodada.' });
  }
});

export default router;
