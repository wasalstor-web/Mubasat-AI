import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-30 mr-64">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input 
            type="text" 
            placeholder="بحث في النظام..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pr-10 pl-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/5 text-white/70 hover:text-white transition relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-left hidden md:block">
              <div className="text-sm font-bold text-white">أحمد محمد</div>
              <div className="text-xs text-white/50">مشترك مميز</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-purple-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}