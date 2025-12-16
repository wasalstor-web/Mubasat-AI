'use client';

import { Activity, CreditCard, Users, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../components/providers/AuthProvider';

export default function DashboardPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState([
    { label: 'إجمالي الوكلاء', value: '0', icon: Users, change: 'جاري التحميل...', color: 'text-blue-400' },
    { label: 'المحادثات النشطة', value: '0', icon: Activity, change: 'جاري التحميل...', color: 'text-teal-400' },
    { label: 'الرصيد المتبقي', value: '$0', icon: CreditCard, change: 'جاري التحميل...', color: 'text-purple-400' },
  ]);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (data) {
            setProfile(data);
            // Update stats based on real data (mock logic for now until we have agents table populated)
            setStats([
                { label: 'إجمالي الوكلاء', value: '0', icon: Users, change: '+0 هذا الشهر', color: 'text-blue-400' },
                { label: 'المحادثات النشطة', value: '0', icon: Activity, change: '0% ارتفاع', color: 'text-teal-400' },
                { label: 'الرصيد المتبقي', value: `$${data.credits || 0}`, icon: CreditCard, change: 'تجديد قريباً', color: 'text-purple-400' },
            ]);
        }
      };
      fetchProfile();
    }
  }, [user]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">لوحة المعلومات</h1>
        <p className="text-white/60">
            {profile ? `مرحباً بك، ${profile.full_name || 'مستخدم'}` : 'مرحباً بك، جاري تحميل بياناتك...'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-lg bg-white/5 text-white/60">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Agents */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">الوكلاء النشطين</h3>
            <button className="text-sm text-teal-400 hover:text-teal-300">عرض الكل</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white/70" />
                </div>
                <div className="flex-1">
                  <div className="font-bold">وكيل خدمة العملاء #{i}</div>
                  <div className="text-xs text-white/50">آخر نشاط: قبل 5 دقائق</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">آخر العمليات</h3>
            <button className="text-sm text-teal-400 hover:text-teal-300">عرض الكل</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/5">
                    <ArrowUpRight className="w-4 h-4 text-white/60" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">تجديد اشتراك شهري</div>
                    <div className="text-xs text-white/40">16 ديسمبر 2025</div>
                  </div>
                </div>
                <div className="font-bold text-white/90">-$49.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}