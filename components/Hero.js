"use client";
import { motion } from "./motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
      {/* Grid + orbs background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="orb w-[500px] h-[500px] top-[-10%] left-[-5%] bg-[#E6A02E]/5 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="orb w-[400px] h-[400px] bottom-[-8%] right-[-5%] bg-[#E6A02E]/8 animate-[pulse_10s_ease-in-out_infinite_2s]" />
      <div className="orb w-[300px] h-[300px] top-[40%] right-[15%] bg-white/[0.03] animate-[pulse_12s_ease-in-out_infinite_4s]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-[11px] font-medium tracking-wide mb-10"
          style={{ background: "rgba(230,160,46,0.08)", color: "#E6A02E", border: "1px solid rgba(230,160,46,0.15)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02E]" />
          AI-POWERED CURRICULUM PLATFORM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(2rem,7vw,4.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] mb-5 text-[#ededef]"
          style={{ fontWeight: 510 }}
        >
          From curriculum to classroom,{" "}
          <span className="gradient-gold">automated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[16px] text-[#71717a] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Novyra generates complete lesson plans, assessments, and teaching materials aligned to your curriculum — in seconds, not hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] text-[14px] font-medium bg-[#E6A02E] text-black hover:brightness-110 transition-all"
          >
            Start Free Trial
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5.5 2.5 10 7l-4.5 4.5"/>
            </svg>
          </a>
          <a
            href="#product"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] text-[14px] font-medium transition-all"
            style={{ background: "rgba(255,255,255,0.04)", color: "#a1a1aa", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 flex flex-wrap justify-center gap-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { value: "14K+", label: "schools" },
            { value: "50K+", label: "teachers" },
            { value: "2M+", label: "lesson plans" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-[22px] font-semibold text-[#E6A02E]" style={{ fontWeight: 510 }}>{s.value}</div>
              <div className="text-[11px] text-[#71717a] mt-0.5 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
