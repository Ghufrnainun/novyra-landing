"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "For individual teachers exploring AI-assisted planning.",
    features: ["10 lesson plans/month", "Kurikulum Merdeka alignment", "PDF export", "Community support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "$960",
    period: "/year",
    desc: "Complete platform for schools and institutions. Unlimited access.",
    featured: true,
    features: [
      "Unlimited lesson plans", "Multi-curriculum (Merdeka, Cambridge, IB)",
      "Assessment engine with auto-grading", "School dashboard & analytics",
      "LMS integration (Google Classroom, Moodle)", "Dedicated account manager",
      "On-premise deployment option", "Priority support (24/7)",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For departments and small schools.",
    features: ["100 lesson plans/month", "All curriculum standards", "Assessment engine", "Google Classroom integration", "Email support"],
    cta: "Subscribe",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-6 max-w-6xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(230,160,46,0.2)] to-transparent" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#71717a] mb-3">Pricing</motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-semibold tracking-[-0.02em] text-[#ededef] mb-3" style={{ fontWeight: 510 }}>Simple, transparent pricing.</motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] text-[#71717a] max-w-md mx-auto">Built for schools of every size. Enterprise includes dedicated support.</motion.p>
      </motion.div>

      <motion.div variants={staggerVar} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-4 items-start">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeUpVar}
            className="relative rounded-[5px] p-6 sm:p-8 transition-all duration-200"
            style={{
              background: plan.featured ? "rgba(230,160,46,0.05)" : "rgba(255,255,255,0.02)",
              border: plan.featured ? "1px solid rgba(230,160,46,0.25)" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {plan.featured && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wider uppercase" style={{ background: "#E6A02E", color: "#0A0A0A" }}>
                Popular
              </div>
            )}

            <div className="text-[13px] font-medium text-[#71717a] mb-2">{plan.name}</div>
            <div className="text-[2.2rem] font-semibold tracking-[-0.02em] text-[#ededef]" style={{ fontWeight: 510 }}>
              {plan.price}
              <span className="text-[15px] font-normal text-[#71717a]">{plan.period}</span>
            </div>
            <div className="text-[13px] text-[#71717a] mt-2 mb-6">{plan.desc}</div>

            <ul className="space-y-2.5 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#a1a1aa]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#E6A02E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <path d="M11.5 3.5 5 11 2.5 8"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block w-full text-center py-2.5 rounded-[4px] text-[13px] font-medium transition-all duration-200"
              style={
                plan.featured
                  ? { background: "#E6A02E", color: "#0A0A0A" }
                  : { background: "rgba(255,255,255,0.04)", color: "#ededef", border: "1px solid rgba(255,255,255,0.08)" }
              }
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
