const steps = [
  {
    n: "1",
    title: "Filme ou envie o vídeo",
    desc: "Use qualquer celular. Filmagem lateral ou frontal, pelo menos 10 segundos de nado.",
    tip: "📌 Mantenha o celular bem fixo — apoiado em uma superfície ou suporte. Quanto mais estável o vídeo, mais precisa é a análise.",
    tipColor: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    n: "2",
    title: "Nossa IA processa tudo",
    desc: "O sistema detecta articulações, rastreia o corpo quadro a quadro e extrai métricas com precisão de laboratório.",
    tip: null,
  },
  {
    n: "3",
    title: "Você recebe seu relatório",
    desc: "PDF completo com dados, gráficos e recomendações. Pronto pra você e pro seu treinador.",
    tip: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
          Como funciona
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Simples assim —{" "}
          <span className="text-blue-600">3 passos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map(({ n, title, desc, tip, tipColor }) => (
          <div key={n} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col gap-4">
            {/* número destacado */}
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
              <span className="text-white font-extrabold text-2xl leading-none">{n}</span>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>

            {tip && (
              <div className={`rounded-xl border px-4 py-3 text-xs leading-relaxed font-medium ${tipColor}`}>
                {tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}