const database = require("./connection");

module.exports = {
    list() {
    return database("menu_tb")
    }

}