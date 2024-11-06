import { $api } from '@/http/interceptor';
import { type User, type UserRequestData } from '@/types/user';

export const getUserProfile = async (): Promise<User> => {
  const response = $api.get('/user');
  return response.then(response => response.data);
};

export const updateUserProfile = async (
  data: UserRequestData
): Promise<User> => {
  const response = $api.put('/user', data);
  return response.then(response => response.data);
};

export default {
  getUserProfile,
  updateUserProfile,
};
