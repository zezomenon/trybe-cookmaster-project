const connection = require('../../../config/connection');

const createUser = async (name, email, password, role) =>
  connection().then(async (db) => {
    const newUser = await db.collection('users').insertOne({
      name,
      email,
      password,
      role,
    });
    return newUser.ops[0];
  });

module.exports = createUser;
