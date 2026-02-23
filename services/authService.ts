import { RegisterPayload, LoginPayload } from "./authTypes";

export const authService = {
  async loginUser(data: LoginPayload) {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json(); // returns { token: string }
  },
};
