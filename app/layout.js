import "./globals.css";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Janashakti Agro — Growing together, selling stronger",
  description:
    "Janashakti Agro is a farmer-owned collective. We pool farmland, form small farming teams, rent out equipment at fair rates, guide farmers and sell their produce together in the market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}