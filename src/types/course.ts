import type { ReviewsData } from './reviews';
interface Course {
  id: number;
  title: string;
  description: string;
  rating: number;
  numberOfRatings: number;
  instructor: {
    firstName: string;
    lastName: string;
  };
  languages: {
    id: number;
    name: string;
  }[];
  duration: number;
  lectures: number;
  price: number;
  coverImage: string;
  reviews: ReviewsData[];
}

export type CoursesData = Course[];
