const { StatusCodes } = require('http-status-codes');
const { getRecipeByIdService } = require('../services');

const getRecipeByIdController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeByIdService(id);
    await res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = getRecipeByIdController;
