import localFont from "next/font/local";
import { Commissioner } from 'next/font/google';
import "./globals.css";
import { AppProvider } from "./context/UIcontextAPI";
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

const commissioner = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
});

export const metadata = {
  title: "KeyBored!",
  description: "Test your keyboard with KeyBored",
  icons: {
    icon: '/keyboard.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${commissioner.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
