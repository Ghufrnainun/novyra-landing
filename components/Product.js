"use client";
import { motion, fadeUpVar } from "./motion";

export default function Product() {
  return (
    <section id="product" className="relative py-28 px-6 max-w-5xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(230,160,46,0.2)] to-transparent" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#71717a] mb-3">Product</motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-semibold tracking-[-0.02em] text-[#ededef] mb-3" style={{ fontWeight: 510 }}>See Novyra in action.</motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] text-[#71717a] max-w-md mx-auto">Generating a complete lesson plan in under 30 seconds.</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-[5px] overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#111113" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: "#151517", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-[11px] font-mono text-[#71717a]">app.novyra.my.id/planner</span>
        </div>

        <div className="p-6 sm:p-8 font-mono text-[13px] leading-relaxed text-[#71717a]">
          <div><span className="text-[#E6A02E]">$</span> novyra generate</div>
          <div className="mt-2"><span className="text-[#60A5FA]">&gt;</span> Topic: <span className="text-[#d4d4d8]">Perubahan Iklim</span> — IPA Kelas 7</div>
          <div><span className="text-[#60A5FA]">&gt;</span> Curriculum: <span className="text-[#d4d4d8]">Kurikulum Merdeka Fase D</span></div>
          <div><span className="text-[#60A5FA]">&gt;</span> Duration: <span className="text-[#d4d4d8]">2 JP x 40 min</span></div>
          <div className="mt-4 text-[#71717a] animate-pulse">⠋ Generating...</div>
          <div className="mt-3 space-y-1.5">
            <div><span className="text-[#4ADE80]">✓</span> <span className="text-[#E6A02E]">RPP:</span> perubahan-iklim-k7.pdf</div>
            <div><span className="text-[#4ADE80]">✓</span> ATP alignment: CP &rarr; TP &rarr; ATP &rarr; Modul</div>
            <div><span className="text-[#4ADE80]">✓</span> 3 formative assessments</div>
            <div><span className="text-[#4ADE80]">✓</span> 2 differentiation strategies</div>
          </div>
          <div className="mt-4 text-[#71717a]"># Ready to teach.</div>
          <div className="mt-1"><span className="text-[#E6A02E]">$</span> <span className="text-[#d4d4d8]">Done in 2.4s.</span></div>
        </div>
      </motion.div>
    </section>
  );
}
