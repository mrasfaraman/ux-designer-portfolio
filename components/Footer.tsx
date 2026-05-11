"use client";

import { ArrowUp, Heart } from "lucide-react";

const links = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "UI Design", href: "#" },
    { label: "UX Research", href: "#" },
    { label: "Wireframing", href: "#" },
    { label: "Prototyping", href: "#" },
    { label: "Design Systems", href: "#" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aqsa-zainab-525070236" },
    { label: "Email", href: "mailto:zainabaqsa6@gmail.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#070709", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
              >
                A
              </div>
              <span className="font-semibold text-white text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                Aqsa Zainab
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-xs">
              Junior UI/UX Designer crafting intuitive, human-centered interfaces
              for web and mobile.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#475569]">Open to work — Rawalpindi, Pakistan</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-5" style={{ fontFamily: "var(--font-syne)" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#475569] hover:text-[#94a3b8] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-[#334155] flex items-center gap-1.5">
            Crafted with <Heart size={11} className="text-[#f472b6] fill-[#f472b6]" /> by Aqsa Zainab
            {" "}&copy; {new Date().getFullYear()}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-[#475569] hover:text-white hover:border-[#8b5cf6]/40 transition-all duration-200"
            style={{ background: "rgba(19,19,26,0.85)" }}
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
