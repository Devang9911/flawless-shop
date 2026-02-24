"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import AlreadyLogin from "@/components/login/AlreadyLogin";

type Inputs = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, token } = useAppSelector((state) => state.auth);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();

      toast.success("Login successful 🎉");

      router.push("/");
    } catch (error: any) {
      toast.error(error || "Invalid credentials");
    }
  };

  if (token) {
    return <AlreadyLogin />;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              value={"johnd"}
              placeholder="Enter your username"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("username")}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              value={"m38rmF$"}
              placeholder="Enter your password"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("password")}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
