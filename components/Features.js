"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const cards = [
  {
    wide: true,
    label: "Lesson Generator",
    title: "Complete RPP in seconds",
    body: "Generate full lesson plans — learning objectives, activities, formative assessments, differentiation strategies — from a single topic prompt. Aligned to Merdeka, Cambridge, or IB.",
    tags: ["RPP", "ATP", "Modul Ajar", "Assessment"],
  },
  {
    label: "Curriculum Mapping",
    title: "Auto-align to standards",
    body: "Map any topic to CP, TP, ATP across Merdeka, Cambridge, and IB frameworks automatically.",
  },
  {
    label: "Assessment Engine",
    title: "Diagnostic to summative",
    body: "Generate HOTS questions, rubrics, and auto-grading flows for every assessment type.",
  },
  {
    label: "Multi-Format Export",
    title: "PDF, Docs, LMS share",
    body: "One-click export to any format. Push directly to Google Classroom or Moodle.",
  },
  {
    label: "EduBI Dashboard",
    title: "School-wide analytics",
    body: "Performance prediction, graduation rate trends, Dinas Pendidikan reporting. Business intelligence for school leaders.",
    gold: true,
  },
  {
    label: "Data Privacy",
    title: "UU PDP compliant",
    body: "AES-256 encryption at rest and in transit. On-premise deployment for institutions that require data sovereignty.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 lg:py-40 px-6 lg:px-10 max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14 max-w-xl">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
          style={{ color: "var(--color-accent)" }}>
          Capabilities
        </motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] leading-[1.1]"
          style={{ fontWeight: 520, color: "var(--color-text)" }}>
          Everything you need<br />to teach, faster.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {cards.map((c, i) => {
          const isWide = c.wide && i === 0;
          return (
            <motion.div
              key={c.label}
              variants={fadeUpVar}
              className={`group rounded-2xl p-6 transition-all duration-300 ${isWide ? "col-span-2 lg:col-span-2" : ""}`}
              style={{
                background: c.gold ? "rgba(230,160,46,0.03)" : "rgba(255,255,255,0.015)",
                border: c.gold ? "1px solid rgba(230,160,46,0.12)" : "1px solid var(--color-border)",
              }}
            >
              <div className="text-[11px] font-mono tracking-wider uppercase mb-3" style={{ color: "var(--color-accent)" }}>
                {c.label}
              </div>
              <h3 className="text-[15px] font-medium mb-2" style={{ fontWeight: 510, color: "var(--color-text)" }}>
                {c.title}
              </h3>
              <p className="text-[13px] leading-[1.6] mb-4" style={{ color: "var(--color-text-tertiary)" }}>
                {c.body}
              </p>
              {c.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono"
                      style={{ background: "rgba(255,255,255,0.03)", color: "var(--color-text-tertiary)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
