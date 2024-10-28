import { defineStore } from 'pinia';
import reviewService from '@/services/reviews/reviews';

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchReviews() {
      this.isLoading = true;
      this.error = undefined;
      try {
        const data = await reviewService.getReviews();
        this.reviews = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
