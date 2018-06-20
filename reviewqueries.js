const database = require("./connection");

module.exports = {
list() {
        return database("review_tb")
        },

 create(review){
    return database("review_tb")
        .insert(review)
        .returning("*")
        .then(record => record[0])
},

delete(id){
    return database("review_tb").delete().where("id", id);
}
}

