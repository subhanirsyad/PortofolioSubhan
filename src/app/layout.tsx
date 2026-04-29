import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subhan Irsyaduddien — Data Scientist",
  description:
    "Mathematics student at Universitas Indonesia. Data Scientist & AI Engineer — extracting insight, building intelligence.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "TensorFlow",
    "NLP",
    "Universitas Indonesia",
  ],
  openGraph: {
    title: "Subhan Irsyaduddien — Data Scientist",
    description:
      "Mathematics student at Universitas Indonesia. Extracting insight, building intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
