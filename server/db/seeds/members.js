exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  return knex('members').insert([
    {
      m_id: 1,
      m_name: 'Boris Yeka',
      m_email: 'boris@fakemails.com',
      is_employee: true
    },
    {
      m_id: 2,
      m_name: 'Betto Asaber',
      m_email: 'beto-nosabe@fakemails.com',
      is_employee: true
    },
    {
      m_id: 3,
      m_name: 'Larry  Kaverga',
      m_email: 'laricarda@fakemails.com',
      is_employee: false
    },
    {
      m_id: 4,
      m_name: 'Willie Milano',
      m_email: 'huele-mal@fakemails.com',
      is_employee: false
    },
  ]);
};