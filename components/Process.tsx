"use client";

import { Search, Lightbulb, PenTool, TestTube } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Research & Understand",
    description:
      "I deeply understand the problem space through user interviews, competitive analysis, stakeholder workshops, and analytics to uncover real pain points.",
    icon: Search,
    color: "#8b5cf6",
    deliverables: ["User interviews", "Competitor analysis", "Empathy maps", "Problem statement"],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Synthesize & Prioritize",
    description:
      "Synthesizing research into clear insights, creating personas, journey maps, and defining success metrics so everyone is aligned before design begins.",
    icon: Lightbulb,
    color: "#06b6d4",
    deliverables: ["User personas", "Journey maps", "Success metrics", "Design brief"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Ideate & Prototype",
    description:
      "From rough sketches to high-fidelity prototypes, I explore solutions, iterate quickly, and refine until the design is both intuitive and visually excellent.",
    icon: PenTool,
    color: "#f472b6",
    deliverables: ["Wireframes", "UI designs", "Interactive prototype", "Design system"],
  },
  {
    number: "04",
    title: "Validate",
    subtitle: "Test & Iterate",
    description:
      "Testing prototypes with real users, gathering quantitative and qualitative feedback, and iterating until the data confirms the experience solves the problem.",
    icon: TestTube,
    color: "#34d399",
    deliverables: ["Usability tests", "Iteration report", "Handoff docs", "Dev collaboration"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 relative overflow-hidden" style={{ background: "#0d0d16" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">
            My Approach
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Design{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Process
            </span>
          </h2>
          <p className="text-[#64748b]">
            A battle-tested, human-centered design process that consistently delivers measurable results.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: "rgba(19,19,26,0.9)" }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
              />

              {/* Icon + number */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon size={20} style={{ color: step.color }} />
                </div>
                <span
                  className="text-4xl font-bold opacity-10 text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.number}
                </span>
              </div>

              <div className="text-xs font-semibold mb-1" style={{ color: step.color }}>
                {step.subtitle}
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Deliverables */}
              <div>
                <p className="text-[10px] text-[#334155] uppercase tracking-wider mb-2 font-bold">
                  Deliverables
                </p>
                <div className="space-y-1.5">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: step.color }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
