interface Review {
  id: string;
  firstName: string;
  lastName: string;
  reviewText: string;
  rating: number;
  date: Date;
  profilePicture: string;
}

export type ReviewData = Review;
export type ReviewsData = Review[];
