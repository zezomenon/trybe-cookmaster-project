const { StatusCodes } = require('http-status-codes');
const { getRecipesService } = require('../services');

const getRecipesController = async (_req, res, _next) => {
  try {
    const recipes = await getRecipesService();
    await res.status(StatusCodes.OK).json(recipes);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = getRecipesController;
