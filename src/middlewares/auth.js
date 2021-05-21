const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/userModels');

const SECRET = '12345';

const generateToken = async (userEmail) => {
  const { id, email, role } = await findUserByEmail(userEmail);

  const payload = { id, email, role };
  const token = jwt.sign(payload, SECRET);
  return token;
};

module.exports = { generateToken };
