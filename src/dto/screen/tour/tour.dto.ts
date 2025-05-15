import { DayPlanProps, InclusionAndExclusionProps, TourItemProps } from "@/dto/types/tour.types";

export const tours: TourItemProps[] = [
  {
    id: 1,
    title: "Istanbul Grand City Tour with Blue Mosque & Grand Bazaar",
    description:
      "Discover Istanbul’s historical heart with guided tours and iconic landmarks. Perfect for first-time visitors who want to see the city’s highlights.",
    facilities: ["Breakfast", "Pick & Drop", "Tour Guide", "Candlelight Dinner"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    image: "/dist/images/exclusive1.png"
  },
  {
    id: 2,
    title: "Istanbul Grand City Tour with Blue Mosque & Grand Bazaar",
    description:
      "Discover Istanbul’s historical heart with guided tours and iconic landmarks. Perfect for first-time visitors who want to see the city’s highlights.",
    facilities: ["Breakfast", "Pick & Drop", "Tour Guide", "Candlelight Dinner"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    image: "/dist/images/exclusive1.png"
  },
];


export const tourTitle= "About the Rent";
export const tourContent="The Chevrolet Suburban – 2025 is a premium full-size SUV designed for comfort, space, and performance. Ideal for family trips, group travel, or long drives, it offers robust performance with a luxurious interior and ample luggage space. A perfect choice for travelers looking for both style and substance.The Chevrolet Suburban – 2025 is a premium full-size SUV designed for comfort, space, and performance. Ideal for family trips, group travel, or long drives, it offers robust performance with a luxurious interior and ample luggage space. A perfect choice for travelers looking for both style and substance.";

export const tourLocationTitle = "Istanbul, Türkiye";
export const tourLocationContent = "This tour takes place in Istanbul, Turkey – a city where East meets West. Explore iconic landmarks in the historic Sultanahmet district, including the Blue Mosque, Hagia Sophia, Topkapi Palace, and the Grand Bazaar.";

export const tourTimingData = {
  total: "5 Days / 4 Nights",
  start: "Day 1 – 9:00 AM (Hotel Pickup)",
  end: "Day 5 – Evening Drop-off",
  content: [
    "This is a 5-day guided tour, carefully designed to give you a relaxed and complete experience of Istanbul.",
    "Each day includes 4–6 hours of curated sightseeing, cultural activities, and local exploration.",
    "The tour starts on Day 1 at 9:00 AM and concludes on Day 5 by early evening.",
  ],
};

export const dayPlanData: DayPlanProps = {
  title: "Day Plan",
  plan: [
    {
      day: "Day 1",
      title: "Arrival & Welcome to Istanbul",
      points: [
        "Airport pickup and hotel check-in",
        "Free time to relax or explore nearby spots",
        "Welcome dinner at a local Turkish restaurant (optional)",
      ],
    },
    {
      day: "Day 2",
      title: "Old City Highlights",
      points: [
        "Visit to the Blue Mosque, Hagia Sophia, and Hippodrome Square",
        "Guided walk through Topkapi Palace",
        "Traditional Turkish lunch",
        "Leisure time in Sultanahmet",
      ],
    },
  ],
};


export const inclusionData: InclusionAndExclusionProps = {
  title: "Inclusion & Exclusion",
  included: {
    title: "Arrival & Welcome to Istanbul",
    points: [
      "Dhaka – Istanbul – Dhaka Return Airfare",
      "4 Nights Hotel Accommodation in 3★ or equivalent",
      "Daily Breakfast at Hotel",
      "Guided Tours to Blue Mosque, Grand Bazaar, Hagia Sophia & More",
      "Half-day Bosphorus Cruise",
      "English-speaking Tour Guide",
      "All Entry Tickets Mentioned in the Itinerary",
    ],
  },
  notIncluded: {
    title: "Old City Highlights",
    points: [
      "Airport Pickup & Drop (Istanbul)",
      "Visa Processing Fees",
      "Lunch & Dinner",
      "Personal Expenses",
      "Tips for Guides & Drivers",
      "Travel Insurance",
      "Anything not mentioned in the inclusions",
    ],
  },
};


export const essentialsList = [
  "Comfortable shoes for walking",
  "Sunscreen & hat for sun protection",
  "Camera to capture memories",
  "Valid ID & travel documents",
  "Portable charger for your devices",
  "Water bottle to stay hydrated",
  "Cash/Card for personal expenses",
  "Small backpack to carry essentials",
];


export const sampleTravellers = [
  {
    firstName: "Hasan",
    lastName: "Mahmud",
    dob: { day: 5, month: 4, year: 1995 },
    bloodGroup: "O+ (ve)",
    passportNumber: "5452407DH",
    passportExpiry: { day: 14, month: 4, year: 2034 },
    passportPhotoUrl: "/dist/images/tour-images/passport.png",
    isUploading: false,
  },
  {
    firstName: "Sarah",
    lastName: "Rahman",
    dob: { day: 22, month: 8, year: 1998 },
    bloodGroup: "A+ (ve)",
    passportNumber: "8823407AB",
    passportExpiry: { day: 10, month: 3, year: 2032 },
    passportPhotoUrl: undefined,
    isUploading: true,
  },
];


export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const months = Array.from({ length: 12 }, (_, i) => i + 1);
export const years = Array.from({ length: 100 }, (_, i) => 2025 - i);
export const expiryYears = Array.from({ length: 20 }, (_, i) => 2025 + i);
export const bloodGroups = [
  "A+ (ve)",
  "A- (ve)",
  "B+ (ve)",
  "B- (ve)",
  "AB+ (ve)",
  "AB- (ve)",
  "O+ (ve)",
  "O- (ve)",
];

export const cancellationPolicyData = {
  title: 'Cancellation Policy',
  mainText:
    'Free cancellation until October 8, 2025 (2 days before check-in). After that, you will be charged 50% of the total booking amount.',
  bulletPoints: [
    'Free cancellation before October 8, 2025',
    'Pay nothing now – pay at the hotel',
    'Your card is only used to guarantee the booking',
  ],
};

export const stayInfo = {
  checkIn: "Mon, Oct 10, 2025",
  checkOut: "Fri, Oct 14, 2025",
  nights: 4,
};

export const pricingInfo = {
  packagePrice: 10196,
  tourists: "2 Adult",
  subtotal: 20392,
  taxes: 1280,
  total: 21672,
};


export const tourPriceSummaryData = {
  packagePrice: 10196,
  tourists: "2 Adult",
  subtotal: 20392,
  taxes: 1280,
  total: 21672,
  cancellationDate: "October 8, 2025",
};
