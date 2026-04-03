import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#00ff8822] ${
        scrolled ? 'bg-[#111111]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="font-mono font-bold text-[#e2e8f0] text-lg no-underline">
          <span className="text-[#00ff88]">gp</span>
          <span className="cursor" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors duration-150 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#00ff88] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#00ff88] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#00ff88] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#1e293b] px-6 py-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
