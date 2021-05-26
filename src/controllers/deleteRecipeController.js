const { StatusCodes } = require('http-status-codes');
const { deleteRecipeService } = require('../services');

const deleteRecipeController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    await deleteRecipeService(authorization, id);
    await res.status(StatusCodes.NO_CONTENT).json();
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = deleteRecipeController;
