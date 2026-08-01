"use client";
import { motion, fadeUpVar } from "./motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--color-accent)" }}>
            About
          </motion.span>
          <motion.h2 variants={fadeUpVar} className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em] leading-[1.12] mb-6"
            style={{ fontWeight: 520, color: "var(--color-text)" }}>
            Teachers should teach.<br />Not do admin.
          </motion.h2>
          <motion.div variants={fadeUpVar} className="space-y-4 text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>
            <p>
              Novyra was founded in 2025 by educators and engineers who saw firsthand how much time teachers lose to lesson planning, assessment prep, and curriculum alignment.
            </p>
            <p>
              In Indonesia alone, teachers spend an average of{" "}
              <span style={{ color: "var(--color-text)", fontWeight: 510 }}>14 hours per week</span>{" "}
              on administrative planning tasks. Novyra reduces that to minutes.
            </p>
            <p>
              Based in Semarang, Indonesia. Serving Southeast Asian institutions with curriculum-aligned AI tooling.
            </p>
          </motion.div>
        </motion.div>

        {/* Right — company context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-32"
        >
          <div className="rounded-2xl p-7" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--color-border)",
            backdropFilter: "blur(12px)",
          }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-accent-dim)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-medium" style={{ fontWeight: 510, color: "var(--color-text)" }}>PT Novyra Edu Teknologi</div>
                <div className="text-[12px]" style={{ color: "var(--color-text-tertiary)" }}>Semarang, Indonesia</div>
              </div>
            </div>

            <div className="space-y-2.5 text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
              <div className="flex items-center gap-2.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="10" height="8" rx="1"/><path d="M2 6l5 3 5-3"/></svg>
                hello@novyra.my.id
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" strokeLinecap="round"><path d="M7 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.5 4.5 6.5 4.5 6.5s4.5-3 4.5-6.5c0-2.5-2-4.5-4.5-4.5z"/><circle cx="7" cy="6" r="1.5"/></svg>
                Semarang, Central Java
              </div>
            </div>

            <div className="mt-6 pt-5 text-[12px] leading-relaxed" style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-tertiary)" }}>
              Pre-seed stage. Pilot program running with schools across Central Java.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
