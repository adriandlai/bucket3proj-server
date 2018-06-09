const express = require('express');
const router = express.Router();

const queries = require('../reviewqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(reviews => {
        response.json({reviews});
    })
    .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
    .then(() => {
        queries.list()
        .then(reviews => {
        console.log('insidedelete', reviews)
        response.json({reviews});   
        })
    }).catch(next);
});

// router.get("/", (request, response, next) => {
//     queries.create()
//     .then(reviews => {
//         response.json({reviews});
//     })
//     .catch(next);
// });
router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(()=> {
        queries.list()
        .then(reviews => {
            console.log('insidePSOT',reviews)
            response.status(201).json({reviews});
    })
    }).catch(next);
});

// router.post("/", (request, response, next) => {
//     queries.addJoke(request.body).then(joke => {
//     response.status(201).json({joke: joke});
// }).catch((error)=> {
//     console.log(error)
//     next()
// } );
// });



module.exports = router;