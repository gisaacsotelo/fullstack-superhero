/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('heroes').del()
  await knex('heroes').insert([
    {
      id: 1,
      name: 'Carnage',
      powerstats:
        '{"intelligence":"63","strength":"63","speed":"70","durability":"84","power":"88","combat":"90"}',
      publisher: 'Marvel Comics',
      images: 'https://www.superherodb.com/pictures2/portraits/10/100/187.jpg',
      api_id: 162,
      race: 'Symbiot',
      collected: true,
    },
    {
      id: 2,
      name: 'Batman',
      powerstats:
        '{"intelligence":"81","strength":"40","speed":"29","durability":"55","power":"63","combat":"90"}',
      publisher: 'DC Comics',
      images:
        'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      api_id: 69,
      race: 'Human',
      collected: true,
    },
    {
      id: 3,
      name: 'Naruto Uzumaki',
      powerstats:
        '{"intelligence":"50","strength":"80","speed":"32","durability":"80","power":"100","combat":"100"}',
      publisher: 'Shueisha',
      images: 'https://www.superherodb.com/pictures2/portraits/10/100/1540.jpg',
      api_id: 485,
      race: 'Human',
      collected: true,
    },
  ])
}
