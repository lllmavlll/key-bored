import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/lll_maverick_lll/',
    icon: IconBrandInstagram
  },
  {
    name: 'X', 
    href: 'https://x.com/elonmusk',
    icon: IconBrandX
  },
  {
    name: 'GitHub',
    href: 'https://github.com/lllmavlll',
    icon: IconBrandGithub
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahesh-k-n-732121251',
    icon: IconBrandLinkedin
  }
];

const Footer = () => (
  <footer className='dark:bg-gray-900 light:bg-tanBgColor'>
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-20">
      <div className="mt-10 border-t border-purple-900/30 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex gap-x-6 md:order-2">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              target='_blank'
              className="text-purple-950 dark:text-gray-200 hover:text-purple-700 hover:scale-110 transition-all duration-300"
            >
              <span className="sr-only">{name}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm/6 text-purple-950 dark:text-gray-200 md:order-1 md:mt-0">
         Made with ❤️ and lots of kool vibes
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
