import React from "react";

const pricingPlans = [
  { id: 1, name: "Basic", price: "Free", features: ["Single Template", "PDF Download"] },
  { id: 2, name: "Pro", price: "$9.99/mo", features: ["All Templates", "Cover Letter Maker", "Color Theming", "Priority Support"] },
  { id: 3, name: "Enterprise", price: "$29.99/mo", features: ["Team Access", "Advanced Analytics", "Custom Branding"] },
];

function Pricing() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Pricing Plans</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {pricingPlans.map(plan => (
          <div key={plan.id} style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: "250px" }}>
            <h3 style={{ color: "#4F46E5" }}>{plan.name}</h3>
            <h2 style={{ margin: "0.5rem 0" }}>{plan.price}</h2>
            <ul style={{ listStyle: "none", padding: "0", marginBottom: "1rem" }}>
              {plan.features.map((f, i) => <li key={i}>✔ {f}</li>)}
            </ul>
            <button style={{ padding: "0.8rem 1.5rem", borderRadius: "6px", border: "none", backgroundColor: "#4F46E5", color: "#fff", cursor: "pointer" }}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
