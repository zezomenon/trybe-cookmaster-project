const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { createUser, findUserByEmail } = require('../models/userModels');

const fieldsValidate = (name, email, password) => {
  if (!name || !email || !password) {
    throw new CustomError({
      message: 'Invalid entries. Try again.',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailValidate = (email) => {
  const regexEmail = /\S+@\S+\.\S+/.test(email);
  if (!regexEmail) {
    throw new CustomError({
      message: 'Invalid entries. Try again.',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};
// source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

const emailAlreadyExists = async (email) => {
  const result = await findUserByEmail(email);
  if (result) {
    throw new CustomError({
      message: 'Email already registered',
      status: StatusCodes.CONFLICT,
    });
  }
};

const registerUserService = async (name, email, password) => {
  const role = 'user';
  fieldsValidate(name, email, password);
  emailValidate(email);
  await emailAlreadyExists(email);

  const result = await createUser(name, email, password, role);
  return result;
};

module.exports = registerUserService;
