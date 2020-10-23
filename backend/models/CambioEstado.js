const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
  return knex
    .select('*')
    .from('cambioestados');
}

exports.create = (cambioestado) => {
  return knex('cambioestados')
    .insert({ 
        pedido: cambioestado.pedido,
        estadoAnterior: cambioestado.estadoAnterior,
        estadoPosterior: cambioestado.estadoPosterior,
    });
}


exports.update = (cambioestadoId, updatecambioestado) => {
  return knex('cambioestados')
    .update(updatecambioestado)
    .update('updated_at', knex.fn.now())
    .where('id', cambioestadoId);
}


exports.find = (id) => {
  return knex
    .select('*')
    .from('cambioestados')
    .where('id', id)
    .first();
}

exports.delete = (cambioestado) => {
  console.log("cambioestado id: ",cambioestado.id);
  return knex('cambioestados')
    .delete()
    .where('id', cambioestado.id);
}
