"use client";

import Image from "next/image";
import { ArrowUpRight, Smartphone, Globe, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "EatEasy – Food Delivery App",
    category: "Mobile App · UX/UI Design",
    type: "Concept Project",
    description:
      "Designed a complete food delivery experience for a local restaurant app targeting Pakistani users. Focused on simplifying the ordering flow, reducing steps to checkout, and making the interface accessible to first-time smartphone users.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    tags: ["Figma", "User Flows", "Prototyping", "Mobile UI"],
    color: "#f472b6",
    icon: Smartphone,
    metrics: [
      { label: "Screens Designed", value: "24" },
      { label: "Checkout Steps", value: "3" },
    ],
    what: "Wireframes, high-fi UI, clickable Figma prototype, user flow diagrams",
    tools: "Figma · FigJam · Maze",
  },
  {
    id: "02",
    title: "MediCare – Healthcare Booking",
    category: "Mobile App · Accessibility Design",
    type: "Concept Project",
    description:
      "Redesigned a doctor appointment booking app with a strong focus on accessibility and older users. Applied WCAG guidelines, high-contrast color systems, and large tap targets to ensure usability for all age groups.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop",
    tags: ["Accessibility", "Figma", "Design System", "Mobile UI"],
    color: "#34d399",
    icon: Heart,
    metrics: [
      { label: "Accessibility Score", value: "AA+" },
      { label: "Components Built", value: "30+" },
    ],
    what: "Persona research, wireframes, design system, hi-fi prototype",
    tools: "Figma · Stark · FigJam",
  },
  {
    id: "03",
    title: "LearnHub – E-Learning Platform",
    category: "Web Design · Responsive UI",
    type: "Training Project — Future Tech Institute",
    description:
      "Designed a responsive e-learning web platform for students and instructors. Created the complete information architecture, dashboard layouts, and a reusable component library following modern UI design trends.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    tags: ["Web Design", "Responsive", "Component Library", "IA"],
    color: "#8b5cf6",
    icon: Globe,
    metrics: [
      { label: "Pages Designed", value: "12" },
      { label: "Reusable Components", value: "40+" },
    ],
    what: "IA mapping, responsive wireframes, UI design, component library",
    tools: "Figma · Notion · FigJam",
  },
  {
    id: "04",
    title: "ShopLocal – E-Commerce App",
    category: "Mobile App · E-Commerce UI",
    type: "Concept Project",
    description:
      "Crafted a mobile shopping app UI tailored for local small businesses in Pakistan. Designed a clean product browsing experience, intuitive cart flow, and a simple seller dashboard to help vendors manage listings easily.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
    tags: ["E-Commerce", "Mobile UI", "Figma", "User Flow"],
    color: "#06b6d4",
    icon: ShoppingBag,
    metrics: [
      { label: "User Screens", value: "20+" },
      { label: "Seller Screens", value: "10+" },
    ],
    what: "User journey maps, wireframes, hi-fi UI, Figma prototype",
    tools: "Figma · Miro · FigJam",
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10 max-h-[90vh] overflow-y-auto"
        style={{ background: "#13131a" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="768px"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${project.color}20, rgba(19,19,26,0.9))` }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white border border-white/20 hover:border-white/40 transition-colors"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            ✕
          </button>
          {/* Type badge */}
          <div
            className="absolute bottom-4 left-6 text-[10px] font-bold px-3 py-1 rounded-full"
            style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
          >
            {project.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-xs text-[#64748b] mb-1">{project.category}</div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                {project.title}
              </h3>
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
            >
              <project.icon size={20} style={{ color: project.color }} />
            </div>
          </div>

          <p className="text-[#94a3b8] leading-relaxed mb-8">{project.description}</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {/* Metrics */}
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-4 border border-white/5 text-center"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: project.color, fontFamily: "var(--font-syne)" }}>
                  {m.value}
                </div>
                <div className="text-xs text-[#64748b]">{m.label}</div>
              </div>
            ))}
            <div
              className="rounded-2xl p-4 border border-white/5 text-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="text-lg font-bold mb-1 text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Figma
              </div>
              <div className="text-xs text-[#64748b]">Primary Tool</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="rounded-2xl p-5 border border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="text-xs font-bold text-[#475569] uppercase tracking-widest mb-2">Deliverables</div>
              <div className="text-sm text-[#94a3b8]">{project.what}</div>
            </div>
            <div className="rounded-2xl p-5 border border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="text-xs font-bold text-[#475569] uppercase tracking-widest mb-2">Tools Used</div>
              <div className="text-sm text-[#94a3b8]">{project.tools}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                  background: `${project.color}10`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <div
        className="absolute top-1/3 right-0 w-[400px] h-[600px] opacity-6 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8b5cf6]">Case Studies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Selected{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work
            </span>
          </h2>
          <p className="text-[#64748b] max-w-xs text-sm">
            Concept & training projects built with Figma — click any to view the full case study.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="group rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
              style={{ background: "rgba(19,19,26,0.9)" }}
              onClick={() => setActiveProject(p)}
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative h-64 md:h-80 overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${p.color}20 0%, transparent 60%)` }}
                  />
                  {/* Type badge */}
                  <div
                    className="absolute bottom-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.6)", color: p.color, border: `1px solid ${p.color}40`, backdropFilter: "blur(8px)" }}
                  >
                    {p.type}
                  </div>
                  <div
                    className="absolute top-4 right-4 text-5xl font-bold text-white/10"
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

                  <p className="text-[#94a3b8] leading-relaxed mb-6 text-sm">{p.description}</p>

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
