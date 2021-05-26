const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { getRecipeById } = require('../models/recipeModels');

const checkRecipeFound = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'recipe not found',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const getRecipeByIdService = async (id) => {
  const result = await getRecipeById(id);
  checkRecipeFound(result);
  return result;
};

module.exports = getRecipeByIdService;
