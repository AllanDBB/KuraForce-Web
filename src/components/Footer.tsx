export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-green-100 shadow-lg py-10 px-4">
      {/* Racing Stripe */}
      <div className="w-full h-2 bg-gradient-to-r from-green-700 via-green-400 to-green-700 mb-8 rounded-full opacity-80" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 w-full text-center">
          {/* Logo & Team Name */}
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <span
              className="text-2xl font-black tracking-wide"
              style={{ color: '#22643c', fontFamily: 'var(--font-racing)' }}
            >
              KURA FORCE
            </span>
            <span
              className="text-xs px-2 py-1 rounded bg-green-100 text-green-900 font-semibold"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              F1 IN SCHOOLS
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://instagram.com/kura.force"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-green-50 hover:bg-green-200 transition border border-green-200"
              aria-label="Instagram"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#22643c" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="#22643c" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="#22643c" />
              </svg>
            </a>
            <a
              href="mailto:kuraforcecr@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-green-50 hover:bg-green-200 transition border border-green-200"
              aria-label="Email"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="#22643c" strokeWidth="2" />
                <path d="M3 7l9 6 9-6" stroke="#22643c" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <div
          className="mt-8 text-xs text-green-900 opacity-70 text-center"
          style={{ fontFamily: 'var(--font-accent)' }}
        >
          Ingeniería, velocidad y visión. &copy; {new Date().getFullYear()} Kura Force Team
        </div>
      </div>
    </footer>
  );
}
