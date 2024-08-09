'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';


const Link = ({ href, ...props }: { children: string, href: string }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};


export function NavMenu() {
  return (
    <NavigationMenu.Root className="mx-6 border-b border-none px-2 lg:px-4 h-16">
      <NavigationMenu.List className="flex items-center space-x-4 lg:space-x-6 p-4">
        <NavigationMenu.Item>
          <Link href="/">Overview</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <Link href="/about">About</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
