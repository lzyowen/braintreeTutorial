const express = require('express');
const router = express.Router();
const braintree = require('braintree');
const { response } = require('express');

router.post("/", (req, res, next) => {

    const clientToken = gateway.clientToken.generate({},(err,response)=>{
        console.log('clientToken='+response.clientToken);
        return response.clientToken;
    });

});

module.exports = router;