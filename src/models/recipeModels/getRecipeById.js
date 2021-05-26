const { ObjectId } = require('bson');
const connection = require('../../../config/connection');

const getRecipeById = async (id) =>
  connection().then(async (db) => {
    const recipe = await db.collection('recipes').findOne(ObjectId(id));
    return recipe;
  }).catch(() => null);

module.exports = getRecipeById;
