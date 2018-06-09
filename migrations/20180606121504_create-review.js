exports.up = function(knex, Promise) {
    return knex.schema.createTable('review_tb', (table)=>{
        table.increments()
        table.text('name')
        table.text('review')   
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('review_tb')
  
};