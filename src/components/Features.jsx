const features = [
  { icon: "🏊", name: "Cadência de braçadas", desc: "Frequência e contagem por comprimento, comparada à eficiência ideal para o estilo.", cls: "bg-blue-50 border-blue-200" },
  { icon: "⚡", name: "Score SWOLF", desc: "Índice que combina velocidade e economia de movimento em um único número.", cls: "bg-violet-50 border-violet-200" },
  { icon: "📐", name: "Posição corporal", desc: "Alinhamento horizontal, inclinação do quadril e postura durante o ciclo de nado.", cls: "bg-emerald-50 border-emerald-200" },
  { icon: "🔄", name: "Rotação de quadril", desc: "Amplitude e simetria da rotação lateral — um dos principais fatores de propulsão.", cls: "bg-orange-50 border-orange-200" },
  { icon: "🦵", name: "Análise de pernada", desc: "Frequência, amplitude e eficiência das pernas — detecta assimetrias e perdas.", cls: "bg-pink-50 border-pink-200" },
  { icon: "📄", name: "Relatório em PDF", desc: "Documento completo com dados, gráficos e recomendações de coaching personalizadas.", cls: "bg-green-50 border-green-200" },
];

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">O que está incluído</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Tudo que você precisa{" "}
            <span className="text-blue-600">saber sobre seu nado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map(({ icon, name, desc, cls }) => (
            <div key={name} className={`rounded-2xl border p-5 md:p-6 ${cls}`}>
              <span className="text-2xl block mb-3">{icon}</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
