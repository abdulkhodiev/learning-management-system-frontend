import type { User } from './user';

type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type { LoginRequest, RegisterRequest };

export type AuthResponse = {
  accessToken: string;
  user: User;
};
