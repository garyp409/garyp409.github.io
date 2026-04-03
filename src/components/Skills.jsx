import { skillGroups } from '../data/skills';

function SkillTag({ name }) {
  return (
    <span
      className="font-mono text-sm text-[#e2e8f0] bg-[#161616] border border-[#1e293b] border-l-2 border-l-[#00ff88]
        px-3 py-1.5 transition-colors duration-150 hover:bg-[#00ff8811]"
    >
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#4a5568] text-sm mb-2">{'// skills & tools'}</p>
        <h2 className="font-mono text-2xl font-bold text-[#e2e8f0] mb-12">
          What I work with
        </h2>

        <div className="flex flex-col gap-10">
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <p className="font-mono text-xs text-[#00ff88] uppercase tracking-widest mb-4">
                {label}
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
