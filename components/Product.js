"use client";
import { motion, fadeUpVar } from "./motion";

export default function Product() {
  return (
    <section id="product" className="relative py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      {/* Asymmetric: text right, terminal left */}
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
        {/* Left — copy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase text-[#E6A02E] mb-4">/ product</motion.span>
          <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-[#ededef] leading-[1.1] mb-5" style={{ fontWeight: 520 }}>
            From topic to<br />ready-to-teach<br />in <span className="gradient-gold">2.4 seconds.</span>
          </motion.h2>
          <motion.p variants={fadeUpVar} className="text-[15px] text-[#a1a1aa] leading-[1.6] mb-6">
            Type a topic. Pick a grade. Novyra handles the rest — generating a complete lesson plan with assessments, activities, and curriculum alignment.
          </motion.p>
          <motion.div variants={fadeUpVar} className="space-y-3">
            {[
              { step: "01", title: "Enter topic & grade", desc: "Any subject, any grade level" },
              { step: "02", title: "AI generates RPP + ATP", desc: "Full alignment to curriculum" },
              { step: "03", title: "Export & teach", desc: "PDF, Docs, or LMS share" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <span className="font-mono text-[12px] text-[#E6A02E] mt-0.5">{s.step}</span>
                <div>
                  <div className="text-[14px] font-medium text-[#ededef]" style={{ fontWeight: 510 }}>{s.title}</div>
                  <div className="text-[12px] text-[#71717a]">{s.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(15,15,18,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div className="flex items-center gap-1.5 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 text-[11px] font-mono text-[#52525b]">app.novyra.my.id — planner</span>
            </div>

            <div className="p-6 sm:p-8 font-mono text-[13px] leading-[1.8] text-[#52525b]">
              <div className="text-[#E6A02E]">$ novyra generate --topic "perubahan iklim"</div>
              <div className="mt-3 space-y-0.5">
                <div><span className="text-[#60A5FA]">topic</span>     <span className="text-[#d4d4d8]">Perubahan Iklim</span></div>
                <div><span className="text-[#60A5FA]">grade</span>     <span className="text-[#d4d4d8]">Kelas 7 — IPA</span></div>
                <div><span className="text-[#60A5FA]">curriculum</span> <span className="text-[#d4d4d8]">Merdeka Fase D</span></div>
                <div><span className="text-[#60A5FA]">duration</span>   <span className="text-[#d4d4d8]">2 JP x 40 min</span></div>
              </div>
              <div className="mt-5 text-[#71717a] animate-pulse">  Generating...</div>
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center gap-2"><span className="text-[#4ADE80]">✓</span> <span className="text-[#E6A02E]">RPP</span> <span className="text-[#a1a1aa]">perubahan-iklim-k7.pdf</span></div>
                <div className="flex items-center gap-2"><span className="text-[#4ADE80]">✓</span> <span className="text-[#a1a1aa]">ATP alignment: CP → TP → ATP → Modul</span></div>
                <div className="flex items-center gap-2"><span className="text-[#4ADE80]">✓</span> <span className="text-[#a1a1aa]">3 formative assessments generated</span></div>
                <div className="flex items-center gap-2"><span className="text-[#4ADE80]">✓</span> <span className="text-[#a1a1aa]">2 differentiation strategies</span></div>
              </div>
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[#E6A02E]">$</span> <span className="text-[#d4d4d8]">Done in 2.4s — ready to teach.</span>
              </div>
            </div>
          </div>

          {/* Floating speed badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute -top-3 -right-3 animate-float"
          >
            <div className="px-3 py-2 rounded-xl text-[11px] font-mono" style={{ background: "rgba(230,160,46,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(230,160,46,0.2)" }}>
              <span className="text-[#E6A02E]">2.4s</span> <span className="text-[#71717a]">avg generation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
