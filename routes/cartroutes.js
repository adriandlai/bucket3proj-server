const express = require('express');
const router = express.Router();

const queries = require('../cartqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(cart => {
        response.json({cart});
    })
    .catch(next);
});

///basic add route
router.put("/add/:id", (request, response, next) => {
    queries.add(request.params.id, request.body).then(cart => {
        console.log('cartroute',cart)
        response.json({cart});
    }).catch(next);
});

// router.put("/add/:id", (request, response, next) => {
//     queries.join(request.params.id, request.body).then(cart => {
//         console.log('cartroute',cart)
//         response.json({cart});
//     }).catch(next);
// });

// router.put("/add/:id", (request, response, next) => {
//     queries.add(request.params.id, request.body).then((cart) => {
//         queries.join()
//         // console.log('insidejoinquery', cart)
//     }).
//         then(cart => {
//         console.log('cartroute',cart)
//         response.json({cart});
//     }).catch(next);
// });
router.put("/delete/:id", (request, response, next) => {
    queries.delete(request.params.id, request.body).then(cart => {
        response.json({cart: cart[0]});
    }).catch(next);
});





module.exports = router;