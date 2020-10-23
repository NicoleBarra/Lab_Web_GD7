
exports.up = function(knex) {
    return knex.schema
    .createTable('pedidos',(table)=>{
        table.increments('id');
        table.string('nombre', 255).notNullable();
        table.string('estado', 512).notNullable();
        table.timestamps(true, true);
    })
    .createTable('cambioestados',(table)=>{
        table.increments('id');
        table.integer('pedido').unsigned().notNullable();
        table.string('estadoAnterior', 255).notNullable();
        table.string('estadoPosterior', 512).notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('pedidos')
      .dropTable('cambioestados');
  };