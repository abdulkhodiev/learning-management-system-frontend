import { defineStore } from 'pinia';
import courseService from '@/services/courses';
import type { CourseData, CoursesData } from '@/types/course';
import { courses as FakeCourses } from '@/data';

export const userCourseStore = defineStore('courses', {
  state: () => ({
    courses: [] as CoursesData,
    course: {} as CourseData,
    isLoading: false,
    error: null as Error | null,
  }),

  actions: {
    async getAllCourses() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await courseService.getCourses();
        this.courses = FakeCourses;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },

    async getAllTopCourses() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await courseService.getTopCourses();
        this.courses = FakeCourses.slice(0, 4);
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
        this.course = FakeCourses[0];
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
