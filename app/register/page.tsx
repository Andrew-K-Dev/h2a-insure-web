"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function RegisterPage() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Register & Pay</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(_, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "50.00", // registration fee
                    },
                  },
                ],
              });
            }}
            // ✅ Fixed: explicitly Promise<void>
            onApprove={async (data, actions): Promise<void> => {
              // Optionally capture order if needed
              // await actions.order?.capture();

              setPaymentSuccess(true);
              alert("Payment successful! Receipt + Policy will be emailed.");

              return; // explicit return makes TS happy
            }}
            onError={(err) => {
              console.error("PayPal Checkout Error:", err);
              alert("An error occurred during payment. Please try again.");
            }}
          />
        </PayPalScriptProvider>

        {paymentSuccess && (
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Registration complete! Check your email for the policy.
          </p>
        )}
      </div>
    </div>
  );
}
