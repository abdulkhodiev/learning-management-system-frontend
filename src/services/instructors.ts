import { $api } from '@/http/interceptor';
import type { InstructorData, InstructorsData } from '@/types/instructor';

export const getInstructors = (): Promise<InstructorsData> => {
  return $api
    .get<InstructorsData>('/instructors')
    .then(response => response.data);
};

export const getTopInstructors = (): Promise<InstructorsData> => {
  return $api
    .get<InstructorsData>('/instructors/top')
    .then(response => response.data);
};

export const getInstructorById = (id: string): Promise<InstructorData> => {
  return $api
    .get<InstructorData>(`/instructors/${id}`)
    .then(response => response.data);
};

export default {
  getInstructors,
  getTopInstructors,
  getInstructorById,
};
