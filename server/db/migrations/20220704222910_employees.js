/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('employees', (table) => {
    table.increments('e_id').primary()
    table.string('e_name')
    table.string('e_email')
    table.text('address')
    table.string('emergency_contact')
    
    table.integer('m_id').references('members.m_id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('employees')
};
