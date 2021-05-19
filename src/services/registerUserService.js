// const { StatusCodes } = require('http-status-codes');

const { createUser } = require('../models/userModels');

const registerUserService = async (name, email, password) => {
  const role = 'user';
  const result = await createUser(name, email, password, role);
  // console.log(result);
  return result;
};

module.exports = registerUserService;
