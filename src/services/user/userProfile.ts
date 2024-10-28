import { $api } from '@/http/interceptor';
import { type User } from '@/types/user';

export const getUserProfile = async () => {
  const response = await $api.get<User>('/user/profile');
  return response.data;
};

export default {
  getUserProfile,
};
