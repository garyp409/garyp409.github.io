import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sectionLinks = [
    { label: 'about', id: 'about' },
    { label: 'skills', id: 'skills' },
    { label: 'contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#00ff8822] ${
        scrolled ? 'bg-[#111111]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-mono font-bold text-[#e2e8f0] text-lg no-underline">
          <span className="text-[#00ff88]">gp</span>
          <span className="cursor" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
          {isHome && sectionLinks.map(({ label, id }) => (
            <li key={label}>
              <button
                onClick={() => scrollTo(id)}
                className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors duration-150 bg-transparent border-0 cursor-pointer p-0"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className={`font-mono text-sm no-underline transition-colors duration-150 ${
                location.pathname.startsWith('/blog')
                  ? 'text-[#00ff88]'
                  : 'text-[#64748b] hover:text-[#00ff88]'
              }`}
            >
              blog
            </Link>
          </li>
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
            {isHome && sectionLinks.map(({ label, id }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(id)}
                  className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors bg-transparent border-0 cursor-pointer p-0"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors no-underline"
                onClick={() => setMenuOpen(false)}
              >
                blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
