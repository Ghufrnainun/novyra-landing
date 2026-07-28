"use client";
import { motion, fadeUp } from "./motion";

const stats = [
  { value: "14K+", label: "Schools served" },
  { value: "50K+", label: "Teachers onboarded" },
  { value: "2M+", label: "Lesson plans generated" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Background grid */}
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #E6A02E 0%, transparent 70%)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ background: "rgba(230,160,46,0.1)", color: "#E6A02E", border: "1px solid rgba(230,160,46,0.2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02E]" />
          AI-POWERED CURRICULUM PLATFORM
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          From curriculum <br />
          to classroom,{" "}
          <span className="gradient-gold">automated.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-[#a0a4ab] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Novyra generates complete lesson plans, assessments, and teaching materials
          aligned to your curriculum — in seconds, not hours.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold bg-[#E6A02E] text-[#0A0A0A] hover:bg-[#f0ab3c] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#E6A02E]/20"
          >
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#product"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium text-[#a0a4ab] hover:text-[#f7f8f8] transition-all duration-200 glass glass-hover"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E6A02E]">{s.value}</div>
              <div className="text-xs text-[#6b6f76] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
