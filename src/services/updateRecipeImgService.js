const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { updateRecipeImg, getRecipeById } = require('../models/recipeModels');

const tokenValidate = (authorization) => {
  if (!authorization) {
    throw new CustomError({
      message: 'missing auth token',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const updateRecipeImgService = async (authorization, id, image) => {
  tokenValidate(authorization);
  const recipe = await getRecipeById(id);
  const result = await updateRecipeImg(id, recipe, image);
  return result;
};

module.exports = updateRecipeImgService;
