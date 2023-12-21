import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51LABHGSA0Kc7WorAUYNTx4d6IG9zewsZBQocJXEt76KQXEfViwmuN7W7j9Zm39FW1oIm18ClpUwJbZgYDPWF3x4d00EgYIQST7");
 

export const processPayment = catchAsyncErrors(async (req, res, next) => {
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
});

export const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
