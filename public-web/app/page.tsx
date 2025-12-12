export default function Home() {
  return (
    <main style={{textAlign: 'center', padding: '50px', fontFamily: 'sans-serif'}}>
      <h1 style={{fontSize: '3rem', color: '#2dd4bf'}}>Mubasat AI</h1>
      <p>3D Hero & Marketing Site (Public)</p>
      <div style={{marginTop: '50px'}}>
        <a href="/market" style={{margin: '0 20px', textDecoration: 'none', fontSize: '1.5rem'}}>🛒 السوق</a>
        <a href="/app" style={{margin: '0 20px', textDecoration: 'none', fontSize: '1.5rem'}}>📊 لوحة العميل</a>
      </div>
    </main>
  );
}
