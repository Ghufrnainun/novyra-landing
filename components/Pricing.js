"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "Individual teachers exploring AI-assisted planning.",
    features: ["10 lesson plans/month", "Kurikulum Merdeka alignment", "PDF export", "Community support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "Departments and small schools.",
    features: ["100 lesson plans/month", "Multi-curriculum", "Assessment engine", "Google Classroom", "Priority support"],
    cta: "Subscribe",
  },
  {
    name: "Enterprise",
    price: "$480",
    period: "/year",
    desc: "Complete platform for institutions. Up to 50 teachers.",
    features: ["Unlimited lesson plans", "Multi-curriculum + IB", "Auto-grading engine", "School dashboard", "LMS integration", "On-premise option", "Dedicated manager"],
    cta: "Contact Sales",
    accent: true,
  },
  {
    name: "Ultimate",
    price: "$960",
    period: "/year",
    desc: "Maximum capability. Unlimited teachers, custom infrastructure.",
    features: ["Everything in Enterprise", "EduBI analytics", "Performance prediction", "Dinas Pendidikan reporting", "White-label", "API access", "99.9% SLA"],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 px-6 lg:px-10 max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14 max-w-xl">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
          style={{ color: "var(--color-accent)" }}>
          Pricing
        </motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] leading-[1.1] mb-4"
          style={{ fontWeight: 520, color: "var(--color-text)" }}>
          Simple, transparent<br />pricing.
        </motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] leading-[1.6]" style={{ color: "var(--color-text-tertiary)" }}>
          Built for schools of every size. Enterprise includes dedicated support and on-premise deployment.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 items-stretch"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeUpVar}
            className="flex flex-col rounded-2xl p-6 transition-all duration-300"
            style={{
              background: plan.accent ? "rgba(230,160,46,0.04)" : "rgba(255,255,255,0.015)",
              border: plan.accent ? "1px solid rgba(230,160,46,0.18)" : "1px solid var(--color-border)",
            }}
          >
            <div className="text-[13px] font-medium mb-1" style={{ color: "var(--color-text-secondary)", fontWeight: 510 }}>
              {plan.name}
            </div>
            <div className="text-[1.8rem] font-semibold tracking-[-0.02em] leading-none mt-1"
              style={{ fontWeight: 510, color: "var(--color-text)" }}>
              {plan.price}
              <span className="text-[14px] font-normal ml-0.5" style={{ color: "var(--color-text-tertiary)" }}>{plan.period}</span>
            </div>
            <div className="text-[12px] mt-2 mb-5 leading-relaxed" style={{ color: "var(--color-text-tertiary)" }}>
              {plan.desc}
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--color-text-secondary)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <path d="M10 3 4.5 9 2 6.5"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block w-full text-center py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 mt-auto"
              style={
                plan.accent
                  ? { background: "var(--color-accent)", color: "#08080a", fontWeight: 510 }
                  : { background: "rgba(255,255,255,0.03)", color: "var(--color-text)", border: "1px solid var(--color-border)" }
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
