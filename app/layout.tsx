import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CaseVogue - Premium Phone Cases",
    template: "%s | CaseVogue",
  },
  description:
    "Shop premium phone cases for iPhone, Samsung, and Google Pixel. Stylish protection with fast shipping and easy returns.",
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/icomoon/style.css" />
        <link rel="stylesheet" href="/dist/output-scss.css" />
        <link rel="stylesheet" href="/dist/output-tailwind.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
