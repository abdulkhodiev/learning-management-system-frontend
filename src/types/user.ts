import type { CoursesData } from './course';
import type { ReviewsData } from './reviews';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  headline: string;
  description: string;
  profilePicture: string;
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    twitter: string;
  };
  boughtCourses: CoursesData[];
  reviews: ReviewsData[];
  role: string;
}

export { type User };
