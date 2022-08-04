

const stripe = require("stripe")("sk_test_51LSkAxSAmzkNAoCHW51mDjHm827l6zoC2GvLs9YCdEHuFrZyi3Pwip4KjIsAdKOIcdn0F3lOQgR8p4WAoJ8cS8UY00mvsSQmf5");

const processPayment = async (req,res,next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });
//pk_test_51LSkAxSAmzkNAoCHpG5tbv7XFAEWioUTokf2TT5QWwd2OL5DO3J3slkIMWwFFXiqudrWhnOQGO1jqlb4EPeEUo1Q00uZfFuI5N
  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
}
const sendStripeApiKey = async (req,res,next) => {
  res.status(200).json({ stripeApiKey:"pk_test_51LSkAxSAmzkNAoCHpG5tbv7XFAEWioUTokf2TT5QWwd2OL5DO3J3slkIMWwFFXiqudrWhnOQGO1jqlb4EPeEUo1Q00uZfFuI5N" });
};

module.exports={processPayment,sendStripeApiKey};
