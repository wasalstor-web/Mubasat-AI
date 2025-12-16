import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <ArrowRight className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl font-bold">باقات الأسعار</h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "مجاني", price: "0", features: ["وكيل واحد", "100 محادثة/شهر", "دعم مجتمعي"] },
            { name: "محترف", price: "49", features: ["5 وكلاء", "بلا حدود للمحادثات", "دعم فني مباشر", "API Access"] },
            { name: "شركات", price: "199", features: ["وكلاء غير محدودين", "SLA", "مدير حساب خاص", "تخصيص كامل"] }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${i === 1 ? 'bg-white/10 border-white/50' : 'bg-white/5 border-white/10'} transition`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg text-white/60 font-normal">/شهر</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-white" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition ${i === 1 ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 hover:bg-white/20'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}