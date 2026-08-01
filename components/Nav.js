"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 pointer-events-none">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-auto flex items-center justify-between w-full max-w-[420px] px-5 py-2.5 rounded-full"
          style={{
            background: "rgba(15,15,18,0.85)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
          }}
        >
          <a href="#" className="flex items-center gap-1.5 tracking-tight shrink-0">
            <span className="text-[15px] font-semibold" style={{ fontWeight: 540, color: "var(--color-text)" }}>
              novyra<span style={{ color: "var(--color-accent)" }}>.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
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
                {item.label}
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
              className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200"
              style={{ background: "var(--color-accent)", color: "#08080a" }}
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

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.04)", color: "var(--color-text-secondary)" }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 5h10M3 8h10M3 11h10"/>
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(8,8,10,0.92)", backdropFilter: "blur(20px)" }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center h-full gap-2 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  className="text-[22px] font-medium py-2"
                  style={{ fontWeight: 510, color: "var(--color-text-secondary)" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col items-center gap-3">
                <a
                  href="/login"
                  onClick={close}
                  className="text-[15px] font-medium py-2 px-6 rounded-full transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}
                >
                  Sign In
                </a>
                <a
                  href="/signup"
                  onClick={close}
                  className="text-[15px] font-medium py-2 px-6 rounded-full"
                  style={{ background: "var(--color-accent)", color: "#08080a", fontWeight: 510 }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
