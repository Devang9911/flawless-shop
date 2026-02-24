"use client";

import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function CartSummary() {
  const products = useAppSelector((state) => state.cart.products);
  const [loading, setLoading] = useState(false);

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: products }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        throw new Error("Checkout failed");
      }

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading || products.length === 0}
        className="w-full mt-6 bg-black text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "Checkout"}
      </button>
    </div>
  );
}
