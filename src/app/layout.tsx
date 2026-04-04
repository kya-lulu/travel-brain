import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Brain",
  description: "Personal travel intelligence — trips, awards, and destination guides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-bg text-text">
        <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-700 text-accent hover:text-accent-hover transition-colors duration-200"
            >
              Travel Brain
            </Link>
            <ul className="flex gap-6 md:gap-8">
              <li>
                <Link
                  href="/"
                  className="font-body text-sm md:text-base text-text-secondary hover:text-text transition-colors duration-200"
                >
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/award-tools"
                  className="font-body text-sm md:text-base text-text-secondary hover:text-text transition-colors duration-200"
                >
                  Award Tools
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-surface mt-16 md:mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
            <p className="text-text-muted text-sm text-center">
              Built by Terry & Claude {currentYear}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
