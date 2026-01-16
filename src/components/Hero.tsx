import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative px-6 min-h-screen pt-20">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-[1200px] w-full text-center z-10">
        <div className="mb-6 flex justify-center items-center gap-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <p className="text-primary/80 text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
            Creative Digital Engineering
          </p>
          <span className="h-[1px] w-12 bg-primary/40"></span>
        </div>

        <h1 className="font-display gold-gradient-text text-5xl md:text-7xl lg:text-9xl font-black leading-tight tracking-tight mb-8">
          Architecting <br /> Digital Excellence
        </h1>

        <div className="flex flex-col items-center gap-10">
          <p className="text-white/60 text-sm md:text-lg max-w-xl leading-relaxed font-light tracking-wide">
            Specializing in high-end web experiences for luxury brands{" "}
            <br className="hidden md:block" /> and visionary creators worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <Link
              href="/portfolio"
              className="min-w-[200px] rounded-sm bg-primary py-4 px-8 text-background-dark text-xs uppercase tracking-widest font-black transition-transform hover:scale-105 active:scale-95 gold-glow text-center"
            >
              Enter Experience
            </Link>
            <Link
              href="/portfolio"
              className="min-w-[200px] rounded-sm border border-white/10 py-4 px-8 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors text-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary via-primary/20 to-transparent"></div>
      </div>
    </main>
  );
}
