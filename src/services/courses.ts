import { $api } from '@/http/interceptor';

const getCourses = async () => {
  const response = await $api.get('/reviews');
  return response.data;
};

const getCourseById = async (id: string) => {
  const response = await $api.get(`/courses/${id}`);
  return response.data;
};

export default {
  getCourses,
  getCourseById,
};
