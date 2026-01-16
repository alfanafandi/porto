import Image from "next/image";
import Link from "next/link";

const techStack = [
  { icon: "terminal", name: "PHP 8.2" },
  { icon: "database", name: "MySQL" },
  { icon: "window", name: "Bootstrap" },
  { icon: "api", name: "REST API" },
];

const mechanics = [
  {
    icon: "swords",
    title: "Boss Battle",
    description:
      "Transformed end-of-unit assessments into cinematic encounters. Students must utilize collective knowledge to defeat complex curriculum bosses.",
  },
  {
    icon: "military_tech",
    title: "XP System",
    description:
      "Granular progression tracking. Every homework assignment contributes to character attributes, unlocking new academic abilities and visual tiers.",
  },
  {
    icon: "reorder",
    title: "The Hall of Fame",
    description:
      'Real-time competitive standings categorized by "Kingdom" (Classroom). Encourages peer mentorship and healthy academic competition.',
  },
];

export default function FundamindPage() {
  return (
    <div className="min-h-screen bg-[#101014] text-gray-100 font-sans selection:bg-primary selection:text-background-dark">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-[#101014]/80 backdrop-blur-md px-6 lg:px-40 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              auto_stories
            </span>
            <h2 className="font-display text-white text-xl font-bold tracking-tight">
              The Ledger
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#legend"
              className="text-sm font-medium text-primary hover:text-white transition-colors"
            >
              The Legend
            </a>
            <a
              href="#mechanics"
              className="text-sm font-medium text-[#c6ba95] hover:text-primary transition-colors"
            >
              Core Mechanics
            </a>
            <a
              href="#tools"
              className="text-sm font-medium text-[#c6ba95] hover:text-primary transition-colors"
            >
              Alchemist Tools
            </a>
            <a
              href="#quest"
              className="text-sm font-medium text-[#c6ba95] hover:text-primary transition-colors"
            >
              Quest Log
            </a>
          </nav>
          <button className="bg-primary hover:bg-white text-background-dark px-6 py-2 rounded font-bold text-sm transition-all transform hover:scale-105">
            ENTER THE REALM
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-20">
        {/* Hero Section */}
        <section
          id="legend"
          className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #dfb22a, #8e6d13)",
                  boxShadow:
                    "inset 0 0 10px rgba(0,0,0,0.3), 0 4px 10px rgba(223, 178, 42, 0.4)",
                  clipPath:
                    "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                }}
              >
                <span className="material-symbols-outlined text-background-dark font-bold text-3xl">
                  verified
                </span>
              </div>
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">
                  Role Authenticated
                </p>
                <p className="font-display text-xl text-white">
                  Lead Fullstack Architect
                </p>
              </div>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl font-black text-white leading-[1.1]"
              style={{ textShadow: "0 0 8px rgba(223, 178, 42, 0.5)" }}
            >
              Fundamind:
              <br />
              <span className="text-primary italic">The Conquest</span>
            </h1>

            <p className="text-lg text-[#c6ba95] leading-relaxed max-w-xl">
              A Story Quest inspired educational platform where learning becomes
              a legendary adventure. Transmuting complex curriculum into an
              immersive RPG ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-background-dark px-8 py-4 rounded font-bold hover:brightness-110 flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                VIEW LIVE REALM
              </button>
              <button className="border border-primary/40 text-primary px-8 py-4 rounded font-bold hover:bg-primary/10 transition-colors">
                EXPLORE REPOSITORY
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-background-dark border-4 border-primary/20 rounded-xl overflow-hidden shadow-2xl transform rotate-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRGQiEaoyL6r1qrCHVSVnIn-JehTFB6K1atjW1rD0t0n-ywAMDpm6wYkpThKYEXRoEzl5GBGVlujUNu_zvsZMNW8FLJYAiw1kqWuuAOFMUxWq_3tkkHGMOssBiS06gqhv3BNFLJHhALEzji_l0QBpDonMIZONyAKFlntSYcgGTJrEUo4S4o22JiQni6M7zphXVbP_8Sb7CcM4e3kU1_IqhgHH8SUv3LoqtoCEmK1fXRwk5KJXoRI32ln0ZSKj7a3Ma0l9uIHj1HX_M"
                alt="Fundamind Platform UI"
                width={800}
                height={450}
                className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Core Mechanics Section */}
        <section id="mechanics" className="py-20 border-t border-primary/10">
          <div className="mb-12">
            <h2 className="font-display text-3xl text-white mb-2">
              The Core Mechanics
            </h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mechanics.map((mechanic, index) => (
              <div
                key={index}
                className="p-8 group"
                style={{
                  background:
                    "linear-gradient(145deg, #1a1a1e 0%, #101014 100%)",
                  border: "1px solid rgba(223, 178, 42, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                  {mechanic.icon}
                </span>
                <h3 className="font-display text-xl text-white mb-4">
                  {mechanic.title}
                </h3>
                <p className="text-[#c6ba95] text-sm leading-relaxed">
                  {mechanic.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          id="tools"
          className="py-20 border-t border-primary/10 bg-primary/5 -mx-6 lg:-mx-10 px-6 lg:px-10"
        >
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-display text-2xl text-white mb-12 italic uppercase tracking-widest">
              The Alchemist&apos;s Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-16">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-20 h-20 border border-primary/40 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      {tech.icon}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-primary tracking-widest">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quest Log Section */}
        <section
          id="quest"
          className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="font-display text-3xl text-white mb-8">
              The Quest Log
            </h2>
            <div className="space-y-6">
              <div className="pl-6 border-l-2 border-primary/30">
                <h4 className="text-primary font-bold text-sm mb-2">
                  Phase I: The Call to Adventure
                </h4>
                <p className="text-[#c6ba95] leading-relaxed">
                  The challenge was clear: how do we make rote memorization and
                  repetitive testing engaging for a digital-native generation?
                  The answer lay in the mechanics of RPGs.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h4 className="text-primary font-bold text-sm mb-2">
                  Phase II: The Forging
                </h4>
                <p className="text-[#c6ba95] leading-relaxed">
                  Building the backend required a robust relational database to
                  track millions of individual XP points, item drops, and
                  relational class data in real-time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-10 rounded-xl border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">
                menu_book
              </span>
            </div>
            <h3 className="font-display text-2xl text-white mb-4 italic">
              Architect&apos;s Note
            </h3>
            <p className="text-[#c6ba95] leading-relaxed italic mb-6">
              &ldquo;The greatest hurdle was ensuring the gamification
              didn&apos;t overshadow the education. We designed the logic so
              that &apos;leveling up&apos; was impossible without true mastery
              of the subject matter.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZLdpauHZX3U8Qij2xS630Hrkz-Wl0bhX5c7ueGVxKwfvBxcZLlQRjON4jnq_YaqlvyFVXHO5kuYeffj6K_R3cGQQk1g7fXnwMEKFLA_sQqdvppiw7EOPunsMQUBr_xdpiAJ22Wyx_08VrHdFgWvmqU7bKKyJt3jml_ulY4iTNaAJneIVVwEM_27F4QE-uKROp6amfbsM9tqQ292Qkc3GUEHS3nDDu9WXRdR0YlLkXRUfSoPRACTap3z6Agcn43yheAR3bPtsJgrGP')`,
                }}
              ></div>
              <div>
                <p className="text-white font-bold text-sm">Caelum Weaver</p>
                <p className="text-primary text-xs uppercase tracking-tighter">
                  Chief Alchemist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Footer */}
        <section className="py-20 text-center border-t border-primary/10">
          <h2 className="font-display text-4xl text-white mb-10">
            Ready to start your conquest?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="#"
              className="bg-primary text-background-dark px-12 py-5 rounded font-black text-lg tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">castle</span>
              ENTER THE REALM
            </a>
            <Link
              href="/portfolio"
              className="border-2 border-primary text-primary px-12 py-5 rounded font-black text-lg tracking-widest hover:bg-primary/10 transition-colors flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              BACK TO TAVERN
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-background-dark border-t border-primary/10 py-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[#c6ba95] text-sm italic">
          <p>© 1204 - 2024 Fundamind Chronicles. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Twitter (X)
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
