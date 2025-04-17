const pool = require('../config/db');

exports.createSpin = async (user_id, spin_result, is_jackpot, multiplier) => {
  const result = await pool.query(
    'INSERT INTO fortune_rabbit_spins (user_id, spin_result, is_jackpot, multiplier) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, spin_result, is_jackpot, multiplier]
  );
  return result.rows[0];
};

exports.getSpinsByUser = async (user_id) => {
  const result = await pool.query(
    'SELECT * FROM fortune_rabbit_spins WHERE user_id = $1 ORDER BY created_at DESC',
    [user_id]
  );
  return result.rows;
};
