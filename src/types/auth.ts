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
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
};
