"use client";
import { motion, fadeUpVar } from "./motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-5xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(230,160,46,0.2)] to-transparent" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <motion.div variants={fadeUpVar} className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#71717a] mb-3">About</span>
          <h2 className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-semibold tracking-[-0.02em] text-[#ededef] mb-3" style={{ fontWeight: 510 }}>We believe teachers should teach, not admin.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeUpVar}>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-4">
              Novyra was founded in 2025 by a team of educators and engineers who saw firsthand how much time teachers waste on administrative work.
            </p>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-4">
              In Indonesia alone, teachers spend an average of 14 hours per week on lesson planning. Novyra reduces that to minutes.
            </p>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-4">
              We&apos;re an Indonesia-based EdTech startup serving Southeast Asian institutions, backed by angel investors and education grants.
            </p>
            <p className="text-[13px] font-medium text-[#ededef] mt-6" style={{ fontWeight: 510 }}>
              Team: 6 engineers, 3 curriculum specialists, 2 former principals.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVar}>
            <div className="rounded-[5px] p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[#71717a] mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-medium text-[#ededef] mb-3" style={{ fontWeight: 510 }}>PT Novyra Edu Teknologi</h3>
              <div className="text-[13px] text-[#71717a] space-y-1.5 leading-relaxed">
                <p>Semarang, Central Java, Indonesia</p>
                <p>hello@novyra.my.id</p>
                <p>NIB: 15012400XXXXXX</p>
              </div>
              <div className="mt-6 pt-4 text-[12px] text-[#71717a]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                Partnered with 4 pilot schools. Pre-seed stage with active product development.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
