exports.up = function(knex) {
  return knex.schema.alterTable('tasks', (table) => {
    table.string('priority').defaultTo('normal');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('tasks', (table) => {
    table.dropColumn('priority');
  });
};