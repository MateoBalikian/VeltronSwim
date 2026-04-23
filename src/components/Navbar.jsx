const WA_LINK = "https://wa.me/5582996653709";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="leading-none">
        <p className="text-lg font-extrabold tracking-[3px] text-[#1e2d4a]">VELTRON</p>
        <p className="text-[7px] font-semibold tracking-[5px] text-[#1e2d4a] mt-0.5">TECHS</p>
      </div>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full"
      >
        Falar no WhatsApp
      </a>
    </nav>
  );
}
