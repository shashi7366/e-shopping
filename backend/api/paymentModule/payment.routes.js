const express = require("express");
const dao =require("./payment.dao");
const {processPayment, sendStripeApiKey} = require('./payment.dao');
//const processPayment = require('./payment.dao');
//const sendStripeApiKey=require('./payment.dao');

const router = express.Router();
const { isAuthenticatedUser } = require("../../errorMiddleware/auth");

router.route("/process").post(isAuthenticatedUser, dao.processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, dao.sendStripeApiKey);

module.exports = router;
