"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { clearCart } from "@/lib/features/cart/cartSlice";

export default function ClearCartOnSuccess() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return null;
}