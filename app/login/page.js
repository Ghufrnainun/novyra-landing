"use client";
import { useState } from "react";
import { motion } from "@/components/motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] px-4">
      {/* Aurora background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#E6A02E]/3 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#E6A02E]/5 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_2s]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-14 flex items-center px-6 z-10">
        <a href="/" className="text-sm font-semibold text-[#ededef] tracking-tight">
          novyra<span className="text-[#E6A02E]">.</span>
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#ededef]" style={{ fontWeight: 510 }}>
            Sign in to Novyra
          </h1>
          <p className="text-[13px] text-[#71717a] mt-2">
            Access your school dashboard and curriculum tools.
          </p>
        </div>

        <form
          className="rounded-[5px] p-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.ac.id"
                className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }}
              />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded-sm" style={{ accentColor: "#E6A02E" }} />
              <span className="text-[12px] text-[#71717a]">Remember me</span>
            </label>
            <a href="#" className="text-[12px] text-[#E6A02E] hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-[4px] text-[13px] font-medium bg-[#E6A02E] text-black hover:brightness-110 transition-all"
          >
            Sign In
          </button>

          <div className="mt-5 pt-4 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[12px] text-[#71717a]">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-[#E6A02E] hover:underline">Request demo</a>
            </p>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-5 mt-6">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" className="text-[11px] text-[#555] hover:text-[#71717a]">{l}</a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
