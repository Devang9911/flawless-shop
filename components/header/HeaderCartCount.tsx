"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";

export default function HeaderCartCount() {
  const products = useAppSelector((state) => state.cart.products);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <span>
      {products.length}
    </span>
  );
}