"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    language: "en", // default English
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>{form.language === "en" ? "Register for H2A Insure" : "Regístrese en H2A Insure"}</h1>

      {!paymentSuccess ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! (Later: save to database + generate PDF policy)");
            }}
            style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}
          >
            <label>
              {form.language === "en" ? "First Name:" : "Nombre:"}
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
            </label>

            <label>
              {form.language === "en" ? "Last Name:" : "Apellido:"}
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>

            <label>
              Language / Idioma:
              <select name="language" value={form.language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </label>

            <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>
              {form.language === "en" ? "Submit Info" : "Enviar Información"}
            </button>
          </form>

          <h2 style={{ marginTop: "40px" }}>
            {form.language === "en" ? "Pay $100/month (9 months)" : "Pague $100/mes (9 meses)"}
          </h2>

          {/* PayPal Integration */}
          <PayPalScriptProvider options={{ "client-id": "paypal.me/AndrewKotze691" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createSubscription={(data, actions) => {
                return actions.subscription.create({
                  plan_id: "P-XXXXXX", // replace with real PayPal subscription plan ID
                });
              }}
              onApprove={(data, actions) => {
                setPaymentSuccess(true);
                alert("Payment successful! Receipt + Policy will be emailed.");
              }}
            />
          </PayPalScriptProvider>

          {/* TODO: Add Stripe Checkout later */}
        </>
      ) : (
        <h2 style={{ color: "green" }}>
          {form.language === "en"
            ? "Thank you! Your coverage is active."
            : "¡Gracias! Su cobertura está activa."}
        </h2>
      )}
    </main>
  );
}
