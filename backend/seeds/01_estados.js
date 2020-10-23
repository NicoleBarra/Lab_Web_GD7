exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estados').del()
    .then(function () {
      // Inserts seed entries
      return knex('estados').insert([
        { id: 1, desc: 'Salida de Planta'},
        { id: 2, desc: 'En Local Delivery Center',},
        { id: 3, desc: 'En Proceso de Entrega'},
        { id: 4, desc: 'Completa'},
        { id: 5, desc: 'Fallida'}
      ]);
    });
};