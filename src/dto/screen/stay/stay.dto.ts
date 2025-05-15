import { FilterSection } from "@/dto/types/stay.types";

export const stays = [
  {
    id: 1,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
  {
    id: 3,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
  {
    id: 4,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
  {
    id: 5,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
  {
    id: 6,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
  {
    id: 7,
    title: "Hotel de la Mer",
    slug: "hotel-de-la-mer",
    distance:
      "Located just 2 km from the bustling Atatürk Airport, this hotel is perfect for those on the go.",
    room: "Executive Room",
    bed: "King Size Bed",
    view: "Ocean View",
    facilities: ["Swimming Pool", "Pick & Drop", "Bathtub"],
    note: "Highly Recommended! Reserved 200 times last month.",
    rating: 4.7,
    reviews: 300,
    price: 349,
    imageCount: 5,
  },
];

export const filters: FilterSection[] = [
  {
    title: 'Star Rating',
    type: 'checkbox',
    key: 'stars',
    options: [
      { label: '5 Star', value: '5' },
      { label: '4 Star', value: '4' },
      { label: '3 Star', value: '3' },
    ],
  },
  {
    title: 'Price Range',
    type: 'range',
    key: 'price',
    range: {
      min: 0,
      max: 5000,
      step: 100,
      defaultValue: [500, 3000],
    },
  },
  {
    title: 'Facilities',
    type: 'checkbox',
    key: 'facilities',
    options: [
      { label: 'Free WiFi', value: 'wifi' },
      { label: 'Swimming Pool', value: 'pool' },
      { label: 'Breakfast Included', value: 'breakfast' },
    ],
  },
];

export const amenities = [
  "Free WiFi",
  "24-Hour Front Desk",
  "Free Parking",
  "Swimming Pool",
  "Restaurant",
  "Bar",
];

export const title = "About Hotel de la Mer";
export const content = "Located just 2 km from the bustling Atatürk Airport, Hotel de la Mer offers a perfect blend of convenience and luxury. Our elegant rooms feature modern amenities and stunning views of the ocean, making your stay both comfortable and memorable.  Whether you're visiting Istanbul for business or leisure, our prime location provides easy access to major attractions while offering a peaceful retreat from the city's hustle and bustle. Enjoy our world-class amenities including a swimming pool, fine dining restaurant, and spa services.";

export const rooms = [
  {
    image: "/dist/images/tour-images/available-room-card/hotel1.svg", // you will adjust src
    title: "Executive Room",
    rating: 4.7,
    reviews: 300,
    tags: ["Breakfast", "Ocean View", "45 m²"],
    cancellation: "Free cancellation",
    cancelUntil: "Oct 8, 2025",
    price: "BDT 2,549",
    selected: true,
  },
  {
    image: "/dist/images/tour-images/available-room-card/hotel2.svg", // you will adjust src
    title: "Deluxe Suite",
    rating: 4.7,
    reviews: 300,
    tags: ["King Size Bed", "Coffee & tea", "45 m²"],
    cancellation: "Free cancellation",
    cancelUntil: "Oct 8, 2025",
    price: "BDT 1,949",
    selected: false,
  },
  {
    image: "/dist/images/tour-images/available-room-card/hotel3.svg", // you will adjust src
    title: "Standard Room",
    rating: 4.7,
    reviews: 300,
    tags: ["Twin Beds", "City View", "Housekeeping", "24 m²"],
    cancellation: "Free cancellation",
    cancelUntil: "Oct 8, 2025",
    price: "BDT 1,396",
    selected: false,
  },
];

export const reviewData = {
  avatarUrl: "/icons/tour-icons/avatar.png", // use a local image or URL
  name: "Floyd Miles",
  date: "Aug 4, 2024",
  rating: 4,
  comment: `It helps having the majority of the original cast, as well as some welcomed new faces. It's also nice having Tim Burton back in the director's seat. He was able to keep the feel from the original.`,
};

export const priceSummaryData = {
  suitType: "Standard",
  perNight: 2549,
  nights: 4,
  fees: 140,
  reserveLabel: "Reserve Now",
  cancellationDate: "October 8, 2025",
};

export const iconMap: Record<string, string> = {
  "Free WiFi": "/icons/tour-icons/wifi.svg",
  "24-Hour Front Desk": "/icons/tour-icons/frontdesk.svg",
  "Free Parking": "/icons/tour-icons/parking.svg",
  "Swimming Pool": "/icons/tour-icons/pool.svg",
  "Restaurant": "/icons/tour-icons/restaurant.svg",
  "Bar": "/icons/tour-icons/bar.svg",
};

export const reviewStats = {
  averageRating: 4.0,
  totalReviews: 1250,
  ratingCounts: {
    5: 650,
    4: 400,
    3: 120,
    2: 50,
    1: 30,
  },
};

export const bookingData = {
  hotelName: 'Hotel de la Mer',
  roomType: 'Deluxe Suite',
  imageSrc: '/dist/images/stay-images/hotel11.svg',
  stayDetails: {
    checkIn: 'Mon, Oct 10, 2025',
    checkOut: 'Fri, Oct 14, 2025',
    nights: 4,
    guests: 1,
  },
  priceDetails: {
    suitType: 'Standard',
    pricePerNight: 2549,
    totalNights: 4,
    taxes: 140,
    total: 10336, // (2549 * 4) + 140
  },
  onConfirm: () => {
    console.log('Reservation confirmed!');
  },
};


export const months = [
  { label: "MM", value: "" },
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];

export const years = Array.from({ length: 15 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return { label: year.toString(), value: year.toString() };
});