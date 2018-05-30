const express = require("express");
//body Parser parses allows server to interpret requests that have bodies post/put - come with a body
const bodyParser = require("body-parser");
const cors = require('cors')

//logger that helps for debuggin 
const morgan = require("morgan");
const app = express();

const menu = require("./routes/menuroutes.js");
const cart = require("./routes/cartroutes.js");

app.use(morgan('dev'));
//parses form data a json by default
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}))
//added this to try and get rid of some CORS origin not allowed issue
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     req.header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     next();
// });

app.use("/menu", menu);

app.use("/cart", cart);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
