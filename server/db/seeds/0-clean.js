/* 
This file is used to empty out the database in a specific order so 
foreign key constraints aren't violated
the filename begins with a 0 so it runs before any other seed file 
(and those files are also ordered to ensure foreign key data is present when needed)
 */

exports.seed = (knex) => {
  // The following function is added to make the statements below easier/quicker to read and write
  const empty = (table) => knex(table).delete()

  return empty('books')
    .then(() => empty('employees'))
    .then(() => empty('members'))
}

// Original code below, before modifying:

/* 

 @param { import("knex").Knex } knex
 @returns { Promise<void> } 
//  lines above where commented

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