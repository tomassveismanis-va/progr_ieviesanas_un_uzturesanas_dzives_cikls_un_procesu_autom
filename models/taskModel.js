const db = require('../db');

module.exports = {
  getAll: () => db('tasks').select('*'),
  getById: (id) => db('tasks').where({ id }).first(),
  create: (data) => db('tasks').insert(data).returning('*'),
  update: (id, data) => db('tasks').where({ id }).update(data).returning('*'),
  remove: (id) => db('tasks').where({ id }).del()
};