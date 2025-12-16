'use client';

import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message === 'Invalid login credentials' 
        ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' 
        : 'حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
          <p className="text-white/60">مرحباً بعودتك إلى Mubasat AI</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white/50 outline-none transition" 
              placeholder="name@example.com"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">كلمة المرور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white/50 outline-none transition" 
              placeholder="••••••••"
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'جاري التحميل...' : 'دخول'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/60">
          ليس لديك حساب؟ <Link href="http://147.93.120.99:3000/pricing" className="text-white hover:underline">اشترك الآن</Link>
        </div>
      </div>
    </main>
  );
}
