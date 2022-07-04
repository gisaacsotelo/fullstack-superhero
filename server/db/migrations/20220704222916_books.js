/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('b_id').primary()
    table.string('b_title')
    table.string('b_author')
    table.string('b_cathegory')
    table.boolean('is_out')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('books')
};
