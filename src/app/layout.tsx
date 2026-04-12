import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhan Irsyaduddien — Data Scientist",
  description:
    "Mathematics student at Universitas Indonesia. Data Science & Analytics focused — transforming raw data into models that matter.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Python",
    "TensorFlow",
    "Universitas Indonesia",
  ],
  openGraph: {
    title: "Subhan Irsyaduddien — Data Scientist",
    description:
      "Mathematics student at Universitas Indonesia. Data Science & Analytics focused.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
