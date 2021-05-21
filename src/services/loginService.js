const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { findUserByEmail } = require('../models/userModels');
const { generateToken } = require('../middlewares/auth');

const fieldsValidate = (email, password) => {
  if (!email || !password) {
    throw new CustomError({
      message: 'All fields must be filled',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const emailAndPasswordValidate = async (email, password) => {
  const result = await findUserByEmail(email);
  if (!result || result.password !== password) {
    throw new CustomError({
      message: 'Incorrect username or password',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const loginService = async (email, password) => {
  fieldsValidate(email, password);
  await emailAndPasswordValidate(email, password);

  const token = await generateToken(email);
  return token;
};

module.exports = loginService;
