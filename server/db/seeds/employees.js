
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  return knex('employees').insert([
    {
      e_id: 1,
      e_name: 'El Jefazo',
      e_email: 'jefazo@fakemails.com',
      address: 'Praderas del Jefazo #1',
      emergency_contact: '911',
      m_id: 999,
    },
    {
      e_id: 2,
      e_name: 'Betto Asaber',
      e_email: 'beto-nosabe@fakemails.com',
      address: 'Lomas Ticas #433',
      emergency_contact: '911',
      m_id: 998,
    },
    {
      e_id: 3,
      e_name: 'Boris Yeka',
      e_email: 'boris@fakemails.com',
      address: 'Paseo del Obelisco #356',
      emergency_contact: '911',
      m_id: 1,
    },
    {
      e_id: 4,
      e_name: 'Willie Milano',
      e_email: 'huele-mal@fakemails.com',
      address: 'Lomas Turbio #666',
      emergency_contact: '911',
      m_id: 4,
    },
  ]);
};
