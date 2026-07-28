export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-12 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {["Privacy Policy", "Terms of Service", "Contact", "Blog"].map((l) => (
          <a key={l} href="#" className="text-sm text-[#6b6f76] hover:text-[#a0a4ab] transition-colors">
            {l}
          </a>
        ))}
      </div>
      <p className="text-xs text-[#555]">© 2026 PT Novyra Edu Teknologi. All rights reserved.</p>
    </footer>
  );
}
