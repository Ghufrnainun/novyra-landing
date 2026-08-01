"use client";
import { motion, fadeUpVar } from "./motion";

const steps = [
  { n: "01", title: "Enter a topic", body: "Type any subject and grade level — IPA Kelas 7, Matematika Peminatan, Sejarah Indonesia." },
  { n: "02", title: "AI generates the plan", body: "Complete RPP with learning activities, assessments, differentiation — aligned to your curriculum standard." },
  { n: "03", title: "Export and teach", body: "Download as PDF, share to Google Classroom, or push to your LMS. Ready for the classroom." },
];

export default function Product() {
  return (
    <section id="product" className="relative py-32 lg:py-40 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Left — section head */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--color-accent)" }}>
            How it works
          </motion.span>
          <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontWeight: 520, color: "var(--color-text)" }}>
            Topic to lesson plan<br />in three steps.
          </motion.h2>
          <motion.p variants={fadeUpVar} className="text-[15px] leading-[1.6]" style={{ color: "var(--color-text-tertiary)" }}>
            No complex configuration. No template hunting. Just describe what you need to teach.
          </motion.p>
        </motion.div>

        {/* Right — numbered steps */}
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUpVar}
              custom={i}
              className="group flex items-start gap-5 px-5 py-5 rounded-xl transition-colors duration-200"
              style={{ borderBottom: i < 2 ? "1px solid var(--color-border)" : "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.015)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <span className="shrink-0 text-[13px] font-mono pt-0.5" style={{ color: "var(--color-accent)" }}>
                {s.n}
              </span>
              <div>
                <h3 className="text-[15px] font-medium mb-1" style={{ fontWeight: 510, color: "var(--color-text)" }}>
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: "var(--color-text-tertiary)" }}>
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
