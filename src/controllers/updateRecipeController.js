const { StatusCodes } = require('http-status-codes');
const { updateRecipeService } = require('../services');

const updateRecipeController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { body } = req;
    const recipe = await updateRecipeService(authorization, id, body);
    await res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = updateRecipeController;
