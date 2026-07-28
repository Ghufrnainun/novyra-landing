"use client";
import { motion, fadeUpVar } from "./motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      {/* Asymmetric grid */}
      <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-20 items-start">
        {/* Left — story */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase text-[#E6A02E] mb-4">/ about</motion.span>
          <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-[#ededef] leading-[1.1] mb-6" style={{ fontWeight: 520 }}>
            We believe teachers<br />should teach, not admin.
          </motion.h2>
          <motion.div variants={fadeUpVar} className="space-y-4 text-[15px] text-[#a1a1aa] leading-[1.7]">
            <p>
              Novyra was founded in 2025 by a team of educators and engineers who saw firsthand how much time teachers waste on administrative work.
            </p>
            <p>
              In Indonesia alone, teachers spend an average of <span className="text-[#ededef] font-medium">14 hours per week</span> on lesson planning. Novyra reduces that to minutes.
            </p>
            <p>
              We&apos;re an Indonesia-based EdTech startup serving Southeast Asian institutions, backed by angel investors and education grants.
            </p>
          </motion.div>
          <motion.div variants={fadeUpVar} className="flex flex-wrap gap-6 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div className="text-[20px] font-semibold text-[#ededef]" style={{ fontWeight: 520 }}>6</div>
              <div className="text-[11px] text-[#52525b] mt-0.5">engineers</div>
            </div>
            <div>
              <div className="text-[20px] font-semibold text-[#ededef]" style={{ fontWeight: 520 }}>3</div>
              <div className="text-[11px] text-[#52525b] mt-0.5">curriculum specialists</div>
            </div>
            <div>
              <div className="text-[20px] font-semibold text-[#ededef]" style={{ fontWeight: 520 }}>2</div>
              <div className="text-[11px] text-[#52525b] mt-0.5">former principals</div>
            </div>
            <div>
              <div className="text-[20px] font-semibold text-[#ededef]" style={{ fontWeight: 520 }}>4</div>
              <div className="text-[11px] text-[#52525b] mt-0.5">pilot schools</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — company card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-24"
        >
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(230,160,46,0.08)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E6A02E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#ededef]" style={{ fontWeight: 510 }}>PT Novyra Edu Teknologi</h3>
                <div className="text-[12px] text-[#52525b]">Semarang, Indonesia</div>
              </div>
            </div>

            <div className="space-y-2.5 text-[13px]">
              <div className="flex items-center gap-2.5 text-[#a1a1aa]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="10" height="8" rx="1" /><path d="M2 6l5 3 5-3" /></svg>
                hello@novyra.my.id
              </div>
              <div className="flex items-center gap-2.5 text-[#a1a1aa]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round"><path d="M7 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.5 4.5 6.5 4.5 6.5s4.5-3 4.5-6.5c0-2.5-2-4.5-4.5-4.5z" /><circle cx="7" cy="6" r="1.5" /></svg>
                Semarang, Central Java
              </div>
              <div className="flex items-center gap-2.5 text-[#a1a1aa]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round"><path d="M2 7l5 5 5-5M7 12V2" /></svg>
                NIB: 15012400XXXXXX
              </div>
            </div>

            <div className="mt-6 pt-5 text-[12px] text-[#52525b] leading-relaxed" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              Pre-seed stage. Active product development with 4 pilot schools across Central Java.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
