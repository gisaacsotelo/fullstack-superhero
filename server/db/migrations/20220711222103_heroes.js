/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('heroes', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('powerstats')
    table.string('publisher')
    table.string('image')
    table.integer('api_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('heroes')
}