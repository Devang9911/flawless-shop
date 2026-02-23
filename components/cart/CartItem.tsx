"use client";

import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { CartProduct } from "@/lib/features/cart/cartTypes";
import { decreaseQuantity, increaseQuantity, removeProduct } from "@/lib/features/cart/cartSlice";

interface Props {
  product: CartProduct;
}

export default function CartItem({ product }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-6 border-b py-6">
      {/* Image */}
      <div className="relative w-24 h-24">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-gray-500 text-sm capitalize">{product.category}</p>

        <div className="flex items-center gap-4 mt-3">
          <button
            className="px-3 py-1 border rounded"
            onClick={()=> dispatch(decreaseQuantity(product.id))}
          >
            -
          </button>

          <span className="font-medium">{product.quantity}</span>

          <button
            className="px-3 py-1 border rounded"
            onClick={()=> dispatch(increaseQuantity(product.id))}
          >
            +
          </button>

          <button
            className="text-red-500 ml-6"
            onClick={()=> dispatch(removeProduct(product.id))}
          >
            Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="font-semibold text-lg">
        ${(product.price * product.quantity).toFixed(2)}
      </div>
    </div>
  );
}