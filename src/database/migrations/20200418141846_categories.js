
exports.up = function(knex) {
  return knex.schema.createTable('categories',function(table){
    table.increments();

    table.string('name');
    table.string('descricao');

    //fk
    table.string('product_id').notNullable();

    table.foreign('product_id').references('cod').inTable('products')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
