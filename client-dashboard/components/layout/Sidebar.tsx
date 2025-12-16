import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, Settings, LogOut, Users, BarChart3 } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'نظرة عامة', href: '/dashboard' },
  { icon: ShoppingBag, label: 'اشتراكاتي', href: '/dashboard/subscriptions' },
  { icon: BarChart3, label: 'التحليلات', href: '/dashboard/analytics' },
  { icon: Settings, label: 'الإعدادات', href: '/dashboard/settings' },
];

const adminItems = [
  { icon: Users, label: 'إدارة المستخدمين', href: '/admin/users' },
  { icon: ShoppingBag, label: 'إدارة المنتجات', href: '/admin/products' },
];

export default function Sidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  return (
    <aside className="w-64 bg-[#0a0a0a] border-l border-white/10 flex flex-col h-screen fixed right-0 top-0 z-40">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Mubasat AI
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="mb-2 px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
          لوحة التحكم
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all group"
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}

        {isAdmin && (
          <>
            <div className="mt-8 mb-2 px-4 text-xs font-semibold text-teal-500/80 uppercase tracking-wider">
              منطقة المشرف
            </div>
            {adminItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-teal-400 hover:bg-teal-500/10 rounded-xl transition-all group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </>
        )}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">تسجيل خروج</span>
        </button>
      </div>
    </aside>
  );
}