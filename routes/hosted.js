var express = require('express');
var router = express.Router();
var braintree = require('braintree');

/* GET home page. */
router.get('/', function (req, res, next) {

  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'db75c343p9qd2hws',
    publicKey: '69c8zvwty4mskwrg',
    privateKey: 'db8a30b28039629d89d607b1eb647ed7'
  });

  gateway.clientToken.generate({}, (err, response) => {
    console.log('clientToken=' + response.clientToken);
    const clientToken = response.clientToken;
    res.render('hosted', { title: 'Hosted Fields', clientToken: clientToken});
  });
});

module.exports = router;
