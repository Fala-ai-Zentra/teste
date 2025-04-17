const model = require('../models/fortuneRabbitModel');

exports.createSpin = async (req, res) => {
  try {
    const { user_id, spin_result, is_jackpot, multiplier } = req.body;
    const result = await model.createSpin(user_id, spin_result, is_jackpot, multiplier);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserSpins = async (req, res) => {
  try {
    const { userId } = req.params;
    const spins = await model.getSpinsByUser(userId);
    res.json(spins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
