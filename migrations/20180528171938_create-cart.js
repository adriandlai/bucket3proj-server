
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart_tb', (table)=>{
        table.increments()
        table.integer('quantity')   
        table.integer('productkey')   
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cart_tb')  

};






  
