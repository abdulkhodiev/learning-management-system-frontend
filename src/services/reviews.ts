import { $apiAuth } from '@/http/interceptor';
import { type ReviewsData } from '@/types/reviews';

const getReviews = () => {
  const response = $apiAuth.get<ReviewsData>('/reviews');
  return response.then(response => response.data);
};

const getReviewsByCourseId = (id: string) => {
  const response = $apiAuth.get<ReviewsData>('/reviews?courseId=' + id);
  return response.then(response => response.data);
};

export default {
  getReviewsByCourseId,
  getReviews,
};
