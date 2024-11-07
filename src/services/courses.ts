import { $api } from '@/http/interceptor';

const getCourses = () => {
  return $api.get('/courses');
};

const getTopCourses = () => {
  return $api.get('/courses/top');
};

const getCourseById = (id: string) => {
  return $api.get(`/courses/${id}`);
};

export default {
  getCourses,
  getCourseById,
  getTopCourses,
};
