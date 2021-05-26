const { ObjectId } = require('bson');
const connection = require('../../../config/connection');

const deleteRecipe = async (id) =>
  connection().then(async (db) => {
    const recipe = await db.colletction('recipes').deleteOne(ObjectId(id));
    return recipe;
  }).catch(() => null);

module.exports = deleteRecipe;
