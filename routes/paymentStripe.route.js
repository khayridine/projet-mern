const express = require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('pk_test_51QYUCCRq6XKI37dnoUMfeb8S0eI2JSf2WVhhjn5DoKBO4RF0gXZplVoVYlBB71viWa9cE8T2GajsVJeFsos0qtdV00qTpsDhaf');
// Remplacez par votre clé secrète Stripe
router.post('/', async (req, res) => { console.log(req.body)
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;