const database = require("./connection");

module.exports = {
    list() {
    return database("cart_tb")
    },
    // add(id,cart_tb){
    //     return database("cart_tb")
    //     .where('id', id)
    //     .increment('quantity', 1)
    //     .returning("*")
    //     // .then(record => record[0])
    // },

    add(id,cart_tb){
        return database("cart_tb")
        .where('id', id)
        .increment('quantity', 1)
        // .returning("*")
        .then(() => {
            return database("cart_tb")
            .join('menu_tb', 'cart_tb.productkey', '=', 'menu_tb.productkey' )
        }  
    )}

        // .then(record => record[0])
 
    ,

    // .then(function() {
    //     return knex('users')
    //       .join('accounts', 'users.id', 'accounts.user_id')
    //       .select('users.user_name as user', 'accounts.account_name as account');
    //   })

    // join(){
        
    //     return database("cart_tb")
    //     .join('menu_tb', 'cart_tb.productkey', '=', 'menu_tb.productkey' )  
    //     // .returning("*")   
    // },

    delete(id,cart_tb){
        return database("cart_tb")
        .where('id', id)
        .increment('quantity', -1)
        // .returning("*")
        .then(() => {
            return database("cart_tb")
            .join('menu_tb', 'cart_tb.productkey', '=', 'menu_tb.productkey' )
        }  
    )}
    

    
}