import Link from "next/link";

export default function CancelPage() {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          ❌ Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was not completed. You can try again anytime.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/cart"
            className="bg-black text-white px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Back to Cart
          </Link>

          <Link
            href="/"
            className="border px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}