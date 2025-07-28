export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center bg-transparent z-50">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold tracking-wide" style={{color:'#22643c',fontFamily:'var(--font-racing)'}}>KURA FORCE</span>
        <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-green-900 font-semibold" style={{fontFamily:'var(--font-accent)'}}>F1 IN SCHOOLS</span>
      </div>
      <p className="text-xs text-center opacity-70" style={{color:'#003824',fontFamily:'var(--font-accent)'}}>Ingeniería, velocidad y visión. &copy; {new Date().getFullYear()} Kura Force Team</p>
      <div className="mt-3 flex gap-4">
        <a href="#team" className="text-green-900 hover:text-yellow-700 text-xs font-medium transition" style={{fontFamily:'var(--font-accent)'}}>Equipo</a>
        <a href="#projects" className="text-green-900 hover:text-yellow-700 text-xs font-medium transition" style={{fontFamily:'var(--font-accent)'}}>Proyectos</a>
        <a href="#contact" className="text-green-900 hover:text-yellow-700 text-xs font-medium transition" style={{fontFamily:'var(--font-accent)'}}>Contacto</a>
      </div>
    </footer>
  );
}
