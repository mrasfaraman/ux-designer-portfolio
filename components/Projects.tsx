"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "FinFlow – Banking Redesign",
    category: "Fintech · Mobile App",
    description:
      "Complete UX overhaul of a legacy banking app serving 2M+ users. Reduced onboarding drop-off by 60% and increased DAU by 35% through research-backed design decisions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    tags: ["UX Research", "Mobile", "Design System"],
    color: "#8b5cf6",
    metrics: [
      { label: "Drop-off Reduced", value: "60%" },
      { label: "DAU Increase", value: "35%" },
    ],
  },
  {
    id: "02",
    title: "Novu – SaaS Dashboard",
    category: "SaaS · Web Application",
    description:
      "End-to-end design of a complex data analytics dashboard for enterprise clients. Built a scalable design system with 200+ components used across 5 product teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["Design System", "Dashboard", "Enterprise"],
    color: "#06b6d4",
    metrics: [
      { label: "Components Built", value: "200+" },
      { label: "Teams Using System", value: "5" },
    ],
  },
  {
    id: "03",
    title: "Shopwise – E-commerce App",
    category: "E-commerce · iOS & Android",
    description:
      "Reimagined the shopping experience for a fashion brand's mobile app. A/B tested 12 checkout variations resulting in a 48% conversion rate improvement.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    tags: ["E-commerce", "Conversion", "Mobile"],
    color: "#f472b6",
    metrics: [
      { label: "Conversion Boost", value: "48%" },
      { label: "Checkout Variants", value: "12" },
    ],
  },
  {
    id: "04",
    title: "Horizon – Travel Platform",
    category: "Travel · Web & Mobile",
    description:
      "Designed an AI-powered travel planning platform from 0→1. Led user research across 4 countries and created an inclusive design accessible to all ability levels.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    tags: ["0→1 Design", "AI Product", "Accessibility"],
    color: "#34d399",
    metrics: [
      { label: "Accessibility Score", value: "AAA" },
      { label: "Countries Researched", value: "4" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[600px] opacity-6 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">
            Case Studies
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Selected{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Work
            </span>
          </h2>
          <p className="text-[#64748b] max-w-xs text-sm">
            Real problems, real outcomes — every project tells a story.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="group rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
              style={{ background: "rgba(19,19,26,0.9)" }}
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div
                  className={`relative h-64 md:h-80 overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Color tint */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${p.color}20 0%, transparent 60%)` }}
                  />
                  {/* Project number */}
                  <div
                    className="absolute top-6 right-6 text-5xl font-bold text-white/10"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                      style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                    >
                      {p.category}
                    </div>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-[#94a3b8] leading-relaxed mb-6 text-sm">
                    {p.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-8 mb-7">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="text-2xl font-bold"
                          style={{ color: p.color, fontFamily: "var(--font-syne)" }}
                        >
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#475569]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          border: `1px solid ${p.color}30`,
                          color: p.color,
                          background: `${p.color}10`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group/btn w-fit"
                    style={{ color: p.color }}
                  >
                    View Case Study
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
