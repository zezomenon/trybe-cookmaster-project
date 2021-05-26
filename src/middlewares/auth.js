const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { findUserByEmail } = require('../models/userModels');

const SECRET = '12345';

const generateToken = async (userEmail) => {
  const { _id, email, role } = await findUserByEmail(userEmail);

  const payload = { _id, email, role };
  const token = jwt.sign(payload, SECRET);
  return token;
};

const getUserIdByToken = (authorization) => {
  jwt.verify(authorization, SECRET, (err, decoded) => {
    if (err) {
      throw new CustomError({
        message: 'jwt malformed',
        status: StatusCodes.UNAUTHORIZED,
      });
    }
    const { _id } = decoded;
    return _id;
  });
};
// source: https://github.com/auth0/node-jsonwebtoken/issues/208

module.exports = { generateToken, getUserIdByToken };
