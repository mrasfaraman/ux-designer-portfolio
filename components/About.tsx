"use client";

import Image from "next/image";
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
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5", maxWidth: "400px" }}
            >
              <div
                className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.3)" }}
              />
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop"
                alt="Aqsa Zainab – Junior UI/UX Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.3) 40%, transparent 70%)" }}
              />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-syne)" }}>
                  Aqsa Zainab
                </div>
                <div className="text-[#94a3b8] text-sm">Junior UI/UX Designer · Rawalpindi, Pakistan</div>
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
              href="/resume.pdf"
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
