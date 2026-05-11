"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Usman Tariq",
    role: "Lead Instructor, Future Tech Institute",
    initials: "UT",
    color: "#8b5cf6",
    quote:
      "Aqsa stood out during her training for one reason — she actually thinks about the user before touching Figma. Her wireframes were always well-reasoned, and she picked up design systems faster than most trainees I've worked with. She has a strong foundation to build on.",
    rating: 5,
    project: "UI/UX Training Programme",
  },
  {
    name: "Bilal Raza",
    role: "Frontend Developer · Remote Collaborator",
    initials: "BR",
    color: "#06b6d4",
    quote:
      "I worked with Aqsa on a small client project remotely. Her handoff files in Figma were clean and properly organised — no back-and-forth needed. She communicated clearly, responded quickly, and was open to adjusting designs when there were technical constraints. Made my job a lot easier.",
    rating: 5,
    project: "Freelance Web Project",
  },
  {
    name: "Sana Malik",
    role: "Small Business Owner · Client",
    initials: "SM",
    color: "#f472b6",
    quote:
      "I asked Aqsa to redesign my bakery's online menu and order page. She asked good questions first — about my customers, how they order, what confuses them — before designing anything. The final design was clean and my customers actually find it easier to use. Very happy with the result.",
    rating: 5,
    project: "Small Business Website",
  },
];

const clients = ["Future Tech", "Bloomfield Hall", "Figma", "FigJam", "Maze", "Miro", "Notion"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">Testimonials</span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What People{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Say
            </span>
          </h2>
          <p className="text-[#64748b]">
            Feedback from people I&apos;ve learned from, collaborated with, and designed for.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col relative group"
              style={{ background: "rgba(19,19,26,0.9)" }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Project tag */}
              <div
                className="text-xs rounded-full px-3 py-1 inline-block mb-6 w-fit"
                style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}25` }}
              >
                {t.project}
              </div>

              {/* Author — initials avatar instead of photo */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}cc, ${t.color}66)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#64748b]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools / associations strip */}
        <div className="text-center">
          <p className="text-xs font-bold text-[#2d3748] tracking-[0.25em] uppercase mb-8">
            Tools & Platforms I Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((c) => (
              <span
                key={c}
                className="text-[#2d3748] font-bold text-lg hover:text-[#475569] transition-colors cursor-default"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
