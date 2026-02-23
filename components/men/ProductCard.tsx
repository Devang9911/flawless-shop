"use client";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { CartProduct } from "@/lib/features/cart/cartTypes";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const token  = useAppSelector((state) => state.auth.token);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (!token) {
      router.push("/login");
      return;
    }
    const payload: CartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      quantity: 1,
      description: product.description,
    };
    try {
      dispatch(addToCart(payload));
      toast.success(`Item added to cart successfully`);
    } catch (error) {
      toast.error("Failed to add in cart");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 flex flex-col">
      <div className="w-full h-56 relative bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          loading="eager"
          sizes="100"
          style={{ objectFit: "contain", padding: "1rem" }}
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-700 font-bold mb-2">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button
          className="bg-gray-300 p-2 cursor-pointer hover:bg-gray-200 w-full mt-2"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
