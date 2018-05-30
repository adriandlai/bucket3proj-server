const express = require('express');
const router = express.Router();

const queries = require('../menuqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(menu => {
        response.json({menu});
    })
    .catch(next);
});



module.exports = router;