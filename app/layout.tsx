import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammadreza Hashemi — Ecosystem Strategy & Growth",
  description:
    "Mohammadreza Hashemi builds entrepreneurial communities, innovation programs, and strategic partnerships across Iran's startup ecosystem.",
  openGraph: {
    title: "Mohammadreza Hashemi — Ecosystem Strategy & Growth",
    description:
      "12+ years building the connections, programs, and communities that help ambitious ideas move forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
