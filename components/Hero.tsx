"use client";

import { ArrowDown, Sparkles, Play } from "lucide-react";

const stats = [
  { value: "1+", label: "Year in UX" },
  { value: "15+", label: "Designs Made" },
  { value: "3", label: "Real Clients" },
  { value: "5+", label: "Tools Mastered" },
];

function DesignMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      <div
        className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, #8b5cf6 0%, #06b6d4 50%, transparent 80%)" }}
      />
      <div
        className="relative rounded-3xl border border-white/10 overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="text-xs text-white/30 font-mono">aqsa.figma</div>
          <div className="w-16 h-2 rounded-full bg-white/5" />
        </div>

        <div className="p-5 space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-24 rounded-full bg-white/10 mb-2" />
              <div className="h-4 w-36 rounded-full" style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }} />
            </div>
            <div
              className="w-10 h-10 rounded-full border-2 border-[#8b5cf6]/40"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #f472b6)" }}
            />
          </div>

          {/* Hero card */}
          <div
            className="rounded-2xl p-4 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)" }}
          >
            <div className="text-xs text-white/60 mb-1">Current Project</div>
            <div className="text-lg font-bold text-white mb-3">Mobile App Redesign</div>
            <div className="flex gap-3">
              <div className="flex-1 bg-white/20 rounded-xl py-2 text-center text-xs text-white font-medium">Research</div>
              <div className="flex-1 bg-white/20 rounded-xl py-2 text-center text-xs text-white font-medium">Wireframe</div>
              <div className="flex-1 bg-white/20 rounded-xl py-2 text-center text-xs text-white font-medium">Prototype</div>
            </div>
            <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/5" />
            <div className="absolute -right-2 -bottom-6 w-20 h-20 rounded-full bg-white/5" />
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {[
              { label: "User Research", sub: "Completed", pct: 100, color: "#34d399" },
              { label: "Wireframes", sub: "In Progress", pct: 75, color: "#8b5cf6" },
              { label: "Prototyping", sub: "Upcoming", pct: 30, color: "#06b6d4" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: `${t.color}22`, border: `1px solid ${t.color}40` }}
                >
                  {t.label[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium">{t.label}</span>
                    <span style={{ color: t.color }}>{t.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom chart */}
          <div>
            <div className="flex justify-between text-[10px] text-white/30 mb-2">
              <span>UX Score</span><span>This Sprint</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 10 || i === 11
                      ? "linear-gradient(0deg, #8b5cf6, #06b6d4)"
                      : "rgba(255,255,255,0.07)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top right */}
      <div
        className="absolute -top-4 -right-4 rounded-2xl px-4 py-2.5 border border-white/10 shadow-xl"
        style={{ background: "rgba(19,19,26,0.9)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#34d399] to-[#06b6d4] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] text-white/40">Figma Expert</div>
            <div className="text-xs text-white font-medium">Certified Designer</div>
          </div>
        </div>
      </div>

      {/* Floating badge — bottom left */}
      <div
        className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-2.5 border border-white/10 shadow-xl"
        style={{ background: "rgba(19,19,26,0.9)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#8b5cf6", "#f472b6", "#06b6d4"].map((c, i) => (
              <div key={i} className="w-6 h-6 rounded-full ring-2 ring-[#0f0f18]" style={{ background: c }} />
            ))}
          </div>
          <div className="text-xs text-white/60">Open to work</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1f 50%, #0a0f1f 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-sm text-[#a78bfa] mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles size={13} className="text-[#8b5cf6]" />
              Available for opportunities
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Designing{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intuitive
              </span>
              <br />
              Experiences
              <br />
              For{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real People
              </span>
            </h1>

            <p className="text-lg text-[#94a3b8] max-w-lg mb-10 leading-relaxed">
              I&apos;m <span className="text-white font-medium">Aqsa Zainab</span>, a Junior UI/UX Designer
              crafting intuitive web and mobile interfaces with a strong focus on user-centered design,
              accessibility, and clean visual systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  boxShadow: "0 0 30px rgba(139,92,246,0.4)",
                }}
              >
                View My Work
                <ArrowDown size={15} className="-rotate-90" />
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#94a3b8] border border-white/10 hover:border-[#8b5cf6]/50 hover:text-white transition-all duration-200 text-sm"
              >
                <Play size={13} className="fill-current" />
                Let&apos;s Talk
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-[#64748b] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — mockup */}
          <div className="hidden lg:flex items-center justify-center pl-8">
            <DesignMockup />
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#475569] hover:text-[#8b5cf6] transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  );
}
