import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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

function Home() {
  useSectionFadeIn();

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
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

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}
