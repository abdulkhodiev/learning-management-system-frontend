import { defineStore } from 'pinia';
import instructorService from '@/services/instructors';
import type { InstructorData, InstructorsData } from '@/types/instructor';

export type { InstructorsData, InstructorData };

export const useInstructorStore = defineStore('instructor', {
  state: () => ({
    instructors: [] as InstructorsData,
    instructor: {} as InstructorData,
    isLoading: false,
    error: null as Error | null,
  }),

  actions: {
    async getAllInstructors() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await instructorService.getInstructors();
        this.instructors = data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },

    async getInstructorById(id: string) {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await instructorService.getInstructorById(id);
        this.instructor = data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
