"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, FinFlow Technologies",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&facepad=3",
    quote:
      "Alex completely transformed our product. The redesign wasn't just beautiful — it reduced our support tickets by 40% because the interface became so intuitive. I've never worked with a designer who understood both users and business so deeply.",
    rating: 5,
    project: "FinFlow Banking App",
    color: "#8b5cf6",
  },
  {
    name: "Marcus Williams",
    role: "Head of Product, Novu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&facepad=3",
    quote:
      "The design system Alex built saved months of engineering time and brought visual consistency we'd never had before. She pushed back on bad ideas with data, and delivered with incredible attention to detail. A true design partner.",
    rating: 5,
    project: "Novu Design System",
    color: "#06b6d4",
  },
  {
    name: "Priya Patel",
    role: "Founder, Horizon Travel",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&facepad=3",
    quote:
      "Working with Alex on a 0→1 product was exceptional. She led research across 4 countries, synthesized complex findings, and designed an experience our users love. Our app store rating went from 3.1 to 4.8 after launch.",
    rating: 5,
    project: "Horizon Travel Platform",
    color: "#f472b6",
  },
];

const clients = ["Stripe", "Notion", "Airbnb", "Spotify", "Figma", "Vercel", "Linear", "Loom"];

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
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">
            Testimonials
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What Clients{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Say
            </span>
          </h2>
          <p className="text-[#64748b]">
            Don&apos;t take my word for it — here&apos;s what the people I&apos;ve worked with have to say.
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
              {/* Top accent */}
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

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden" style={{ outline: `2px solid ${t.color}50`, outlineOffset: "2px" }}>
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#64748b]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="text-center">
          <p className="text-xs font-bold text-[#2d3748] tracking-[0.25em] uppercase mb-10">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map((c) => (
              <span
                key={c}
                className="text-[#2d3748] font-bold text-xl hover:text-[#475569] transition-colors cursor-default"
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
