const { StatusCodes } = require('http-status-codes');
const { registerUserService } = require('../services');

const registerUserController = async (req, res, _next) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUserService(name, email, password);
    await res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({
      message,
    });
  }
};

module.exports = registerUserController;
