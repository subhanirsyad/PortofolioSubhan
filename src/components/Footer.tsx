export default function Footer() {
  return (
    <footer className="border-t border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#4a6080] tracking-widest">
          © 2026 SUBHAN IRSYADUDDIEN
        </span>
        <span className="font-mono text-[10px] text-[#4a6080] tracking-widest">
          BUILT WITH{" "}
          <span className="text-[#00ff88]">NEXT.JS</span>
          {" · "}
          <span className="text-[#00ff88]">FRAMER MOTION</span>
        </span>
      </div>
    </footer>
  );
}
