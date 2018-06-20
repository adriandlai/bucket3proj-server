const database = require("./connection");

module.exports = {
    list() {
    return database("cart_tb")
    },
    add(id,cart_tb){
        return database("cart_tb")
        .where('id', id)
        .increment('quantity', 1)
        .then(() => {
            return database("cart_tb")
            .join('menu_tb', 'cart_tb.productkey', '=', 'menu_tb.productkey' )
            .orderBy('product_name', 'asc')
        }  
    )},

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