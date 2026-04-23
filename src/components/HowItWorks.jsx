const steps = [
  {
    n: "1",
    title: "Você filma ou envia o vídeo",
    desc: "Qualquer celular serve. Filmagem lateral ou frontal, pelo menos 10 segundos de nado. Sem app, sem setup.",
  },
  {
    n: "2",
    title: "Nossa IA processa tudo",
    desc: "O sistema detecta articulações, rastreia o corpo quadro a quadro e extrai métricas com precisão de laboratório.",
  },
  {
    n: "3",
    title: "Você recebe seu relatório",
    desc: "PDF completo com dados, gráficos e recomendações. Pronto pra você e pro seu treinador.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Como funciona</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Simples assim —{" "}
          <span className="text-blue-600">3 passos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map(({ n, title, desc }) => (
          <div key={n} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-extrabold text-lg mb-4">
              {n}
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
