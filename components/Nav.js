"use client";
import { motion, fadeUp, stagger } from "./motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 h-16 flex items-center justify-between"
      style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <a href="#" className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight">novyra<span className="text-[#E6A02E]">.</span></span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {["Features", "Product", "Pricing", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-[#a0a4ab] hover:text-[#f7f8f8] transition-colors duration-200 font-medium"
          >
            {item}
          </a>
        ))}
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[#E6A02E] text-[#0A0A0A] hover:bg-[#f0ab3c] transition-all duration-200 hover:scale-[1.02]"
        >
          Get Started
        </a>
      </div>

      <button className="md:hidden text-[#a0a4ab] p-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </motion.nav>
  );
}
