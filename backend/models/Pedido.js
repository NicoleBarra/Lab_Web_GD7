const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
  return knex
    .select('*')
    .from('pedidos');
}

exports.create = (pedido) => {
  return knex('pedidos')
    .insert({ nombre: pedido.nombre, estado: pedido.estado});
}


exports.update = (pedidoId, updatePedido) => {
  return knex('pedidos')
    .update(updatePedido)
    .update('updated_at', knex.fn.now())
    .where('id', pedidoId);
}


exports.find = (id) => {
  return knex
    .select('*')
    .from('pedidos')
    .where('id', id)
    .first();
}

exports.delete = (pedido) => {
  console.log("pedido id: ",pedido.id);
  return knex('pedidos')
    .delete()
    .where('id', pedido.id);
}
