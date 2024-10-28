import { $api } from '@/http/interceptor';

const getCourses = async () => {
  const response = await $api.get('/reviews');
  return response.data;
};

export default {
  getCourses,
};
