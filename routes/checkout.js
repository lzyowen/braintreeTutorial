const express = require('express');
const router = express.Router();
const braintree = require('braintree');
const { response } = require('express');

router.post('/', (req, res, next) => {
    const gateway = new braintree.BraintreeGateway({
        environment: braintree.Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: 'db75c343p9qd2hws',
        publicKey: '69c8zvwty4mskwrg',
        privateKey: 'db8a30b28039629d89d607b1eb647ed7'
    });
    

    // Use the payment method nonce here
    const nonceFromTheClient = req.body.paymentMethodNonce;
    // Create a new transaction for $10
    const newTransaction = gateway.transaction.sale({
        amount: '12.20',
        paymentMethodNonce: nonceFromTheClient,
        options: {
            // This option requests the funds from the transaction
            // once it has been authorized successfully
            submitForSettlement: true
        }
    }, (error, result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(error);
        }
    });
});

module.exports = router;