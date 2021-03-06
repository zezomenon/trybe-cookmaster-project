const registerUserService = require('./registerUserService');
const loginService = require('./loginService');
const recipesService = require('./recipesService');
const getRecipesService = require('./getRecipesService');
const getRecipeByIdService = require('./getRecipeByIdService');
const updateRecipeService = require('./updateRecipeService');
const deleteRecipeService = require('./deleteRecipeService');
const updateRecipeImgService = require('./updateRecipeImgService');

module.exports = {
  registerUserService,
  loginService,
  recipesService,
  getRecipesService,
  getRecipeByIdService,
  updateRecipeService,
  deleteRecipeService,
  updateRecipeImgService,
};
