import { CarReviewData } from "@/dto/types/car.types";
import { CarPriceSummaryProps } from "@/dto/types/tour.types";

export const carData = [
  {
    image: "/dist/images/car-images/toyota.png",
    title: "Toyota Corolla",
    slug: "toyota-corolla",
    type: "Sedan",
    rating: 4.8,
    reviews: 250,
    facilities: [
      { icon: "/icons/car-icons/seat.svg", label: "5 Seats" },
      { icon: "/icons/car-icons/manual.svg", label: "Manual" },
      { icon: "/icons/car-icons/largeBag.svg", label: "1 Large Bag" },
      { icon: "/icons/car-icons/smallBag.svg", label: "1 Small Bag" },
      { icon: "/icons/car-icons/milage.svg", label: "Unlimited Mileage" },
    ],
    note: "Highly Recommended! 120 people rented this month.",
    brandLogo: "/icons/car-icons/brands/arruda.png",
    price: 302,
  },
  {
    image: "/dist/images/car-images/ford.png",
    title: "Ford Mustang",
    slug: "ford-mustang",
    type: "Convertable",
    rating: 4.8,
    reviews: 250,
    facilities: [
      { icon: "/icons/car-icons/seat.svg", label: "5 Seats" },
      { icon: "/icons/car-icons/manual.svg", label: "Manual" },
      { icon: "/icons/car-icons/largeBag.svg", label: "1 Large Bag" },
      { icon: "/icons/car-icons/smallBag.svg", label: "1 Small Bag" },
      { icon: "/icons/car-icons/milage.svg", label: "Unlimited Mileage" },
    ],
    note: "Highly Recommended! 120 people rented this month.",
    brandLogo: "/icons/car-icons/brands/europcar.png",
    price: 302,
  }
];


export const carPriceSummaryData: CarPriceSummaryProps = {
  carType: "Toyota Corolla",
  duration: 4,
  hourlyRate: 2549,
  total: 10336,
  vat: 140,
  insurance: "BDT 1000",
  cancellationDate: "October 8, 2025",
  reserveLabel: "Reserve Now",
  pickupLocation: "Dhaka",
  dropoffLocation: "Dhaka",
  pickupTime: "10:00 AM",
  dropoffTime: "10:00 AM",
};

export const carReviewData : CarReviewData = {
  avatarUrl: "/icons/tour-icons/avatar.png", // use a local image or URL
  name: "Floyd Miles",
  date: "Aug 4, 2024",
  rating: 4,
  comment: `It helps having the majority of the original cast, as well as some welcomed new faces. It's also nice having Tim Burton back in the director's seat. He was able to keep the feel from the original.`,
};