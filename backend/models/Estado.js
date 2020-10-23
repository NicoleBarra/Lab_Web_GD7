const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
  return knex
    .select('*')
    .from('estados');
}

exports.create = (estado) => {
  return knex('estados')
    .insert({ id: estado.id, desc: estado.desc});
}


exports.update = (estadoId, updateestado) => {
  return knex('estados')
    .update(updateestado)
    .update('updated_at', knex.fn.now())
    .where('id', estadoId);
}


exports.find = (id) => {
  return knex
    .select('*')
    .from('estados')
    .where('id', id)
    .first();
}

exports.delete = (estado) => {
  console.log("estado id: ",estado.id);
  return knex('estados')
    .delete()
    .where('id', estado.id);
}
