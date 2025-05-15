// interface
export interface InspirationCardItemProps {
  image: string;
  tags: string[];
  readTime: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

export interface BlogHeaderProps {
  title: string;
  image: string;
}

export interface Author {
  name: string;
  title: string;
  avatar: string;
}

export interface TravelBlogProps {
  title: string;
  intro: string;
  subIntro: string;
  sections: {
    heading: string;
    content: string;
  }[];
  image: {
    src: string;
    alt: string;
    captionTitle: string;
    captionDesc: string;
  };
  author: Author;
}
