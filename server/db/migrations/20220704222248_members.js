/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ?  Creates the table members:
exports.up = function(knex) {
  return knex.schema.createTable('members', (table) => {
    table.increments('m_id').primary()
    table.string('m_name')
    table.string('m_email')
    table.boolean('is_employee')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ?  Drops/Erases the table members:
exports.down = function(knex) {
  return knex.schema.dropTable('members')
};
