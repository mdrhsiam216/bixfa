export type FooterLinkItems = {
    name: string;
    href: string;
    special?: boolean;
}

export const productLinks : FooterLinkItems[] = [
    { name: "How it works", href: "#" },
    { name: "Features", href: "#", special: true },
    { name: "Integrations", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Business Solutions", href: "#" },
  ];

export const useCaseLinks: FooterLinkItems[] = [
    { name: "Solo Travelers", href: "#" },
    { name: "Families", href: "#" },
    { name: "Corporate Travel", href: "#" },
    { name: "Adventure Tourism", href: "#" },
    { name: "Budget Travelers", href: "#" },
];

export const resourcesLinks: FooterLinkItems[] = [
    { name: "Travel Guides", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Support", href: "#" },
    { name: "Community Forum", href: "#" },
    { name: "Events", href: "#" },
];

export const aboutLinks: FooterLinkItems[] = [
    { name: "Our Story", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#", special: true },
    { name: "Contact Us", href: "#" },
];