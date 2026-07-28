"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const icons = {
  Curricula: ["M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", "M9 9.5h6", "M9 12.5h6", "M9 6h6"],
  Sparkles: ["M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z", "M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z", "M16.894 20.1 16.5 21.75l-.394-1.65a2.25 2.25 0 0 0-1.706-1.706L12.75 18l1.65-.394a2.25 2.25 0 0 0 1.706-1.706l.394-1.65.394 1.65a2.25 2.25 0 0 0 1.706 1.706l1.65.394-1.65.394a2.25 2.25 0 0 0-1.706 1.706Z"],
  Clipboard: ["M10 15h4", "M10 11h4", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", "M9 3h6v4H9z"],
  Export: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"],
  Layout: ["M3 9h18M9 21V9M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"],
  Shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"],
};

const Icon = ({ name }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
    {icons[name]?.map((d, i) => <path key={i} d={d} />)}
  </svg>
);

const features = [
  { icon: "Curricula", title: "Curriculum Mapping", desc: "Automatically align lesson plans to national standards. Supports competency mapping across Merdeka, Cambridge, and IB." },
  { icon: "Sparkles", title: "AI Lesson Generator", desc: "Generate complete RPP and teaching modules from a topic. Includes activities, assessments, and differentiation strategies." },
  { icon: "Clipboard", title: "Assessment Engine", desc: "Create diagnostic, formative, and summative assessments with auto-grading. Supports HOTS questions and rubrics." },
  { icon: "Export", title: "Multi-Format Export", desc: "Export to PDF, Word, Google Docs, or share via LMS. Presentation mode for in-class use with one click." },
  { icon: "Layout", title: "School Dashboard", desc: "Monitor lesson quality, teacher workload, and curriculum coverage across all subjects." },
  { icon: "Shield", title: "Data Privacy First", desc: "All data encrypted at rest and in transit. Compliant with UU PDP. On-premise deployment available." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(230,160,46,0.2)] to-transparent" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#71717a] mb-3">Features</motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-semibold tracking-[-0.02em] text-[#ededef] mb-3" style={{ fontWeight: 510 }}>Built for educators, powered by AI.</motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] text-[#71717a] max-w-md mx-auto">Novyra eliminates administrative overhead so teachers can focus on what matters.</motion.p>
      </motion.div>

      <motion.div variants={staggerVar} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUpVar}
            className="rounded-[5px] p-5 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="mb-3 text-[#ededef]"><Icon name={f.icon} /></div>
            <h3 className="text-[15px] font-medium text-[#ededef] mb-1.5" style={{ fontWeight: 510 }}>{f.title}</h3>
            <p className="text-[13px] text-[#71717a] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
