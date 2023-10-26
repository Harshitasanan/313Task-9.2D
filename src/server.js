const express = require("express");
const app = express();
const { resolve } = require("path");
const env = require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static("public")); // Serve static files from the "public" directory

app.get("/", (req, res) => {
  const path = resolve(__dirname, "public/index.html"); // Correct the path
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  console.log("Received /config request");
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});


app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5252, () => {
  console.log(`Node server listening at http://localhost:5252`);
});
