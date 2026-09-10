exports.up = function(knex) {
  return knex.schema.alterTable('tasks', (table) => {
    table.integer('category_id').references('id').inTable('categories');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('tasks', (table) => {
    table.dropColumn('category_id');
  });
};