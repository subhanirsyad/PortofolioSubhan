import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subhan Irsyaduddien — Data Scientist",
  description:
    "Mathematics student at Universitas Indonesia. Data Science & Analytics — building ML pipelines that work in the real world.",
  keywords: ["Data Scientist", "Machine Learning", "Python", "TensorFlow", "Universitas Indonesia"],
  openGraph: {
    title: "Subhan Irsyaduddien — Data Scientist",
    description: "Mathematics student at Universitas Indonesia. Data Science & Analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
