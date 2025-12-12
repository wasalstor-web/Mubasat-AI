import Scene from '../components/Scene';
import Link from 'next/link';
import { ArrowLeft, Bot, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Mubasat AI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="/market" className="hover:text-teal-400 transition">سوق الوكلاء</Link>
            <Link href="/pricing" className="hover:text-teal-400 transition">الأسعار</Link>
            <Link href="/about" className="hover:text-teal-400 transition">عن المنصة</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white transition">
              تسجيل دخول
            </Link>
            <Link href="/app" className="px-5 py-2 rounded-full text-sm font-medium bg-teal-500 hover:bg-teal-600 text-white transition shadow-lg shadow-teal-500/20">
              ابدأ مجاناً
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              الجيل الجديد من الذكاء الاصطناعي
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              أتمتة أعمالك <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 animate-gradient">
                بذكاء مطلق
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mr-auto lg:mr-0">
              منصة عربية متكاملة لبناء وإدارة وكلاء الذكاء الاصطناعي. 
              نقدم لك بنية تحتية قوية، واجهة سهلة، وسوقاً مليئاً بالفرص.
            </p>

            <div className="flex flex-wrap gap-4 justify-end lg:justify-start">
              <Link href="/market" className="group px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition flex items-center gap-2">
                تصفح السوق
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/app" className="px-8 py-4 rounded-2xl bg-slate-800 text-white font-bold border border-slate-700 hover:border-teal-500/50 transition">
                لوحة التحكم
              </Link>
            </div>

            <div className="pt-8 flex gap-8 border-t border-slate-800/50">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-500">وكيل ذكي</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-sm text-slate-500">مستخدم نشط</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-slate-500">وقت تشغيل</div>
              </div>
            </div>
          </div>

          {/* 3D Scene Container */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <Scene />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "وكلاء أذكياء", desc: "وكلاء جاهزون للعمل فوراً في خدمة العملاء والمبيعات." },
              { icon: Zap, title: "سرعة فائقة", desc: "بنية تحتية محسنة لضمان استجابة فورية في أجزاء من الثانية." },
              { icon: Shield, title: "أمان عالي", desc: "تشفير كامل للبيانات وحماية على مستوى المؤسسات." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
