"use client";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function page() {
  const products = useAppSelector((state) => state.cart.products);
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !token) {
      toast.error("Please login to view cart 🔒");
      router.replace("/login");
    }
  }, [mounted, token, router]);

  if (!mounted) {
    return null; 
  }
  if (!token) return null;

  if (products.length === 0 && !token) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Cart Items */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      {/* Summary */}
      <div>
        <CartSummary />
      </div>
    </div>
  );
}

export default page;
