"use client";
import { motion, fadeUp } from "./motion";

export default function Product() {
  return (
    <section id="product" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#E6A02E] mb-3">
          ✦ Product
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          See Novyra in action.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#a0a4ab] max-w-lg mx-auto">
          Generating a complete lesson plan in under 30 seconds. No prompting expertise required.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#111" }}
      >
        {/* Mockup browser bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-4 text-xs font-mono text-[#6b6f76]">app.novyra.my.id/planner/new</span>
        </div>

        {/* Terminal-like content */}
        <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed">
          <div><span className="text-[#E6A02E]">$</span> novyra generate</div>
          <div className="mt-1">
            <span className="text-[#60A5FA]">≫</span> Topic: <span className="text-[#f7f8f8]">Perubahan Iklim (Climate Change)</span> — IPA Kelas 7
          </div>
          <div>
            <span className="text-[#60A5FA]">≫</span> Curriculum: <span className="text-[#f7f8f8]">Kurikulum Merdeka Fase D</span>
          </div>
          <div>
            <span className="text-[#60A5FA]">≫</span> Duration: <span className="text-[#f7f8f8]">2 JP x 40 menit</span>
          </div>
          <div className="mt-4 text-[#6b6f76]">⠋ Generating... (2.4s)</div>
          <div className="mt-3 space-y-1">
            <div><span className="text-[#4ADE80]">✓</span> <span className="text-[#E6A02E]">RPP generated:</span> perubahan-iklim-k7-s1.pdf</div>
            <div><span className="text-[#4ADE80]">✓</span> ATP alignment: CP → TP → ATP → Modul</div>
            <div><span className="text-[#4ADE80]">✓</span> 3 formative assessments auto-generated</div>
            <div><span className="text-[#4ADE80]">✓</span> 2 differentiation strategies (remedial + enrichment)</div>
          </div>
          <div className="mt-4 text-[#6b6f76]"># Download, edit, or share via Google Classroom</div>
          <div className="mt-1"><span className="text-[#E6A02E]">$</span> <span className="text-[#f7f8f8]">Ready to teach.</span></div>
        </div>
      </motion.div>
    </section>
  );
}
