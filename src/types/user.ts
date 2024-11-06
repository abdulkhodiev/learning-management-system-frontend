import type { CoursesData } from './course';
import type { InstructorsData } from './instructor';
import type { ReviewsData } from './reviews';
interface User {
  id: string;
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
  boughtCourses: CoursesData;
  reviews: ReviewsData;
  instructors: InstructorsData;
  role: string;
}

export { type User };

type UserRequestData = {
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
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
};

export { type UserRequestData };
