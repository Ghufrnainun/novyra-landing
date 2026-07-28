"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "For individual teachers exploring AI-assisted planning.",
    features: [
      "10 lesson plans/month",
      "Kurikulum Merdeka alignment",
      "PDF export",
      "Community support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For departments and small schools.",
    features: [
      "100 lesson plans/month",
      "Multi-curriculum (Merdeka, Cambridge)",
      "Assessment engine",
      "Google Classroom integration",
      "Priority email support",
    ],
    cta: "Subscribe",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "$480",
    period: "/year",
    desc: "Complete platform for schools and institutions. Up to 50 teachers.",
    featured: true,
    features: [
      "Unlimited lesson plans",
      "Multi-curriculum (Merdeka, Cambridge, IB)",
      "Assessment engine with auto-grading",
      "School dashboard & analytics",
      "LMS integration (Google Classroom, Moodle)",
      "On-premise deployment option",
      "Dedicated account manager",
      "Priority support (24/7)",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Ultimate",
    price: "$960",
    period: "/year",
    desc: "Maximum capability for large institutions. Unlimited teachers.",
    features: [
      "Everything in Enterprise",
      "EduBI — BI dashboard for school analytics",
      "AI-powered student performance prediction",
      "Dinas Pendidikan integration & reporting",
      "Custom branding & white-label",
      "API access & webhooks",
      "SLA-backed 99.9% uptime",
      "Dedicated infrastructure (on-prem)",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-14 max-w-xl">
        <motion.span variants={fadeUpVar} className="inline-block text-[11px] font-mono tracking-[0.15em] uppercase text-[#E6A02E] mb-4">/ pricing</motion.span>
        <motion.h2 variants={fadeUpVar} className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-[#ededef] leading-[1.1] mb-4" style={{ fontWeight: 520 }}>Simple, transparent<br />pricing.</motion.h2>
        <motion.p variants={fadeUpVar} className="text-[15px] text-[#71717a] leading-relaxed">Built for schools of every size. Enterprise includes dedicated support.</motion.p>
      </motion.div>

      <motion.div variants={staggerVar} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeUpVar}
            className="relative rounded-2xl p-6 transition-all duration-300"
            style={{
              background: plan.featured ? "rgba(230,160,46,0.04)" : "rgba(255,255,255,0.025)",
              border: plan.featured ? "1px solid rgba(230,160,46,0.25)" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {plan.featured && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wider uppercase" style={{ background: "#E6A02E", color: "#0A0A0A" }}>
                Popular
              </div>
            )}

            <div className="text-[13px] font-medium text-[#71717a] mb-2">{plan.name}</div>
            <div className="text-[1.8rem] font-semibold tracking-[-0.02em] text-[#ededef]" style={{ fontWeight: 510 }}>
              {plan.price}
              <span className="text-[14px] font-normal text-[#71717a]">{plan.period}</span>
            </div>
            <div className="text-[12px] text-[#71717a] mt-2 mb-5 leading-relaxed">{plan.desc}</div>

            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[12px] text-[#a1a1aa]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#E6A02E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <path d="M10 3 4.5 9 2 6.5"/>
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
