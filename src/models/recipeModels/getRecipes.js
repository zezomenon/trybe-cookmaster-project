const connection = require('../../../config/connection');

const getRecipes = async () =>
  connection().then(async (db) => {
    const recipes = await db.collection('recipes').find().toArray();
    return recipes;
  });

module.exports = getRecipes;
