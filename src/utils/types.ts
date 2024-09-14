export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  status: string;
  message?: string;
  error?: string;
}
