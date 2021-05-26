const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { createRecipes } = require('../models/recipeModels');
const { getUserIdByToken } = require('../middlewares/auth');

const fieldsValidate = (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
    throw new CustomError({
      message: 'Invalid entries. Try again.',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const recipesService = async (authorization, name, ingredients, preparation) => {
  fieldsValidate(name, ingredients, preparation);
  const userId = getUserIdByToken(authorization);
  const result = await createRecipes(name, ingredients, preparation, userId);
  return result;
};

module.exports = recipesService;
