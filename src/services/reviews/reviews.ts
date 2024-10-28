import { $apiAuth } from '@/http/interceptor';
import { type ReviewsData } from '@/types/reviews';

const getReviews = async () => {
  const response = await $apiAuth.get<ReviewsData[]>('/reviews');
  return response.data;
};

export default {
  getReviews,
};
