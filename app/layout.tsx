import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Productivity Diary",
  description: "Personal productivity diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header id="side-header" className="side-header">
          <button>
            <span className="material-symbols-outlined header-item">
              check_circle
            </span>
          </button>
          <button>
            <span className="material-symbols-outlined header-item">
              monitoring
            </span>
          </button>
          <button>
            <span className="material-symbols-outlined header-item">help</span>
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
