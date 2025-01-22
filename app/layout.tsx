import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"
import { NavMenu } from "@/components/navigation-menu"
import { SiteFooter } from "@/components/site-footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Eddie's Avatars",
  description: "The display of the images presenting Eddie on social media.",
  generator: 'Next.js',
  applicationName: 'eddiehe-avatar',
  keywords: ['Next.js', 'React', 'Avatar'],
  authors: { name: 'Eddie He', url: 'https://www.eddiehe.top' },
  metadataBase: new URL('https://avatar.eddiehe.top'),
  openGraph: {
    // jpeg does not work
    images: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "bg-background font-sans antialiased",
        fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container flex flex-col">
            <NavMenu />
            <div className="container flex-1">
              {children}
            </div>
          </div>
          <SiteFooter className="border-t" />
        </ThemeProvider>
      </body>
    </html>
  );
}
