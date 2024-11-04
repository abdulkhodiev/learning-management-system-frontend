import type { CoursesData } from './course';
import type { ReviewsData } from './reviews';

interface Instructor {
  id: string;
  firstName: string;
  lastName: string;
  profession: string;
  profile: string;
  description: string;
  numberOfStudents: number;
  numberOfReviews: number;
  areasOfExpertise: string[];
  professionalExperience: string;
  courses: CoursesData;
  reviews: ReviewsData;
}

export type InstructorData = Instructor;
export type InstructorsData = Instructor[];
