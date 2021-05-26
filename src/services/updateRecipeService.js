const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { updateRecipe } = require('../models/recipeModels');
const { getUserIdByToken } = require('../middlewares/auth');

const tokenValidate = (authorization) => {
  if (!authorization) {
    throw new CustomError({
      message: 'missing auth token',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const updateRecipeService = async (authorization, id, body) => {
  tokenValidate(authorization);
  const userId = getUserIdByToken(authorization);
  console.log(userId);
  const result = await updateRecipe(id, body, userId);
  return result;
};

module.exports = updateRecipeService;
