import { $api } from '@/http/interceptor';
import type { InstructorData, InstructorsData } from '@/types/instructor';

export const getInstructors = (): Promise<InstructorsData> => {
  const response = $api.get('/instructors');
  return response.then(response => response.data);
};

export const getInstructorById = (id: string): Promise<InstructorData> => {
  const response = $api.get(`/instructors/${id}`);
  return response.then(response => response.data);
};

export default {
  getInstructors,
  getInstructorById,
};
