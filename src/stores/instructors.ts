import { defineStore } from 'pinia';
import instructorService from '@/services/instructors';

export const useInstructorStore = defineStore('instructor', {
  state: () => ({
    instructors: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchInstructors() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await instructorService.getInstructors();
        this.instructors = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
