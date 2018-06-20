const express = require('express');
const router = express.Router();

const queries = require('../cartqueries');

function total(cart){
    return cart.reduce(function(total, current){
        return total + (current.quantity*current.price) 
    }, 0)

}

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
        const newCart = {
            cart: cart,
            total: total(cart)
        }
        console.log('newCart', newCart)
        response.json(newCart);
    }).catch(next);
});

router.put("/delete/:id", (request, response, next) => {
    queries.delete(request.params.id, request.body).then(cart => {
        const newCart = {
            cart: cart,
            total: total(cart)
        }
        response.json(newCart);
    }).catch(next);
});


module.exports = router;