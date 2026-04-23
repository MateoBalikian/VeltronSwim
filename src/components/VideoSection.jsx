export default function VideoSection() {
  return (
    <section className="bg-[#0f172a] py-16 md:py-20 px-6 text-center">
      <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Veja em ação</p>
      <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-8 leading-snug">
        Nossa IA analisando<br />
        <span className="text-blue-400">cada detalhe do seu nado</span>
      </h2>

      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-blue-400/20 shadow-[0_0_60px_rgba(37,99,235,0.25)]"
        style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/uyjXuw-O5h4?autoplay=1&mute=1&loop=1&playlist=uyjXuw-O5h4&controls=0&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          title="Veltron AI Swimming Analysis"
        />
      </div>
    </section>
  );
}
