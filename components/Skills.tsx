"use client";

const skillCategories = [
  {
    category: "UI Design",
    color: "#8b5cf6",
    icon: "🎨",
    skills: [
      { name: "Visual Design", level: 80 },
      { name: "Typography", level: 78 },
      { name: "Color Theory", level: 82 },
      { name: "Responsive Layouts", level: 85 },
    ],
  },
  {
    category: "UX & Research",
    color: "#06b6d4",
    icon: "🔍",
    skills: [
      { name: "User-Centered Design", level: 85 },
      { name: "Wireframing", level: 90 },
      { name: "User Flows", level: 82 },
      { name: "Accessibility", level: 78 },
    ],
  },
  {
    category: "Prototyping",
    color: "#f472b6",
    icon: "⚡",
    skills: [
      { name: "Figma Prototypes", level: 88 },
      { name: "Interactive Design", level: 80 },
      { name: "Design Systems", level: 75 },
      { name: "Component Libraries", level: 72 },
    ],
  },
  {
    category: "Collaboration",
    color: "#34d399",
    icon: "🤝",
    skills: [
      { name: "Dev Handoff", level: 80 },
      { name: "Design Critiques", level: 82 },
      { name: "Remote Teamwork", level: 88 },
      { name: "UX Writing", level: 85 },
    ],
  },
];

const softSkills = [
  "Empathy-driven thinking",
  "Clear communication",
  "User-centered approach",
  "Problem solving",
  "Attention to detail",
  "Information architecture",
  "Storytelling",
  "Adaptability",
  "Remote collaboration",
  "Continuous learning",
];

export default function Skills() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#0d0d16" }}>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">Expertise</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Capabilities
            </span>
          </h2>
          <p className="text-[#64748b] max-w-sm text-sm leading-relaxed">
            Core competencies built through training, freelance work, and a genuine passion for great design.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              style={{ background: "rgba(19,19,26,0.9)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5"
                style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
              >
                {cat.icon}
              </div>
              <h3 className="text-white font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#94a3b8]">{skill.name}</span>
                      <span className="font-medium" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}60, ${cat.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div
          className="rounded-3xl p-8 border border-white/5"
          style={{ background: "rgba(19,19,26,0.9)" }}
        >
          <p className="text-xs font-bold text-[#475569] tracking-[0.2em] uppercase mb-5">
            Soft Skills & Strengths
          </p>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm text-[#94a3b8] border border-white/8 hover:border-[#8b5cf6]/40 hover:text-white transition-all duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
