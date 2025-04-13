'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



const Link = ({ href, ...props }: { children: string, href: string }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenuLink>
  );
};


export function NavMenu() {
  return (
    <NavigationMenu className="mx-6 border-b border-none px-2 lg:px-4 h-16">
      <NavigationMenuList className="flex items-center space-x-4 lg:space-x-6 p-4">
        <NavigationMenuItem>
          <Link href="/">Overview</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative">
          <Link href="/about">About</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
