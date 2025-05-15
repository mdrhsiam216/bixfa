export type TabItems = {
    key: string;
    title: string;
    url: string;
    bannerTitle: React.ReactNode;
    icon: string;
    activeIcon: string;
    component: React.ReactNode;
    banner: string;
};

export interface DealCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    rating: string;
    reviews: string;
}

export interface InspirationCardProps {
    image: string;
    tag: string;
    readTime: string;
    title: string;
    author: string;
    avatar: string;
    date: string;
    isLast?: boolean;
}

export interface CategoryCardProps {
    image: string;
    title: string;
}

export interface ExclusiveOfferCardProps {
    tag: string;
    title: string;
    description: string;
    image: string;
    coupon: string;
    couponIcon: string;
}

export interface DestinationCardProps {
    image: string;
    title: string;
    width?: string;
    height?: string;
    className?: string;
  }