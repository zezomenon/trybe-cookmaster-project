const { getRecipes } = require('../models/recipeModels');

const getRecipesService = async () => {
  const result = await getRecipes();
  return result;
};

module.exports = getRecipesService;
