const registerUserRoute = require('./registerUserRoute');
const loginRoute = require('./loginRoute');
const recipesRoute = require('./recipesRoute');
const getRecipesRoute = require('./getRecipesRoute');
const getRecipeByIdRoute = require('./getRecipeByIdRoute');
const updateRecipeRoute = require('./updateRecipeRoute');
const deleteRecipeRoute = require('./deleteRecipeRoute');

module.exports = {
  registerUserRoute,
  loginRoute,
  recipesRoute,
  getRecipesRoute,
  getRecipeByIdRoute,
  updateRecipeRoute,
  deleteRecipeRoute,
};
