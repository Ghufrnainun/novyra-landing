"use client";
import { motion } from "./motion";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-auto flex items-center gap-8 px-5 py-2.5 rounded-full"
        style={{
          background: "rgba(15,15,18,0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
        }}
      >
        <a href="#" className="flex items-center gap-1.5 tracking-tight">
          <span className="text-[15px] font-semibold text-[var(--color-text)]" style={{ fontWeight: 540 }}>
            novyra<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["Product", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ededef";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#71717a";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="hidden sm:inline-flex text-[13px] font-medium px-3 py-1.5 rounded-full transition-colors duration-200"
            style={{ color: "var(--color-text-secondary)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#ededef"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#a1a1aa"; }}
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200"
            style={{
              background: "var(--color-accent)",
              color: "#08080a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.08)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(230,160,46,0.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Get Started
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 2.5 8 6 4.5 9.5"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
