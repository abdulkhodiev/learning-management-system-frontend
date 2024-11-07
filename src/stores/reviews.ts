import { defineStore } from 'pinia';
import reviewService from '@/services/reviews';
import type { ReviewsData } from '@/types/reviews';
import { reviews } from '@/data';

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
        const response = await reviewService.getReviews();
        this.reviews = reviews;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },

    async getTopReviews() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await reviewService.getTopReviews();
        this.reviews = reviews.slice(0, 4);
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
        const response = await reviewService.getReviewsByCourseId(id);
        this.reviews = reviews;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
