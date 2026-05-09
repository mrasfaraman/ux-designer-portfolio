"use client";

const skillCategories = [
  {
    category: "UX Research",
    color: "#8b5cf6",
    icon: "🔍",
    skills: [
      { name: "User Interviews", level: 95 },
      { name: "Usability Testing", level: 92 },
      { name: "Persona Creation", level: 90 },
      { name: "Journey Mapping", level: 88 },
    ],
  },
  {
    category: "UI Design",
    color: "#06b6d4",
    icon: "🎨",
    skills: [
      { name: "Visual Design", level: 97 },
      { name: "Typography", level: 93 },
      { name: "Color Theory", level: 95 },
      { name: "Interaction Design", level: 90 },
    ],
  },
  {
    category: "Prototyping",
    color: "#f472b6",
    icon: "⚡",
    skills: [
      { name: "Wireframing", level: 98 },
      { name: "High-fi Prototypes", level: 94 },
      { name: "Micro-animations", level: 85 },
      { name: "Design Systems", level: 91 },
    ],
  },
  {
    category: "Strategy",
    color: "#34d399",
    icon: "📊",
    skills: [
      { name: "Info. Architecture", level: 88 },
      { name: "Competitive Analysis", level: 85 },
      { name: "A/B Testing", level: 82 },
      { name: "Stakeholder Mgmt", level: 87 },
    ],
  },
];

const softSkills = [
  "Empathy-driven thinking",
  "Cross-functional collaboration",
  "Rapid prototyping",
  "Design critique",
  "Agile / Scrum",
  "Storytelling",
  "Systems thinking",
  "Data-driven design",
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
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">
            Expertise
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Skills &{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Capabilities
            </span>
          </h2>
          <p className="text-[#64748b] max-w-sm text-sm leading-relaxed">
            A broad spectrum of design competencies refined through real-world projects across industries.
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
              {/* Icon */}
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
            Soft Skills & Approaches
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
