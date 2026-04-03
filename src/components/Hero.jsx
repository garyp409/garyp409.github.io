import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const role = useTypewriter('Senior Technical Support Engineer', 50);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* YouTube video background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/CEuOLNWfe0A?autoplay=1&mute=1&loop=1&playlist=CEuOLNWfe0A&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '177.78vh', height: '56.25vw', minWidth: '100%', minHeight: '100%' }}
          title="Background video"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Comment label */}
        <p className="font-mono text-[#4a5568] text-sm mb-6">
          {'// hello, world'}
        </p>

        {/* Name */}
        <p className="font-mono text-[#64748b] text-lg mb-1">
          const name = <span className="text-[#e2e8f0]">"Gary Perkins"</span>;
        </p>

        {/* Role with typewriter */}
        <p className="font-mono text-lg mb-8">
          const role = <span className="text-[#00ff88]">"{role}"</span>
          <span className="text-[#00ff88] animate-[blink_1s_step-end_infinite]">|</span>;
        </p>

        {/* Bio */}
        <p className="text-[#64748b] text-base leading-relaxed mb-10 max-w-lg">
          Senior Technical Support Engineer with deep expertise troubleshooting
          Linux-based cloud applications and complex enterprise environments.
          Known for resolving critical production issues, mentoring peers, and
          serving as an escalation point for high-impact technical problems.
        </p>

        {/* CTA */}
        <a
          href="#skills"
          className="inline-block font-mono text-sm text-[#00ff88] border border-[#00ff88] px-6 py-3 no-underline
            hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all duration-200"
        >
          {'./view-my-work'}
        </a>
      </div>
    </section>
  );
}
