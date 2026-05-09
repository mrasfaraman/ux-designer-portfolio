"use client";

const tools = [
  "Figma", "Adobe XD", "Protopie", "Principle", "Framer", "Maze",
  "Hotjar", "Miro", "Notion", "Zeplin", "InVision", "Sketch",
  "Photoshop", "Illustrator", "After Effects",
];

export default function Marquee() {
  const items = [...tools, ...tools];

  return (
    <div
      className="py-5 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0a0a0f 0%, #0f0a1f 50%, #0a0a0f 100%)",
        borderTop: "1px solid rgba(139,92,246,0.15)",
        borderBottom: "1px solid rgba(139,92,246,0.15)",
      }}
    >
      <div className="flex gap-12 whitespace-nowrap w-max animate-marquee">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm font-medium cursor-default"
            style={{ color: "#475569" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#06b6d4" : "#f472b6" }}
            />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
