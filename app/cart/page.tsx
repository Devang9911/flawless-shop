"use client";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

function Page() {
  const products = useAppSelector((state) => state.cart.products);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 Prevent hydration mismatch

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <div>
        <CartSummary />
      </div>
    </div>
  );
}

export default Page;