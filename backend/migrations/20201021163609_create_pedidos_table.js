
exports.up = function(knex) {
    return knex.schema
    .createTable('pedidos',(table)=>{
        table.increments('id');
        table.string('nombre', 255).notNullable();
        table.integer('estado').unsigned().notNullable();
        table.timestamps(true, true);
    })
    .createTable('cambioestados',(table)=>{
        table.increments('id');
        table.integer('pedido').unsigned().notNullable();
        table.integer('estadoAnterior').unsigned().notNullable();
        table.integer('estadoPosterior').unsigned().notNullable();
        table.timestamps(true, true);
    })
    .createTable('estados',(table)=>{
        table.integer('id').notNullable;
        table.string('desc',512).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('pedidos')
      .dropTable('cambioestados')
      .dropTable('estados');
  };