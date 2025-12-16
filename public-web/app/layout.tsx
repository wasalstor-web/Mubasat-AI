import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
