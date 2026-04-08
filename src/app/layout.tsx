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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text">
        <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md">
          <nav
            className="mx-auto px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-xl md:text-2xl font-700 text-text">
                Travel Brain
              </span>
            </Link>
            <ul className="flex gap-1">
              <li>
                <Link
                  href="/"
                  className="font-body text-sm px-4 py-2.5 rounded-full text-text-muted hover:text-text hover:bg-white transition-all duration-200"
                >
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/award-tools"
                  className="font-body text-sm px-4 py-2.5 rounded-full text-text-muted hover:text-text hover:bg-white transition-all duration-200"
                >
                  Award Tools
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-16 md:mt-24">
          <div
            className="mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className="h-px bg-border/60 mb-8" />
            <p className="text-text-muted text-sm text-center">
              Built by Terry & Claude {currentYear}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
