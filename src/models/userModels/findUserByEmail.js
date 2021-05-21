const connection = require('../../../config/connection');

const findUserByEmail = async (email) =>
  connection().then(async (db) => {
    const user = await db.collection('users').findOne({
      email,
    });
    return user;
  });

module.exports = findUserByEmail;
