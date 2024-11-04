import type { ReviewsData } from './reviews';
interface Course {
  id: string;
  title: string;
  description: string;
  rating: number;
  numberOfRatings: number;
  instructor: {
    firstName: string;
    lastName: string;
  };
  languages: {
    id: string;
    name: string;
  }[];
  duration: number;
  lectures: number;
  price: number;
  coverImage: string;
  reviews: ReviewsData;
}

export type CourseData = Course;
export type CoursesData = Course[];
