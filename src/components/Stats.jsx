const stats = [
  { num: "1000+", label: "Atletas analisados" },
  { num: "<5min", label: "Para receber o relatório" },
  { num: "7+", label: "Métricas analisadas" },
];

export default function Stats() {
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 md:gap-5 px-6 py-10">
      {stats.map(({ num, label }) => (
        <div key={label} className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 text-center">
          <span className="block text-2xl md:text-4xl font-extrabold text-blue-600 leading-none mb-1.5">{num}</span>
          <span className="text-xs font-medium text-slate-400 leading-snug">{label}</span>
        </div>
      ))}
    </div>
  );
}
