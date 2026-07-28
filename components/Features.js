"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const icons = {
  Curricula: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20 M9 9.5h6 M9 12.5h6 M9 6h6",
  Sparkles: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  Clipboard: "M10 15h4 M10 11h4 M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M9 3h6v4H9z",
  Export: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  Layout: "M3 9h18 M9 21V9 M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
  Shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  Chart: "M3 3v18h18 M7 16l4-6 3 4 5-8",
  Lock: "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4",
};

const Icon = ({ name, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={icons[name] || ""} />
  </svg>
);

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      {/* Section header — left-aligned, not centered */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14 max-w-xl">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase text-[#E6A02E] mb-4">
          / features
        </motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-[#ededef] leading-[1.1]" style={{ fontWeight: 520 }}>
          Built for educators,<br />powered by AI.
        </motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] text-[#71717a] mt-4 leading-relaxed">
          Novyra eliminates administrative overhead so teachers can focus on what matters — teaching.
        </motion.p>
      </motion.div>

      {/* Bento grid — asymmetric sizes */}
      <motion.div variants={staggerVar} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Large card — spans 2 cols on lg */}
        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-7 lg:col-span-2 lg:row-span-1">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[#E6A02E]" style={{ background: "rgba(230,160,46,0.08)" }}>
              <Icon name="Sparkles" />
            </div>
            <div>
              <h3 className="text-[17px] font-medium text-[#ededef] mb-2" style={{ fontWeight: 510 }}>AI Lesson Generator</h3>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.6]">
                Generate complete RPP and teaching modules from a single topic prompt. Includes learning activities, formative assessments, and differentiation strategies — all aligned to your curriculum standard.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["RPP", "ATP", "Modul Ajar", "Assessment"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-mono text-[#71717a]" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small card */}
        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E] mb-4" style={{ background: "rgba(230,160,46,0.08)" }}>
            <Icon name="Curricula" size={20} />
          </div>
          <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>Curriculum Mapping</h3>
          <p className="text-[13px] text-[#71717a] leading-[1.6]">Auto-align to Merdeka, Cambridge, and IB standards.</p>
        </motion.div>

        {/* Medium cards */}
        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E] mb-4" style={{ background: "rgba(230,160,46,0.08)" }}>
            <Icon name="Clipboard" size={20} />
          </div>
          <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>Assessment Engine</h3>
          <p className="text-[13px] text-[#71717a] leading-[1.6]">Diagnostic, formative, summative with auto-grading and HOTS support.</p>
        </motion.div>

        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E] mb-4" style={{ background: "rgba(230,160,46,0.08)" }}>
            <Icon name="Export" size={20} />
          </div>
          <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>Multi-Format Export</h3>
          <p className="text-[13px] text-[#71717a] leading-[1.6]">PDF, Word, Google Docs, LMS share. One-click presentation mode.</p>
        </motion.div>

        {/* EduBI — featured card with gold border */}
        <motion.div variants={fadeUpVar} className="glass glass-hover gold-border rounded-2xl p-6 lg:col-span-1" style={{ background: "rgba(230,160,46,0.03)" }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E]" style={{ background: "rgba(230,160,46,0.08)" }}>
              <Icon name="Chart" size={20} />
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider" style={{ background: "#E6A02E", color: "#08080a" }}>Ultimate</span>
          </div>
          <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>EduBI Dashboard</h3>
          <p className="text-[13px] text-[#a1a1aa] leading-[1.6]">
            Business intelligence for schools. Student performance prediction, graduation rate analytics, and Dinas Pendidikan reporting.
          </p>
        </motion.div>

        {/* School Dashboard — wide */}
        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E] mb-4" style={{ background: "rgba(230,160,46,0.08)" }}>
            <Icon name="Layout" size={20} />
          </div>
          <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>School Dashboard</h3>
          <p className="text-[13px] text-[#71717a] leading-[1.6]">Monitor lesson quality, teacher workload, and curriculum coverage across all subjects in real-time.</p>
        </motion.div>

        {/* Privacy + Security — wide */}
        <motion.div variants={fadeUpVar} className="glass glass-hover rounded-2xl p-6 sm:col-span-2 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#E6A02E]" style={{ background: "rgba(230,160,46,0.08)" }}>
              <Icon name="Shield" size={20} />
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>Data Privacy First</h3>
              <p className="text-[13px] text-[#71717a] leading-[1.6]">All data encrypted at rest and in transit. Fully compliant with UU PDP (Indonesia's Personal Data Protection Law). On-premise deployment available for institutions that require data sovereignty.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["UU PDP", "AES-256", "On-premise"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#52525b]" style={{ background: "rgba(255,255,255,0.02)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
