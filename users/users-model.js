const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  insert
};

function find() {
  return db('users').select('id', 'username', 'password', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function insert(user) {
    return db('users')
        .insert(user, "id")
        .then(([id]) => {
            return findById(id)
        })
}
