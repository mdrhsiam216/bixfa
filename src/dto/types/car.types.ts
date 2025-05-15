
export type CarItemProps = {
  image: string;
  title: string;
  type: string;
  rating: number;
  reviews: number;
  facilities: {
    icon: string;
    label: string;
  }[];
  note: string;
  brandLogo: string;
  price: number;
  onItemClick?: () => void;
  onItemHover?: () => void;
};


export type CarReviewData = {
  avatarUrl: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
};