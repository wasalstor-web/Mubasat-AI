import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "مبسط AI",
  description: "منصة الذكاء الاصطناعي المتكاملة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={twMerge(cairo.className, "bg-black text-white antialiased")}>
        {children}
      </body>
    </html>
  );
}
