
exports.up = function(knex) {
  return knex.schema.createTable('products',function(table){
      table.string('cod').primary();
      table.string('name').notNullable()
      table.string('descricao').notNullable()
      table.decimal('valorAvista').notNullable()
      table.decimal('valorAprazo').notNullable()
      table.string('categoria').notNullable()
      table.string('status').notNullable()
      table.int('parcelas').notNullable()
      table.string('img').notNullable()
 
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
