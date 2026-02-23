"use client";

import { useAppSelector } from "@/lib/hooks";

export default function CartSummary() {
  const products = useAppSelector((state) => state.cart.products);

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

      <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:opacity-90 transition">
        Checkout
      </button>
    </div>
  );
}