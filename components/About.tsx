"use client";

import { CheckCircle, Download, Briefcase, BookOpen, PenTool } from "lucide-react";

const highlights = [
  "Proficient in Figma — wireframes, prototypes & responsive layouts",
  "Strong grasp of user-centered design principles & accessibility",
  "Experienced collaborating with developers in remote environments",
  "Skilled in design systems, reusable components & modern UI trends",
];

const tools = [
  { name: "Figma", color: "#f24e1e" },
  { name: "Wireframing", color: "#8b5cf6" },
  { name: "Prototyping", color: "#06b6d4" },
  { name: "Design Systems", color: "#34d399" },
  { name: "User Flows", color: "#f472b6" },
  { name: "Accessibility", color: "#f59e0b" },
  { name: "Responsive Design", color: "#a78bfa" },
  { name: "UX Writing", color: "#94a3b8" },
];

const experience = [
  {
    icon: PenTool,
    role: "UI/UX Designer – Trainee",
    company: "Future Tech Institute",
    color: "#8b5cf6",
    points: [
      "Created wireframes, user flows & interactive prototypes using Figma",
      "Built design systems & reusable components for scalable interfaces",
      "Worked on responsive layouts following modern UI/UX trends",
    ],
  },
  {
    icon: BookOpen,
    role: "English Language Teacher",
    company: "Bloomfield Hall School",
    color: "#06b6d4",
    points: [
      "Designed structured, user-focused lesson plans & activities",
      "Assessed learner behavior and adapted methods to improve engagement",
      "Strengthened empathy, communication & feedback-handling skills",
    ],
  },
  {
    icon: Briefcase,
    role: "Freelance Content Writer",
    company: "Self-employed",
    color: "#f472b6",
    points: [
      "Created user-focused content for websites & digital platforms",
      "Aligned content structure with user journeys & conversion goals",
      "Deepened understanding of information architecture & UX writing",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">About Me</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — image + experience */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: "4/5",
                maxWidth: "400px",
                background: "linear-gradient(145deg, #13131a 0%, #1a1128 60%, #0f1a2e 100%)",
                border: "1px solid rgba(139,92,246,0.25)",
              }}
            >
              {/* Decorative blobs inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", filter: "blur(40px)" }} />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)", filter: "blur(40px)" }} />

              {/* SVG Avatar illustration */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 pt-12 pb-6 w-full h-full">
                {/* Avatar circle */}
                <div className="relative">
                  <div
                    className="w-36 h-36 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)" }}
                  >
                    {/* Female silhouette SVG */}
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                      {/* Head */}
                      <circle cx="50" cy="32" r="16" fill="white" fillOpacity="0.95" />
                      {/* Hair */}
                      <path d="M34 28 Q34 14 50 14 Q66 14 66 28 Q66 20 58 18 Q50 16 42 18 Q36 20 34 28Z" fill="white" fillOpacity="0.7" />
                      {/* Body / shoulders */}
                      <path d="M24 90 Q24 62 38 58 Q44 56 50 56 Q56 56 62 58 Q76 62 76 90Z" fill="white" fillOpacity="0.85" />
                      {/* Collar / neckline detail */}
                      <path d="M44 58 Q50 66 56 58" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  {/* Status ring */}
                  <div
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "#0a0a0f", border: "2px solid #8b5cf6" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M12 2L13.5 8H20L14.5 11.5L16.5 18L12 14L7.5 18L9.5 11.5L4 8H10.5L12 2Z"
                        fill="#8b5cf6" />
                    </svg>
                  </div>
                </div>

                {/* Floating design tool chips */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Figma", "UX Design", "Prototyping", "Wireframes"].map((tag, i) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: i % 2 === 0 ? "rgba(139,92,246,0.15)" : "rgba(6,182,212,0.12)",
                        color: i % 2 === 0 ? "#a78bfa" : "#67e8f9",
                        border: `1px solid ${i % 2 === 0 ? "rgba(139,92,246,0.3)" : "rgba(6,182,212,0.25)"}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name overlay at bottom */}
                <div className="text-center mt-auto">
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-syne)" }}>
                    Aqsa Zainab
                  </div>
                  <div className="text-[#94a3b8] text-sm mt-1">Junior UI/UX Designer · Rawalpindi, Pakistan</div>
                </div>
              </div>
            </div>

            {/* Open to work */}
            <div className="absolute top-5 -right-4 px-4 py-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-300">Open to Work</span>
              </div>
            </div>

            {/* Education card */}
            <div
              className="mt-6 rounded-2xl p-5 border border-white/5 max-w-[400px]"
              style={{ background: "rgba(19,19,26,0.9)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#8b5cf620" }}>
                  <BookOpen size={16} style={{ color: "#8b5cf6" }} />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">BS English</div>
                  <div className="text-[#64748b] text-xs">University of Southern Punjab</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="lg:pt-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Designing with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                purpose
              </span>
              ,<br />built for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f472b6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                humans
              </span>
            </h2>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-5">
              I&apos;m a Junior UI/UX Designer based in Rawalpindi with hands-on experience designing
              intuitive web and mobile interfaces. I&apos;m passionate about turning ideas into clean,
              functional designs that users genuinely enjoy.
            </p>

            <p className="text-[#64748b] leading-relaxed mb-8">
              My background spans UX training, content writing, and teaching — all of which sharpened
              my empathy, communication, and problem-solving. I bring a human-first perspective to
              every design challenge and love collaborating with developers to bring ideas to life.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                  <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: "#8b5cf6" }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* Experience */}
            <div className="mb-10 space-y-4">
              <p className="text-xs font-bold text-[#475569] tracking-[0.2em] uppercase mb-4">Experience</p>
              {experience.map(({ icon: Icon, role, company, color, points }) => (
                <div
                  key={role}
                  className="rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors"
                  style={{ background: "rgba(19,19,26,0.9)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{role}</div>
                      <div className="text-[10px]" style={{ color }}>{company}</div>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#64748b]">
                        <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Toolkit */}
            <div className="mb-10">
              <p className="text-xs font-bold text-[#475569] tracking-[0.2em] uppercase mb-4">Design Toolkit</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/5 hover:border-white/15 transition-colors"
                    style={{ color: t.color, background: `${t.color}10` }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1VKVQuHeWVrypH-XhKfu8U0vrJGilSnxz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200"
              style={{ borderColor: "rgba(139,92,246,0.4)", color: "#a78bfa" }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
