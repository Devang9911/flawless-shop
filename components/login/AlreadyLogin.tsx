import { logout } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AlreadyLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully 👋");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Thank you for logged in ✅
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome back! You can continue shopping.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlreadyLogin;
