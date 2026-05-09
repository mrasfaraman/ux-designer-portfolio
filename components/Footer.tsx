"use client";

import { ArrowUp, Heart } from "lucide-react";

const links = {
  Navigation: ["About", "Work", "Process", "Testimonials", "Contact"],
  Services: ["UI Design", "UX Research", "Prototyping", "Design System", "UX Audit"],
  Connect: ["Twitter", "LinkedIn", "Dribbble", "Behance", "GitHub"],
};

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span
                className="font-semibold text-white text-lg"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Alex Morgan
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-xs">
              UI/UX Designer crafting human-centered digital experiences that
              drive real impact.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#475569]">Available for new projects</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-white text-sm font-semibold mb-5"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#475569] hover:text-[#94a3b8] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#334155] flex items-center gap-1.5">
            Crafted with{" "}
            <Heart size={11} className="text-[#f472b6] fill-[#f472b6]" /> by Alex Morgan
            {" "}&copy; {new Date().getFullYear()}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full glass border border-white/5 flex items-center justify-center text-[#475569] hover:text-white hover:border-[#8b5cf6]/40 transition-all duration-200"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
