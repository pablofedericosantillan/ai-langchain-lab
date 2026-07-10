import { Metadata } from "next";

export const metadataContent: Metadata = {
  title: "Platform | Home",
  description:
    "Platform for managing digital access across your organization.",
  keywords:
    "access management, authentication, security, identity management, SSO, single sign-on, digital access, user management, enterprise security",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Platform",
    description:
      "Platform for managing digital access across your organization.",
    url: "https://pl.ai",
    siteName: "Predictic Lanche",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
