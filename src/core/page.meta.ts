// defautl meta tags for all pages

import { APP_NAME, APP_URL } from "@/core/env";
import { Metadata } from "next";

export interface PageMetaProps {
    title: string;
    description: string;
    icon?: string;
    image?: string;
    keywords?: string[];
    url?: string;
}

export const PageMeta = ({ title, description, icon, image, keywords, url }: PageMetaProps): Metadata => {
    return {
        title: title + " | " + APP_NAME,
        description: description,
        authors: [{ name: APP_NAME }],
        creator: APP_NAME,
        generator: APP_NAME,
        keywords: keywords || [title, description],
        openGraph: {
            title: title + " | " + APP_NAME,
            description: description,
            images: [
                { url: image || "/icons/favicon.png" },
            ],
        },
        twitter: {
            title: title + " | " + APP_NAME,
            description: description,
            images: [
                { url: image || "/icons/favicon.png" },
            ],
        },
        icons: {
            icon: icon || "/icons/favicon.png?height=60&width=60",
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
        },
        alternates: {
            canonical: "/",
        },
        category: "ecommerce",
        metadataBase: getMetadataBase(url),
    }
}

const getMetadataBase = (url: string | undefined) => {
    if (!url) {
        return new URL(APP_URL || "https://" + APP_NAME + ".com");
    }
    const base = APP_URL || "https://localhost:3003";
    return new URL(base + url);
}