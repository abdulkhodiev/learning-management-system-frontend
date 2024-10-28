interface Review {
  id: number;
  firstName: string;
  lastName: string;
  reviewText: string;
  rating: number;
  date: Date;
  profilePicture: string;
}

export type ReviewsData = Review[];
