"use client";
import { motion, fadeUp, stagger } from "./motion";

const features = [
  {
    icon: "📐",
    title: "Curriculum Mapping",
    desc: "Automatically align lesson plans to national curriculum standards (Kurikulum Merdeka, Cambridge, IB). Supports competency mapping and ATP generation.",
  },
  {
    icon: "🤖",
    title: "AI Lesson Generator",
    desc: "Generate complete RPP, lesson plans, and teaching modules from a topic or learning objective. Includes activities, assessments, and differentiation.",
  },
  {
    icon: "📊",
    title: "Assessment Engine",
    desc: "Create diagnostic, formative, and summative assessments with auto-grading. Supports HOTS questions, rubrics, and item analysis.",
  },
  {
    icon: "🎥",
    title: "Multi-Format Export",
    desc: "Export to PDF, Word, Google Docs, or share directly via LMS (Google Classroom, Moodle). Presentation mode for in-class use.",
  },
  {
    icon: "👥",
    title: "School Dashboard",
    desc: "Administrative dashboard for curriculum heads to monitor lesson quality, teacher workload, and curriculum coverage across all subjects.",
  },
  {
    icon: "🔒",
    title: "Data Privacy First",
    desc: "All data encrypted at rest and in transit. Compliant with Indonesia's UU PDP and international standards. On-premise deployment available.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#E6A02E] mb-3">
          ✦ Features
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Built for educators, <br />powered by AI.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#a0a4ab] max-w-lg mx-auto">
          Novyra eliminates administrative overhead so teachers can focus on what matters — teaching.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            whileHover={{ y: -4, borderColor: "rgba(230,160,46,0.4)", background: "rgba(230,160,46,0.05)" }}
          >
            <span className="text-2xl block mb-4">{f.icon}</span>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#a0a4ab] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
