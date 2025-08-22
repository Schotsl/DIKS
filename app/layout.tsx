"use client";

import "./globals.css";
import { Rubik } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
