import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduGrid",
  description: "Smart Classroom & Timetable Scheduler for SIH 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
