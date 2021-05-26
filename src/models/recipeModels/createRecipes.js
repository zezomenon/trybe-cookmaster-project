const connection = require('../../../config/connection');

const createRecipes = async (name, ingredients, preparation, userId) =>
  connection().then(async (db) => {
    const newRecipe = await db.collection('recipes').insertOne({
      name,
      ingredients,
      preparation,
      userId,
    });
    return newRecipe.ops[0];
  });

module.exports = createRecipes;
