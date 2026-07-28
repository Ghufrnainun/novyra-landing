"use client";
import { motion, fadeUp, stagger } from "./motion";

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
    outlined: true,
  },
  {
    name: "Enterprise",
    price: "$960",
    period: "/year",
    desc: "Complete platform for schools and institutions. Unlimited access.",
    featured: true,
    features: [
      "Unlimited lesson plans",
      "Multi-curriculum (Merdeka, Cambridge, IB)",
      "Assessment engine with auto-grading",
      "School dashboard & analytics",
      "LMS integration (Google Classroom, Moodle)",
      "Dedicated account manager",
      "On-premise deployment option",
      "Priority support (24/7)",
    ],
    cta: "Contact Sales",
    outlined: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For departments and small schools.",
    features: [
      "100 lesson plans/month",
      "All curriculum standards",
      "Assessment engine",
      "Google Classroom integration",
      "Email support",
    ],
    cta: "Subscribe",
    outlined: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#E6A02E] mb-3">
          ✦ Pricing
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Simple, transparent pricing.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#a0a4ab] max-w-lg mx-auto">
          Built for schools of every size. Enterprise plans include dedicated support and custom integrations.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-4 items-start"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeUp}
            className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              background: plan.featured ? "rgba(230,160,46,0.06)" : "rgba(255,255,255,0.03)",
              border: plan.featured ? "1px solid rgba(230,160,46,0.3)" : "1px solid rgba(255,255,255,0.06)",
            }}
            whileHover={{ y: -4 }}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#E6A02E] text-[#0A0A0A]">
                Popular
              </div>
            )}

            <div className="text-sm font-semibold text-[#a0a4ab] mb-2">{plan.name}</div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight">
              {plan.price}
              <span className="text-base font-normal text-[#6b6f76]">{plan.period}</span>
            </div>
            <div className="text-sm text-[#6b6f76] mt-2 mb-6">{plan.desc}</div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#c0c4cc]">
                  <span className="text-[#E6A02E] mt-0.5">→</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                plan.featured
                  ? { background: "#E6A02E", color: "#0A0A0A" }
                  : { background: "rgba(255,255,255,0.05)", color: "#f7f8f8", border: "1px solid rgba(255,255,255,0.1)" }
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
