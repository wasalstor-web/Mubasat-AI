import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Market() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <ArrowRight className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl font-bold">سوق الوكلاء</h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition">
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/10 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">وكيل ذكي #{i}</h3>
              <p className="text-white/60 text-sm mb-4">وصف مختصر للوكيل وقدراته في مساعدة العملاء.</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold">$49</span>
                <Link 
                  href="http://147.93.120.99:3001/dashboard" 
                  className="px-6 py-2 rounded-lg bg-white text-black font-bold hover:bg-white/90 transition"
                >
                  شراء الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}