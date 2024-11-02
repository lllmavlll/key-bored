import localFont from "next/font/local";
import { Signika_Negative, Dosis ,Manrope} from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const signika = Signika_Negative({
  subsets: ['latin'],
  variable: '--font-signika',
});

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata = {
  title: "KeyBored!",
  description: "Test your keyboard with KeyBored",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signika.variable} ${dosis.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
