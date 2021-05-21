const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services');

const loginController = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    await res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = loginController;
