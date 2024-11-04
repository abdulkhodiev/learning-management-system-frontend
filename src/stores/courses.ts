import { defineStore } from 'pinia';
import courseService from '@/services/courses';
import type { CoursesData } from '@/types/course';

export const userCourseStore = defineStore('courses', {
  state: () => ({
    courses: [] as CoursesData,
    isLoading: false,
    error: null as Error | null,
  }),

  actions: {
    async getAllCourses() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await courseService.getCourses();
        this.courses = data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },

    async getCourseById(id: string) {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await courseService.getCourseById(id);
        return data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
