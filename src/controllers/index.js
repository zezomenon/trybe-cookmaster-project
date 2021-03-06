const registerUserController = require('./registerUserController');
const loginController = require('./loginController');
const recipesController = require('./recipesController');
const getRecipesController = require('./getRecipesController');
const getRecipeByIdController = require('./getRecipeByIdController');
const updateRecipeController = require('./updateRecipeController');
const deleteRecipeController = require('./deleteRecipeController');
const updateRecipeImgController = require('./updateRecipeImgController');

module.exports = {
  registerUserController,
  loginController,
  recipesController,
  getRecipesController,
  getRecipeByIdController,
  updateRecipeController,
  deleteRecipeController,
  updateRecipeImgController,
};
