import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="mr-64 min-h-[calc(100vh-80px)] p-8">
        {children}
      </main>
    </>
  );
}
