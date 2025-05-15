export interface FilterOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface FilterSection {
  title: string;
  type: "checkbox" | "range";
  key: string;
  options?: FilterOption[];
  range?: {
    min: number;
    max: number;
    step: number;
    defaultValue: [number, number];
  };
}

export interface StayItemProps {
  data: {
    title: string;
    distance: string;
    room: string;
    bed: string;
    view: string;
    facilities: string[];
    note: string;
    rating: number;
    reviews: number;
    price: number;
    images: string[];
  };
  onPress?: () => void;
}


export type ReviewSummaryProps = {
  averageRating: number; // e.g., 4.0
  totalReviews: number;  // e.g., 1250
  ratingsBreakdown: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
};


export interface ReviewBreakdownCardProps {
  averageRating: number;
  totalReviews: number;
  ratingCounts: number[]; // index 0 = 1 star, index 4 = 5 star
}

export interface StayDetails {
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
}

export interface PriceDetails {
  suitType: string;
  pricePerNight: number;
  totalNights: number;
  taxes: number;
  total: number;
}

export interface BookingSummaryProps {
  hotelName: string;
  roomType: string;
  imageSrc: string;
  stayDetails: StayDetails;
  priceDetails: PriceDetails;
  onConfirm: () => void;
}
