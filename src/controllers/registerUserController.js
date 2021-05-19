const { StatusCodes } = require('http-status-codes');
const { registerUserService } = require('../services');

const registerUserController = async (req, res, _next) => {
  try {
    const { name, email, password } = req.body;
    const result = await registerUserService(name, email, password);
    console.log(result);
    await res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    const { status, message } = error;
    await res.status(status).json({
      message,
    });
  }
};

module.exports = registerUserController;
