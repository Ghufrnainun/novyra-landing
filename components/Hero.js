"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(useGSAP);

function CurriculumBadge() {
  return (
    <svg
      width="280" height="280" viewBox="0 0 280 280" fill="none"
      className="pointer-events-none select-none"
      style={{ filter: "drop-shadow(0 0 40px rgba(230,160,46,0.08))" }}
    >
      <circle cx="140" cy="140" r="138" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <circle cx="140" cy="140" r="108" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="140" cy="140" r="78" stroke="rgba(230,160,46,0.10)" strokeWidth="1" />
      {/* Ring segments */}
      <path d="M140 62 A 78 78 0 0 1 200 88" stroke="rgba(230,160,46,0.18)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M140 218 A 78 78 0 0 1 80 192" stroke="rgba(230,160,46,0.12)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="40 20" />
      {/* Center dot + orbits */}
      <circle cx="140" cy="140" r="2.5" fill="var(--color-accent)" opacity="0.6" />
      <circle cx="188" cy="98" r="3" fill="var(--color-accent)" opacity="0.25">
        <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="92" cy="165" r="2" fill="var(--color-accent)" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.45;0.2" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="195" r="2.5" fill="var(--color-accent)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.35;0.15" dur="6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-label", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(".hero-h1-line", { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, "-=0.15")
        .fromTo(".hero-lede", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
        .fromTo(".hero-cta", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 }, "-=0.25")
        .fromTo(".hero-graphic", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.6");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-28 px-6 lg:px-10">
      <div className="bg-grain" />
      <div className="bg-glow" />

      <motion.div style={{ y: yText, opacity }} className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-20 items-center">
          {/* Left — copy */}
          <div>
            <div className="hero-label inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wide mb-8"
              style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)", border: "1px solid rgba(230,160,46,0.12)" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="opacity-70">
                <path d="M6.563 3.306 7 2.25l-.812.306a3 3 0 0 0-1.626 1.626L4.25 5l-.812-.306a3 3 0 0 0-1.626-1.626L1 2.75l.812.306a3 3 0 0 0 1.626 1.626L4.25 5l-.312 1.156a3 3 0 0 0-.1.538H1.75v.5h2.128a3 3 0 0 0 .622 1.05L5.5 9.5l.25-.876a3 3 0 0 0 .188-.88H8v-.5H5.898a3 3 0 0 0-.188-.88L5.5 5.5Z" clipRule="evenodd"/>
              </svg>
              AI-Powered Curriculum Platform
            </div>

            <h1 className="text-[clamp(2.4rem,6.5vw,4.4rem)] font-semibold tracking-[-0.045em] leading-[0.98] overflow-hidden"
              style={{ fontWeight: 520, color: "var(--color-text)" }}>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block">From curriculum</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block">to classroom —</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block" style={{ color: "var(--color-accent)" }}>in seconds.</span>
              </span>
            </h1>

            <p className="hero-lede text-[17px] leading-[1.6] max-w-md mt-6 mb-9" style={{ color: "var(--color-text-secondary)" }}>
              Generate complete lesson plans, assessments, and teaching materials aligned to your curriculum standard — not hours of admin work.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/signup" className="hero-cta group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium transition-all duration-300"
                style={{
                  background: "var(--color-accent)",
                  color: "#08080a",
                  fontWeight: 510,
                }}>
                Start Free Trial
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M5.5 2.5 10 7l-4.5 4.5" />
                </svg>
              </a>
              <a href="#product" className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}>
                See how it works
              </a>
            </div>
          </div>

          {/* Right — abstract curriculum diagram */}
          <div className="hero-graphic relative hidden lg:flex items-center justify-center">
            <div className="relative">
              <CurriculumBadge />
              {/* Floating card */}
              <div className="absolute -bottom-2 -right-2 animate-float">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-mono"
                  style={{
                    background: "rgba(15,15,18,0.95)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-accent)",
                  }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M10 3 4.5 9 2 6.5"/>
                  </svg>
                  Kurikulum Merdeka
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching standards supported */}
        <div className="mt-20 lg:mt-28 flex flex-wrap items-center gap-6">
          <span className="text-[12px] font-mono tracking-wider uppercase" style={{ color: "var(--color-text-tertiary)" }}>Curriculum standards</span>
          <span className="w-px h-3" style={{ background: "var(--color-border)" }} />
          {["Merdeka", "Cambridge", "IB", "K13"].map((s) => (
            <span key={s} className="text-[14px] font-medium" style={{ color: "var(--color-text-secondary)", fontWeight: 510 }}>
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
