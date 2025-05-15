export interface TourItemProps {
  id: number;
  title: string;
  description: string;
  facilities: string[];
  note: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}
export type RoomCardProps = {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  tags: string[];
  cancellation: string;
  cancelUntil: string;
  price: string;
  selected?: boolean;
  onSelect?: () => void;
};

export interface AboutProps {
  title: string;
  content: string;
  maxChars?: number;
}

export type ReviewCardProps = {
  avatarUrl: string;
  name: string;
  date: string;
  rating: number; // out of 5
  comment: string;
};

export type PriceSummaryProps = {
  suitType: string;
  perNight: number;
  nights: number;
  fees: number;
  reserveLabel?: string;
  cancellationDate: string;
};

export type CarPriceSummaryProps = {
  carType: string;
  duration: number;
  hourlyRate: number;
  total: number;
  vat: number;
  insurance?: string;
  cancellationDate: string;
  reserveLabel?: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  dropoffTime: string;
};
export interface AmenitiesProps {
  amenities: string[]; // Just names like "Free WiFi", "Bar", etc.
}

export interface TourLocationProps {
  title: string;
  content: string;
}

export interface TourTimingProps {
  total: string;
  start: string;
  end: string;
  content: string[];
}

// DayPlan types
export interface DayPlanItem {
  day: string; 
  title: string;
  points: string[];
}

export interface DayPlanProps {
  title: string;
  plan: DayPlanItem[];
  maxItems?: number;
}

// Inclusion types
export interface InclusionItem {
  title: string;
  points: string[];
}

export interface InclusionAndExclusionProps {
  title: string;
  included: InclusionItem;
  notIncluded: InclusionItem;
  maxItems?: number;
}


export interface EssentialsProps {
  items: string[];
}


export interface TravellerInfo {
  firstName: string;
  lastName: string;
  dob: {
    day: number;
    month: number;
    year: number;
  };
  bloodGroup: string;
  passportNumber: string;
  passportExpiry: {
    day: number;
    month: number;
    year: number;
  };
  passportPhotoUrl?: string; // optional; if uploaded
  isUploading?: boolean; // optional; if uploading
}

export interface TravellerInfoCardProps {
  travellers: TravellerInfo[];
  totalGuests: number;
}


export interface CancellationPolicyCardProps {
  title: string;
  mainText: string;
  bulletPoints: string[];
}



export interface BookingSummaryProps {
  stayInfo: {
    checkIn: string;
    checkOut: string;
    nights: number;
  };
  pricingInfo: {
    packagePrice: number;
    tourists: string;
    subtotal: number;
    taxes: number;
    total: number;
  };
}


// dto/types/tour.types.ts
export interface TourPriceSummaryProps {
  packagePrice: number;
  tourists: string; // e.g., "2 Adult", "3 Adult, 1 Child"
  subtotal: number;
  taxes: number;
  total: number;
  cancellationDate: string; // e.g., "October 8, 2025"
}

export interface TravellerFormProps {
  travellerNumber?: number;
  onTravellerChange?: (field: string, value: string) => void;
}
