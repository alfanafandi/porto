import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full marble-texture flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col md:flex-row items-center overflow-hidden pt-24">
        {/* Left Side: Content */}
        <div className="z-10 flex-1 px-10 md:px-24 flex flex-col justify-center gap-8 py-16">
          <div className="space-y-4">
            <span className="text-primary tracking-[0.4em] text-xs font-semibold uppercase block mb-4">
              EST. MMXXIV • DIGITAL ARCHITECT
            </span>
            <h1 className="font-display text-7xl md:text-9xl font-black leading-none gold-gradient-text tracking-tighter">
              ALEXANDER
              <br />
              VAULT
            </h1>
            <div className="max-w-md mt-6">
              <p className="text-stone-400 font-light text-lg leading-relaxed">
                Crafting high-fidelity digital experiences with architectural
                precision. Where brutalist logic meets luxury aesthetics.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-primary text-background-dark font-bold text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-primary/90 hover:scale-105">
              Explore Portfolio
            </button>
            <button className="px-8 py-4 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-primary/10">
              Contact
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-primary font-display font-bold">01</span>
            <div className="h-[1px] w-24 bg-primary/30 relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-primary"></div>
            </div>
            <span className="text-stone-600 font-display">05</span>
          </div>
        </div>

        {/* Right Side: Portrait */}
        <div className="relative w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center p-8">
          <div className="relative w-full max-w-lg aspect-[3/4] gold-rim-light rounded overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Alexander Vault - Creative Director"
              fill
              className="object-cover"
            />
            {/* Quote */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-marble-dark p-6 border border-primary/20 backdrop-blur-md">
              <p className="font-display italic text-primary/80 text-xl">
                &ldquo;Form follows feeling.&rdquo;
              </p>
            </div>
          </div>

          {/* Floating Label */}
          <div className="absolute top-1/2 right-20 vertical-text hidden xl:block">
            <span className="text-stone-600 text-xs tracking-[1em] uppercase">
              CREATIVE DIRECTION — 2024
            </span>
          </div>
        </div>
      </main>

      {/* Vertical Sidebar */}
      <nav className="fixed right-0 top-0 h-full w-20 border-l border-primary/10 bg-background-dark/50 backdrop-blur-xl z-30 hidden lg:flex flex-col items-center justify-between py-10">
        <div className="flex flex-col items-center gap-8">
          <div className="size-10 flex items-center justify-center border border-primary/40 rounded-full">
            <span className="text-primary font-display font-black text-xl">
              V
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <a
            href="/"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl">home</span>
          </a>
          <a
            href="/portfolio"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl">
              grid_view
            </span>
          </a>
          <a
            href="/about"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl">
              architecture
            </span>
          </a>
          <a
            href="/contact"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined !text-3xl">
              alternate_email
            </span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-12 bg-primary/20"></div>
          <div className="vertical-text text-stone-500 text-[10px] tracking-widest uppercase">
            Connect
          </div>
        </div>
      </nav>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-10 left-10 md:top-24 md:left-24 size-48 border border-primary/5 rounded-full pointer-events-none"></div>

      <Footer />
    </div>
  );
}
