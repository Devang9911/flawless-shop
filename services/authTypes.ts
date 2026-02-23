export interface RegisterPayload {
    email : string,
    username : string,
    password : string
}
export interface LoginPayload {
    username : string,
    password : string
}
export interface AuthState {
  user: RegisterPayload | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}