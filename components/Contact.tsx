"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Calendar } from "lucide-react";

const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/aqsazainab",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aqsa-zainab-525070236",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.974 5.863a10.13 10.13 0 0 1 2.313 6.312c-.339-.066-3.73-.757-7.146-.328-.078-.18-.15-.366-.228-.551-.211-.499-.438-1-.672-1.487 3.793-1.547 5.522-3.774 5.733-3.946zM12 1.999c2.625 0 5.027.986 6.833 2.598-.173.148-1.742 2.239-5.407 3.606C11.641 5.419 9.848 3.23 9.576 2.85A10.116 10.116 0 0 1 12 1.999zM7.437 3.57c.26.348 2.032 2.549 3.83 6.218-4.827 1.283-9.091 1.261-9.54 1.253A10.128 10.128 0 0 1 7.437 3.57zM1.977 12.01v-.262c.436.009 5.409.075 10.554-1.464.296.576.579 1.163.84 1.757-.133.038-.267.077-.398.12-5.323 1.72-8.148 6.42-8.374 6.812A10.09 10.09 0 0 1 1.977 12.01zm10.023 10.02c-2.385 0-4.581-.82-6.317-2.185.185-.379 2.292-4.41 8.118-6.46.023-.009.047-.019.069-.027a51.84 51.84 0 0 1 2.654 9.395 10.108 10.108 0 0 1-4.524 1.277zm6.41-1.765a53.716 53.716 0 0 0-2.532-8.932c3.235-.517 6.07.331 6.423.44a10.162 10.162 0 0 1-3.891 8.492z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const contactInfo = [
  { Icon: Mail, label: "Email", value: "zainabaqsa6@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Rawalpindi, Islamabad" },
  { Icon: Calendar, label: "Availability", value: "Open for opportunities" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "#0d0d16" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8b5cf6]">
            Get In Touch
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#8b5cf6] to-transparent" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s Create{" "}
            <span className="gradient-text">Something</span>
            <br />
            Amazing Together
          </h2>
          <p className="text-[#64748b]">
            Have a project, a role, or just want to say hi? I&apos;d love to connect.
            Let&apos;s create something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center group-hover:border-[#8b5cf6]/30 transition-colors">
                    <Icon size={16} className="text-[#8b5cf6]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#475569] mb-0.5">{label}</div>
                    <div className="text-sm text-[#94a3b8]">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-[#8b5cf6]/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Available Now</span>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed">
                I&apos;m actively looking for junior UI/UX roles and freelance projects.
                I respond within 24 hours — let&apos;s connect!
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-[#475569] tracking-widest uppercase mb-4">
                Find Me On
              </p>
              <div className="flex gap-3">
                {socials.map(({ svg, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-[#64748b] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 transition-all duration-200"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-3xl p-12 border border-[#34d399]/20 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#34d399]/20 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-[#34d399]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                  Message Sent!
                </h3>
                <p className="text-[#64748b] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 md:p-10 border border-white/5 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-[#64748b] block mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] outline-none focus:border-[#8b5cf6]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#64748b] block mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] outline-none focus:border-[#8b5cf6]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#64748b] block mb-2">Project Type</label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full bg-[#0d0d14] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#94a3b8] outline-none focus:border-[#8b5cf6]/60 transition-colors"
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="mobile">Mobile App Design</option>
                    <option value="web">Web Application</option>
                    <option value="design-system">Design System</option>
                    <option value="ux-audit">UX Audit</option>
                    <option value="branding">Brand & Identity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#64748b] block mb-2">Tell Me About Your Project</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, and timeline..."
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] outline-none focus:border-[#8b5cf6]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
