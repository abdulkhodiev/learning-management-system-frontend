import { defineStore } from 'pinia';
import courseService from '@/services/courses';

export const userCourseStore = defineStore('courses', {
  state: () => ({
    courses: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchCourses() {
      this.isLoading = true;
      this.error = undefined;
      try {
        const data = await courseService.getCourses();
        this.courses = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
