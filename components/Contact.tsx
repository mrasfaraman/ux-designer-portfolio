"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Calendar } from "lucide-react";

const socials = [
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
    label: "Email",
    href: "mailto:zainabaqsa6@gmail.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const contactInfo = [
  { Icon: Mail, label: "Email", value: "zainabaqsa6@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Rawalpindi, Islamabad" },
  { Icon: Calendar, label: "Availability", value: "Open for opportunities" },
];

// Get your free access key at web3forms.com — enter zainabaqsa6@gmail.com and paste the key below
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${form.name} — Aqsa Zainab Portfolio`,
          from_name: form.name,
          email: form.email,
          project_type: form.project || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email me directly at zainabaqsa6@gmail.com");
    } finally {
      setLoading(false);
    }
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

                {error && (
                  <p className="text-xs text-red-400 text-center mt-3">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
