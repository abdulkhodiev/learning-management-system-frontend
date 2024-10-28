import { $api } from '@/http/interceptor';

export const getInstructors = async () => {
  const response = await $api.get('/instructors');
  return response.data;
};

export default {
  getInstructors,
};
