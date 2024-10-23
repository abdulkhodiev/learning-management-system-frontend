import { $apiAuth } from '@/http/interceptor';
import {
  type LoginRequest,
  type AuthResponse,
  type RegisterRequest,
} from '@/types/auth';

const login = async (data: LoginRequest) => {
  const response = await $apiAuth.post<AuthResponse>('/auth/login', data);
  return response.data;
};

const register = async (data: RegisterRequest) => {
  const response = await $apiAuth.post<AuthResponse>('/auth/register', data);
  return response.data;
};

const getCurrentUser = async () => {
  const response = await $apiAuth.get<AuthResponse>('/auth/me');
  return response.data;
};

export default {
  login,
  register,
  getCurrentUser,
};
