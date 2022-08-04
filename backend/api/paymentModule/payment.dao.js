

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY="pk_test_51LSkAxSAmzkNAoCHpG5tbv7XFAEWioUTokf2TT5QWwd2OL5DO3J3slkIMWwFFXiqudrWhnOQGO1jqlb4EPeEUo1Q00uZfFuI5N");

const processPayment = async (req,res,next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
}
const sendStripeApiKey = async (req,res,next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY="sk_test_51LSkAxSAmzkNAoCHW51mDjHm827l6zoC2GvLs9YCdEHuFrZyi3Pwip4KjIsAdKOIcdn0F3lOQgR8p4WAoJ8cS8UY00mvsSQmf5" });
};

module.exports={processPayment,sendStripeApiKey};
