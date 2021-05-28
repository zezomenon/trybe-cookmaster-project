const { ObjectId } = require('bson');
const connection = require('../../../config/connection');

const updateRecipeImg = async (id, result, image) =>
  connection().then(async (db) => {
    await db.collection('recipes').updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          ...result,
          image,
        },
      },
    );
    
    return { ...result, image };
  });

module.exports = updateRecipeImg;
