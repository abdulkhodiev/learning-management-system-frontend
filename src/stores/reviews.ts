import { defineStore } from 'pinia';
import reviewService from '@/services/reviews';
import type { ReviewsData } from '@/types/reviews';

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [] as ReviewsData,
    isLoading: false,
    error: null as Error | null,
  }),

  actions: {
    async getAllReviews() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await reviewService.getReviews();
        this.reviews = data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
    async getReviewsByCourseId(id: string) {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await reviewService.getReviewsByCourseId(id);
        this.reviews = data;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
