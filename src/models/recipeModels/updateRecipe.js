const { ObjectId } = require('bson');
const connection = require('../../../config/connection');

const updateRecipe = async (id, body, userId) =>
  connection().then(async (db) => {
    const { name, ingredients, preparation } = body;
    await db.collection('recipes').updateOne(
      { 
        _id: ObjectId(id),
      },
      {
        $set: {
          name,
          ingredients,
          preparation,
        },
      },
    );
    
    return { _id: id, name, ingredients, preparation, userId };
  });

module.exports = updateRecipe;
