import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [publishableKey, setPublishableKey] = useState("");

  useEffect(() => {
    // Fetch the Stripe publishable key from your server
    fetch("/config")
      .then(async (response) => {
        const { publishableKey } = await response.json();
        setPublishableKey(publishableKey);
      })
      .catch((error) => {
        console.error("Error fetching publishable key: ", error);
      });
  }, []);

  useEffect(() => {
    if (publishableKey) {
      // Initialize the Stripe promise with the publishable key
      setStripePromise(loadStripe(publishableKey));
    }
  }, [publishableKey]);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
