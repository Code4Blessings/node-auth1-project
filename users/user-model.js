const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    insert
}

function find() {
    return db.select('*').from('users')
}

function findById(id) {
    return db('users').where({id})
}

function insert(user) {
    return db('users')
        .insert(user)
        .then(ids => ids[0])
}