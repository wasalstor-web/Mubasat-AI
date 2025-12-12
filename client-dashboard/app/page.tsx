export default function Dashboard() {
  return (
    <main style={{padding: '50px', fontFamily: 'sans-serif', backgroundColor: '#f0f9ff', minHeight: '100vh'}}>
      <h1 style={{color: '#0f172a'}}>لوحة تحكم العميل</h1>
      <p>مرحباً بك في منطقة العملاء الخاصة.</p>
      <div style={{marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2>نظرة عامة</h2>
        <p>حالة الاشتراكات: نشط</p>
      </div>
    </main>
  );
}
