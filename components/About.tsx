"use client";

import Image from "next/image";
import { CheckCircle, Download, Award, Users, Zap } from "lucide-react";

const highlights = [
  "5+ years designing for SaaS, fintech & e-commerce",
  "End-to-end product design from research to handoff",
  "Expertise in design systems and component libraries",
  "Certified Google UX Designer & Figma Expert",
];

const tools = [
  { name: "Figma", color: "#f24e1e" },
  { name: "Adobe XD", color: "#ff61f6" },
  { name: "Photoshop", color: "#31a8ff" },
  { name: "Illustrator", color: "#ff9a00" },
  { name: "Protopie", color: "#5548d9" },
  { name: "Maze", color: "#ff4154" },
  { name: "Miro", color: "#ffd02f" },
  { name: "Notion", color: "#c9c9c9" },
];

const miniStats = [
  { icon: Award, value: "12", label: "Design Awards", color: "#f59e0b" },
  { icon: Users, value: "40+", label: "Happy Clients", color: "#8b5cf6" },
  { icon: Zap, value: "98%", label: "Satisfaction Rate", color: "#34d399" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — image + mini stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5", maxWidth: "400px" }}>
              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.3)" }}
              />
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop"
                alt="Alex Morgan – UI/UX Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.4) 40%, transparent 70%)" }}
              />
              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-syne)" }}>Alex Morgan</div>
                <div className="text-[#94a3b8] text-sm">UI/UX Designer · San Francisco</div>
              </div>
            </div>

            {/* Open to work badge */}
            <div
              className="absolute top-5 -right-4 px-4 py-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-300">Open to Work</span>
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex gap-4 mt-6 max-w-[400px]">
              {miniStats.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="flex-1 rounded-2xl p-4 border border-white/5"
                  style={{ background: "rgba(19,19,26,0.8)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: `${color}15` }}>
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{value}</div>
                  <div className="text-[10px] text-[#64748b] leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="lg:pt-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Designing with{" "}
              <span style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                purpose
              </span>
              ,<br />built for{" "}
              <span style={{
                background: "linear-gradient(135deg, #f472b6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                humans
              </span>
            </h2>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-5">
              Hey! I&apos;m Alex, a product designer based in San Francisco with 5+ years turning
              messy, complex problems into clean digital experiences people actually enjoy using.
            </p>

            <p className="text-[#64748b] leading-relaxed mb-8">
              My process is rooted in empathy — I spend time understanding real problems before
              designing solutions. Whether it&apos;s a mobile app, web platform, or complex SaaS
              dashboard, I deliver work that balances business goals with seamless user journeys.
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

            {/* Toolkit */}
            <div className="mb-10">
              <p className="text-xs font-bold text-[#475569] tracking-[0.2em] uppercase mb-4">
                Design Toolkit
              </p>
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
              style={{
                borderColor: "rgba(139,92,246,0.4)",
                color: "#a78bfa",
              }}
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
