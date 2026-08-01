"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-10 px-6 lg:px-10 max-w-6xl mx-auto"
      style={{ borderColor: "var(--color-border)" }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold tracking-tight" style={{ fontWeight: 540, color: "var(--color-text)" }}>
            novyra<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
          <span className="text-[11px]" style={{ color: "var(--color-text-tertiary)" }}>&copy; 2026 PT Novyra Edu Teknologi</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" className="text-[12px] transition-colors duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ededef"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#71717a"; }}
            >
              {l}
            </a>
          ))}
          <span className="text-[12px]" style={{ color: "var(--color-text-tertiary)" }}>
            <span style={{ color: "var(--color-accent)" }}>✦</span> Built in Semarang
          </span>
        </div>
      </div>
    </footer>
  );
}
