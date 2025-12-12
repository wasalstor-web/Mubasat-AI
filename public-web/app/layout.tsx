import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mubasat AI",
  description: "AI Platform with 3D Hero",
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
