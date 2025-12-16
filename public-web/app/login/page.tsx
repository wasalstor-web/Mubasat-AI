import Link from 'next/link';

export default function Login() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
          <p className="text-white/60">مرحباً بعودتك إلى Mubasat AI</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">البريد الإلكتروني</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white/50 outline-none transition" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">كلمة المرور</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white/50 outline-none transition" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition mt-4">
            دخول
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-white/60">
          ليس لديك حساب؟ <Link href="/signup" className="text-white hover:underline">أنشئ حساباً جديداً</Link>
        </div>
      </div>
    </main>
  );
}