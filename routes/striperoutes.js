const stripe = require('../constants/stripe');
const express = require('express');
const router = express.Router();




const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
      console.log('error', stripeErr)
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

// const paymentApi = app => {
  router.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  router.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

//   return app;
// };

module.exports = router;