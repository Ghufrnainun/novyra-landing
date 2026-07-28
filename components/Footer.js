export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 px-6 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {["Privacy Policy", "Terms of Service", "Contact", "Blog"].map((l) => (
          <a key={l} href="#" className="text-[13px] text-[#71717a] hover:text-[#a1a1aa] transition-colors">
            {l}
          </a>
        ))}
      </div>
      <p className="text-[11px] text-[#555]">&copy; 2026 PT Novyra Edu Teknologi. All rights reserved.</p>
    </footer>
  );
}
