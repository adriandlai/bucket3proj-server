const configureStripe = require('stripe');

// const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
//     ? 'sk_test_qFZ0OsuGL2jD4NGfO2polcBC'
//     : 'sk_test_qFZ0OsuGL2jD4NGfO2polcBC';

// const stripe = configureStripe(STRIPE_SECRET_KEY);
const stripe = configureStripe('sk_test_qFZ0OsuGL2jD4NGfO2polcBC');
module.exports = stripe;