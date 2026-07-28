"use client";
import { motion, fadeUp } from "./motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#E6A02E] mb-3">
          ✦ About
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          We believe teachers <br />should teach, not admin.
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#a0a4ab] leading-relaxed mb-4">
            Novyra was founded in 2025 by a team of educators and engineers who saw firsthand how much time teachers waste on administrative work — writing lesson plans, designing assessments, mapping curriculum.
          </p>
          <p className="text-[#a0a4ab] leading-relaxed mb-4">
            In Indonesia alone, teachers spend an average of 14 hours per week on lesson planning. That's time they could spend with students. Novyra reduces that to minutes.
          </p>
          <p className="text-[#a0a4ab] leading-relaxed mb-4">
            We&apos;re an Indonesia-based EdTech startup focused on serving Southeast Asian educational institutions, backed by angel investors and education grants.
          </p>
          <p className="text-sm font-semibold mt-6">
            Team: 6 engineers, 3 curriculum specialists, 2 former principals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 sm:p-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-2xl block mb-4">🏢</span>
          <h3 className="text-lg font-semibold mb-3">PT Novyra Edu Teknologi</h3>
          <div className="text-sm text-[#a0a4ab] space-y-2 leading-relaxed">
            <p>📍 Semarang, Central Java, Indonesia</p>
            <p>📧 hello@novyra.my.id</p>
            <p>📋 NIB: 15012400XXXXXX</p>
          </div>
          <div className="mt-6 pt-4 text-xs text-[#6b6f76]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            Partnered with 4 pilot schools in Central Java and East Java. Currently pre-seed stage with active product development.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
