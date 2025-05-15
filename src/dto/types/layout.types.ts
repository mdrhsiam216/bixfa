export type FooterLinkItem = {
    name: string;
    href: string;
    special?: boolean;
};

export type FooterColumnProps = {
    title: string;
    links: FooterLinkItem[];
}

export interface UseScrollHeaderProps {
    isHomePage?: boolean;
    scrollThreshold?: number;
}