"use client";
import { motion } from "@/components/motion";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] px-4">
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#E6A02E]/3 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_2s]" />
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
            Create your account
          </h1>
          <p className="text-[13px] text-[#71717a] mt-2">
            Get started with Novyra&apos;s free tier today.
          </p>
        </div>

        <form
          className="rounded-[5px] p-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">Full name</label>
              <input type="text" placeholder="Guru Honorer" className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }} />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">School / Institution</label>
              <input type="text" placeholder="SMA Negeri 1 Semarang" className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }} />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">Work email</label>
              <input type="email" placeholder="guru@sma1smg.sch.id" className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }} />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#a1a1aa] mb-1.5">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="w-full px-3 py-2 rounded-[4px] text-[13px] outline-none transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededef" }} />
            </div>
          </div>

          <label className="flex items-start gap-2 mt-4 mb-6 cursor-pointer">
            <input type="checkbox" className="mt-0.5 rounded-sm" style={{ accentColor: "#E6A02E" }} />
            <span className="text-[11px] text-[#71717a] leading-relaxed">
              I agree to the <a href="#" className="text-[#E6A02E] hover:underline">Terms of Service</a> and <a href="#" className="text-[#E6A02E] hover:underline">Privacy Policy</a>.
            </span>
          </label>

          <button type="submit" className="w-full py-2.5 rounded-[4px] text-[13px] font-medium bg-[#E6A02E] text-black hover:brightness-110 transition-all">
            Create Account
          </button>

          <div className="mt-5 text-center text-[12px] text-[#71717a]">
            Already have an account?{" "}
            <a href="/login" className="text-[#E6A02E] hover:underline">Sign in</a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
