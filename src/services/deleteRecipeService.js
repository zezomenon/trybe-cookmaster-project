const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { deleteRecipe } = require('../models/recipeModels');
const { getUserIdByToken } = require('../middlewares/auth');

const tokenValidate = (authorization) => {
  if (!authorization) {
    throw new CustomError({
      message: 'missing auth token',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const deleteRecipeService = async (authorization, id) => {
  tokenValidate(authorization);
  getUserIdByToken(authorization);
  const result = await deleteRecipe(id);
  return result;
};

module.exports = deleteRecipeService;
