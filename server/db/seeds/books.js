exports.seed = (knex) => {
  // return knex('ingredients').del()
  //   .then(() => {
  return knex('ingredients').insert([
    {
      b_id: 1,
      b_title: 'Salpicon de Espaldilla',
      b_author: 'Guillermo Herdez',
      b_cathegory: 'Cooking',
      is_out: false,
    },
    {
      b_id: 2,
      b_title: 'Cosmos',
      b_author: 'Aquiles Baeste Riaton',
      b_cathegory: 'Science',
      is_out: false,
    },
    {
      b_id: 3,
      b_title: 'Erase una vez',
      b_author: 'Sergio el Bailador',
      b_cathegory: 'Novel',
      is_out: true,
    },
    {
      b_id: 4,
      b_title: 'Spanglish Lovers',
      b_author: 'Denisse Corona Espinas',
      b_cathegory: 'Novel',
      is_out: false,
    },
  ])
}

/*  
Original code, before modifying

@param { import("knex").Knex } knex
 @returns { Promise<void> } 

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
 */
