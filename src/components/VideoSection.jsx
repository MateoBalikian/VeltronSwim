const VIDEO_URL =
  "https://mzgmfqpvecolhniqxoty.supabase.co/storage/v1/object/public/kairos-midia/trocker-demo.mp4"
export default function VideoSection() {
  return (
    <section className="bg-[#0f172a] py-16 md:py-20 px-6 text-center">
      <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
        Veja em ação
      </p>
      <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-8 leading-snug">
        Nossa IA analisando<br />
        <span className="text-blue-400">cada detalhe do seu nado</span>
      </h2>

      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-blue-400/20 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
