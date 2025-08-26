"use client";

import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    workerId: "",
    contractLength: "9 months",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.workerId) {
      alert("Please fill out all fields.");
      return;
    }

    // ✅ Normally, you’d send this data to your backend here
    console.log("User Registered:", formData);

    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Register for H2A Insure</h1>
      <p className="mb-6 text-gray-600">Affordable coverage for agricultural workers</p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            name="workerId"
            placeholder="Worker ID / Passport #"
            value={formData.workerId}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md"
          >
            Continue to Payment
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>

          {/* Stripe Placeholder */}
          <button className="w-full mb-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md">
            Pay with Stripe
          </button>

          {/* PayPal Checkout */}
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "vertical" }} />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
}
