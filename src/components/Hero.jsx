const WA_LINK = "https://wa.me/5582996653709";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center px-6 py-24 md:py-32"
      style={{ background: "linear-gradient(135deg, #dbeafe 0%, #ede9fe 50%, #dbeafe 100%)" }}>
      {/* glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-2xl mx-auto">
        {/* badge */}
        <span className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
          Análise de Natação com IA
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-5">
          Analise seu nado com{" "}
          <span className="text-blue-600">Inteligência Artificial</span>
        </h1>

        <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-lg mx-auto mb-9">
          Envie um vídeo e receba em minutos um relatório completo com dados
          biomecânicos, análise de técnica e dicas de coaching personalizadas.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white font-bold text-base px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(37,99,235,0.4)]">
            📲 Quero minha análise
          </a>
          <a href="#como-funciona"
            className="bg-white hover:bg-blue-50 transition-colors text-blue-600 font-semibold text-base px-7 py-4 rounded-full border-2 border-blue-200">
            Como funciona →
          </a>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {["✓ Sem equipamento", "✓ Resultado em minutos", "✓ Relatório em PDF", "✓ Todos os estilos"].map(t => (
            <span key={t} className="bg-white border border-slate-200 text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
