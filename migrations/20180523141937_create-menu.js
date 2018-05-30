
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu_tb', (table)=>{
        table.increments()
        table.text('picture_url')
        table.text('product_name')
        table.float('price')   
        table.integer('productkey')      
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('menu_tb')
  
};





  
