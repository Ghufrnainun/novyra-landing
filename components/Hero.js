"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yMockup = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(".hero-h1-line", { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, "-=0.2")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-cta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2")
        .fromTo(".hero-mockup", { x: 40, opacity: 0, rotate: 2 }, { x: 0, opacity: 1, rotate: 0, duration: 0.8 }, "-=0.8")
        .fromTo(".hero-badge-float", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-stat", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.2");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-6 lg:px-10">
      {/* Animated canvas bg */}
      <div className="absolute inset-0">
        <HeroCanvas />
        {/* Gradient glow overlay */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(230,160,46,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Fade mask bottom → next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #08080a)" }} />
      </div>

      <motion.div style={{ y: yText, opacity }} className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide mb-8" style={{ background: "rgba(230,160,46,0.06)", color: "#E6A02E", border: "1px solid rgba(230,160,46,0.12)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02E] animate-pulse" />
              AI-Powered Curriculum Platform
            </div>

            <h1 className="text-[clamp(2.2rem,6vw,4.2rem)] font-semibold tracking-[-0.04em] leading-[1.02] text-[#ededef] overflow-hidden" style={{ fontWeight: 520 }}>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block">From curriculum</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block">to classroom,{" "}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-h1-line block gradient-gold">automated.</span>
              </span>
            </h1>

            <p className="hero-sub text-[17px] text-[#a1a1aa] max-w-md mt-6 mb-9 leading-[1.6]">
              Novyra generates complete lesson plans, assessments, and teaching materials aligned to your curriculum — in seconds, not hours.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/signup" className="hero-cta group inline-flex items-center gap-2 px-6 py-3 rounded-[8px] text-[14px] font-medium bg-[#E6A02E] text-black hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,160,46,0.25)]">
                Start Free Trial
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5.5 2.5 10 7l-4.5 4.5" />
                </svg>
              </a>
              <a href="#product" className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-[8px] text-[14px] font-medium transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", color: "#a1a1aa", border: "1px solid rgba(255,255,255,0.08)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="5" /><path d="M5.5 5.5 9 7l-3.5 1.5z" fill="currentColor" />
                </svg>
                Watch Demo
              </a>
            </div>

            <div className="hero-trust flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[12px] text-[#52525b]">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round"><path d="M11.5 3.5 5 11 2.5 8" /></svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round"><path d="M11.5 3.5 5 11 2.5 8" /></svg>
                Kurikulum Merdeka ready
              </span>
            </div>
          </div>

          {/* Right — floating mockup */}
          <motion.div style={{ y: yMockup }} className="relative hidden lg:block">
            <div className="hero-mockup animate-float">
              <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(15,15,18,0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-3 text-[11px] font-mono text-[#52525b]">novyra — lesson planner</span>
                </div>
                <div className="p-5 font-mono text-[12px] leading-[1.7] text-[#52525b]">
                  <div className="text-[#E6A02E] mb-3">$ novyra generate --topic "iklim"</div>
                  <div className="space-y-1">
                    <div><span className="text-[#60A5FA]">topic</span> <span className="text-[#a1a1aa]">Perubahan Iklim</span></div>
                    <div><span className="text-[#60A5FA]">grade</span> <span className="text-[#a1a1aa]">Kelas 7 — IPA</span></div>
                    <div><span className="text-[#60A5FA]">curr</span> <span className="text-[#a1a1aa]">Merdeka Fase D</span></div>
                  </div>
                  <div className="mt-4 pt-3 space-y-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" /> RPP generated</div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" /> ATP aligned</div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" /> 3 assessments</div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" /> 2 differentiation strategies</div>
                  </div>
                  <div className="mt-4 text-[#E6A02E]">Done in 2.4s</div>
                </div>
              </div>
            </div>

            <div className="hero-badge-float absolute -bottom-4 -left-4 animate-float-delay">
              <div className="px-3 py-2 rounded-xl text-[11px] font-medium" style={{ background: "rgba(15,15,18,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(230,160,46,0.15)", color: "#a1a1aa" }}>
                <span className="text-[#E6A02E] font-mono">2.4s</span> to generate
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 lg:gap-16 mt-16 lg:mt-24 lg:pl-2">
          {[
            { value: "14K+", label: "schools" },
            { value: "50K+", label: "teachers" },
            { value: "2M+", label: "lesson plans" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="text-[28px] font-semibold gradient-gold" style={{ fontWeight: 520 }}>{s.value}</div>
              <div className="text-[12px] text-[#52525b] mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
