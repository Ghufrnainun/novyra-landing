"use client";
import { motion } from "./motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 h-14 flex items-center justify-between"
      style={{ background: "rgba(10,10,11,0.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <a href="#" className="flex items-center gap-2 tracking-tight">
        <span className="text-base font-semibold text-[#ededef]">novyra<span className="text-[#E6A02E]">.</span></span>
      </a>

      <div className="hidden md:flex items-center gap-7">
        {["Features", "Product", "Pricing", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] font-medium text-[#71717a] hover:text-[#a1a1aa] transition-colors duration-200"
          >
            {item}
          </a>
        ))}
        <a
          href="/login"
          className="text-[13px] font-medium text-[#a1a1aa] hover:text-[#ededef] transition-colors duration-200"
        >
          Sign In
        </a>
        <a
          href="/signup"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[5px] text-[13px] font-medium bg-[#E6A02E] text-black"
        >
          Get Started
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 2.5 8 6 4.5 9.5"/>
          </svg>
        </a>
      </div>

      <button className="md:hidden text-[#71717a] p-1.5">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 5h12M3 9h12M3 13h12"/>
        </svg>
      </button>
    </motion.nav>
  );
}
