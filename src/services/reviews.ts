import { $apiAuth } from '@/http/interceptor';
import { type ReviewsData } from '@/types/reviews';

const getReviews = () => {
  return $apiAuth.get<ReviewsData>('/reviews');
};

const getTopReviews = () => {
  return $apiAuth.get<ReviewsData>('/reviews/top');
};

const getReviewsByCourseId = (courseId: string) => {
  return $apiAuth.get<ReviewsData>(`/reviews/course/${courseId}`);
};
export default {
  getReviewsByCourseId,
  getReviews,
  getTopReviews,
};
