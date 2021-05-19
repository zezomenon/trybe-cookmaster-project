// const { StatusCodes } = require('http-status-codes');

const { createUser } = require('../models/userModels');

const registerUserService = async (name, email, password) => {
  const result = await createUser(name, email, password);
  // console.log(result);
  return result;
};

module.exports = registerUserService;
