import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useSectionFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useSectionFadeIn();

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="section-fade">
          <Skills />
        </div>
        <div className="section-fade">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
