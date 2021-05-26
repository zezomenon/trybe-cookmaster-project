const { StatusCodes } = require('http-status-codes');
const { recipesService } = require('../services');

const recipesController = async (req, res, _next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { authorization } = req.headers;
    const recipe = await recipesService(authorization, name, ingredients, preparation);
    await res.status(StatusCodes.CREATED).json({ recipe });
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = recipesController;
