import './globals.css';
import { AuthProvider } from '../components/providers/AuthProvider';

export const metadata = {
  title: 'مبسط AI - لوحة التحكم',
  description: 'لوحة تحكم العميل',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0a0a0a] text-white min-h-screen font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
