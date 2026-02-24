import Stripe from "stripe";
import { redirect } from "next/navigation";
import ClearCartOnSuccess from "@/components/cart/ClearCartOnSuccess";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    redirect("/cart");
  }

  const amount = (session.amount_total ?? 0) / 100;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Payment Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been confirmed.
        </p>

        <div className="text-sm text-gray-500 mb-4 space-y-2">
          <p>
            <strong>Total Paid:</strong> ${amount.toFixed(2)}
          </p>

          {session.customer_details?.email && (
            <p>
              <strong>Email:</strong> {session.customer_details.email}
            </p>
          )}
        </div>

        <a
          href="/"
          className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Continue Shopping
        </a>

        <ClearCartOnSuccess />
      </div>
    </div>
  );
}