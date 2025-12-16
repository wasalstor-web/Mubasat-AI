import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition">
          <ArrowRight className="w-4 h-4" />
          العودة للرئيسية
        </Link>
        
        <h1 className="text-5xl font-bold mb-8">عن Mubasat AI</h1>
        <p className="text-xl text-white/70 leading-relaxed mb-12">
          نحن منصة عربية رائدة تهدف إلى تمكين الشركات والأفراد من الاستفادة القصوى من تقنيات الذكاء الاصطناعي.
          نؤمن بأن المستقبل للأتمتة الذكية التي تحترم خصوصية المستخدم وتقدم قيمة حقيقية.
        </p>
        
        <div className="grid grid-cols-2 gap-8 text-right">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
            <p className="text-white/60">جعل الذكاء الاصطناعي في متناول الجميع، بأسعار معقولة وتجربة مستخدم لا تضاهى.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-2">مهمتنا</h3>
            <p className="text-white/60">بناء بنية تحتية قوية وموثوقة للوكلاء الأذكياء تخدم السوق العربي والعالمي.</p>
          </div>
        </div>
      </div>
    </main>
  );
}