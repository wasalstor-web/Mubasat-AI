import Scene from '../components/Scene';
import Link from 'next/link';
import { ArrowLeft, Bot, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Mubasat AI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <Link href="/market" className="hover:text-white transition">سوق الوكلاء</Link>
            <Link href="/pricing" className="hover:text-white transition">الأسعار</Link>
            <Link href="/about" className="hover:text-white transition">عن المنصة</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white transition">
              تسجيل دخول
            </Link>
            <Link href="/app" className="px-5 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-white/90 transition shadow-lg shadow-white/10">
              ابدأ مجاناً
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              الجيل الجديد من الذكاء الاصطناعي
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              أتمتة أعمالك <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 animate-gradient">
                بذكاء مطلق
              </span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl mr-auto lg:mr-0">
              منصة عربية متكاملة لبناء وإدارة وكلاء الذكاء الاصطناعي.
              نقدم لك بنية تحتية قوية، واجهة سهلة، وسوقاً مليئاً بالفرص.
            </p>

            <div className="flex flex-wrap gap-4 justify-end lg:justify-start">
              <Link href="/market" className="group px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-white/90 transition flex items-center gap-2">
                تصفح السوق
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/app" className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold border border-white/10 hover:border-white/30 transition">
                لوحة التحكم
              </Link>
            </div>

            <div className="pt-8 flex gap-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/40">وكيل ذكي</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-sm text-white/40">مستخدم نشط</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/40">وقت تشغيل</div>
              </div>
            </div>
          </div>

          {/* 3D Scene Container */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-3xl opacity-30 animate-pulse" />
            <Scene />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "وكلاء أذكياء", desc: "وكلاء جاهزون للعمل فوراً في خدمة العملاء والمبيعات." },
              { icon: Zap, title: "سرعة فائقة", desc: "بنية تحتية محسنة لضمان استجابة فورية في أجزاء من الثانية." },
              { icon: Shield, title: "أمان عالي", desc: "تشفير كامل للبيانات وحماية على مستوى المؤسسات." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}