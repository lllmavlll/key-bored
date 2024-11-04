import { Commissioner } from 'next/font/google';
import "./globals.css";
import { AppProvider } from "./context/UIcontextAPI";

const commissioner = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
});

export const metadata = {
  title: "KeyBored!",
  description: "Test your keyboard with KeyBored!",
  icons: {
    icon: '/keyboard.svg',
  },
  alternates: {
    canonical: 'https://keyboredd.vercel.app',
  },
  openGraph: {
    title: "KeyBored!",
    description: "Test your keyboard with KeyBored!",
    url: "https://keyboredd.vercel.app",
    type: "website",
    images: [
      {
        url: "/KeyboredOGImage.png",
        width: 1200,
        height: 630,
        alt: "KeyBored ",
      },
    ],
  },
  keywords: ["keyboard tester", "typing tool", "keyboard check", "key press tester", "keyboard test", "typing test", "keyboard testing", "typing practice", "keyboard practice", "typing game", "keyboard game", "typing practice tool", "keyboard practice tool", "typing game tool", "keyboard game tool", "typing practice app", "keyboard practice app", "typing game app", "keyboard game app", "typing practice website", "keyboard practice website", "typing game website", "keyboard game website", "typing practice online", "keyboard practice online", "typing game online", "keyboard game online", "typing practice tool online", "keyboard practice tool online", "typing game tool online", "keyboard game tool online", "typing practice tool free", "keyboard practice tool free", "typing game tool free", "keyboard game tool free", "typing practice tool online free", "keyboard practice tool online free", "typing game tool online free", "keyboard game tool online free", "typing practice tool online free", "keyboard practice tool online free", "typing game tool online free", "keyboard game tool online free"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${commissioner.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
