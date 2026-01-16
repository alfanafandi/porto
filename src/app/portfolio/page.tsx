import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "fundamind",
    category: "EduTech Platform",
    title: "Fundamind",
    tech: "PHP • MySQL • EduTech RPG",
    techIcon: "terminal",
    description:
      "A gamified education platform merging classical RPG elements with modern pedagogy. Experience parchment-style UI inside a bespoke dark gold frame, designed to inspire lifelong learning through adventure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDUR5mXSCPIZKG98yda5ArQAv-m4eJX-DrU-z2hzB1_2gZWGULB1PeexKA1mSgLDf9ESyXdBuLtXAo9dXQSJef6YNE1RqxMRNPp8asvKYrjoeyh0CW4JBSnVTUSuSfRVxKE8wenJA1aRokxIX0gHrPECQCAsvi2TbiFO9zBWDyX0kCH4ov1gkuQ6sgVm4i2wnFpioAjgiQYRs6qgTBeDkA0z3dUJDmD9hpeiDz5lUY_FiwDvN__DW4gPsFtrq-6D0OkL_buDZY8R55",
    cta: "Explore Repository",
    reverse: false,
  },
  {
    id: "android-note-ai",
    category: "Mobile Ecosystem",
    title: "Android Note AI",
    tech: "Flutter • OpenAI API • Firebase",
    techIcon: "data_object",
    description:
      "Intelligent note-taking with generative AI waves for productivity enhancement. A clean, modern interface designed for cognitive focus, featuring fluid animations and context-aware intelligence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSA6QdnbINE2In93Xkrm09Lqm5Qdos3kxi076AHdhvc3ZywO_GzSu5OJEkq8D_nHVkbRY8OuRwjJcfHcvOKRNiZdt1zdgv_otLaJnluG2UOTsaZ8RtDe8bcPxJKRcWsQoOqzKOBhd2u42Fw5dEPR-zuYdmpW1h9K7dNLefQFra7vs8ivscO9ZCEziebHjwPz-bAgWVl0r_SgJjq1SJUoT9dNsVcG3pkRndOuU0JUFrxhUYXDveFWrzJY29OmS6cj_BUHw9bTOTC-ik",
    cta: "Launch Showcase",
    reverse: true,
  },
  {
    id: "sistem-resto",
    category: "Enterprise Management",
    title: "Sistem Resto",
    tech: "Laravel • Vue.js • Tailwind",
    techIcon: "restaurant_menu",
    description:
      "An elegant digital catalog and management system for high-end dining establishments. Bridging the gap between luxury hospitality and efficient inventory operations with seamless real-time syncing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2QfPVM9R_Tc_EbKwiGgOKdzH0myBQ0B1cK7bYEtkdkGdlhUB5_i1wkGl1GchaM5lzJ9hSFlEGWUdK2LdfR9Hig9xRHDc1BKkZuNt-TcVWvoYVC5JwuHRo6XcgSN-LMGtxXTBcrUxLMlmQ3orgRxtMoMfJ2nsb82FEQwg7SbOlUVK2yHZJx7CX58NGTOD1t8K2gU60ZmWfAmqbaQsK4vHr3RGbdg_z-aZ6VT-nHaxYStyrLGNa4Hm681CmWnESfgwetFcl4AzhAQa",
    cta: "View Case Study",
    reverse: false,
  },
  {
    id: "lapak-hp",
    category: "Retail Systems",
    title: "Lapak HP",
    tech: "CodeIgniter • Bootstrap • MariaDB",
    techIcon: "inventory_2",
    description:
      "A professional inventory dashboard designed for retail scale and precision. Built to handle complex supply chain tracking with a minimalist aesthetic that prioritizes operational speed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4f7w9vx8wraaXJZpLyk7JDx6Jyu8ShIB-nx8HyricrAA0ofFwPIJTBIlPowbTyOoHkawIV5-Yc55-1mwxXT9NqQ-97h7j7ImLtkTMkB2vQlNc_KxuWUcM3CSdGWqxhQeh6n8ryVZzBIg00QarydhsPVEqDR5mOOl27-WAfoEDDZmw-EHFxBUcBWRrHjTgiBXBeLxDZQN5Z4QX2fBEah6aHklJby1wtowag_fkQb6IR_JiNz4QF_oMY_arzr-Tv9OSKD7jB2w0vbwJ",
    cta: "Demo Access",
    hasSecondaryButton: true,
    reverse: true,
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#1e1b14]">
      {/* Custom marble background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, rgba(200, 164, 95, 0.03) 0%, transparent 20%),
            linear-gradient(135deg, rgba(200, 164, 95, 0.03) 0%, transparent 20%),
            radial-gradient(circle at 50% 50%, rgba(30, 27, 20, 1) 0%, rgba(15, 13, 10, 1) 100%)
          `,
        }}
      />

      <Header />

      <main className="relative z-10 flex-1 pt-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto pt-16 pb-16 px-6 text-center">
          <div className="inline-block px-4 py-1 border border-primary/30 mb-6">
            <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold">
              Volume MMXXIV
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white leading-[1.1]">
            Featured <span className="text-primary italic">Projects</span>
          </h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-[#beb29d] font-display italic text-xl max-w-xl mx-auto leading-relaxed">
            Crafting digital excellence with architectural precision and
            high-end aesthetic sensibilities.
          </p>
        </section>

        {/* Projects Container */}
        <div className="max-w-6xl mx-auto px-6 pb-32 space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  project.reverse ? "lg:order-2" : ""
                }`}
              >
                <div
                  className={`p-2 shadow-2xl ${
                    index === 0
                      ? "border border-transparent bg-gradient-to-br from-primary/30 via-[#40392b] to-primary/30"
                      : index === 1
                      ? "bg-[#2e291f] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500"
                      : index === 2
                      ? "bg-black border border-primary/20"
                      : "bg-background-dark border border-primary/40 shadow-[0_0_50px_rgba(200,164,95,0.1)]"
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                  )}
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${
                        index === 2 ? "opacity-90 group-hover:opacity-100" : ""
                      } transition-opacity duration-500`}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 flex flex-col items-start ${
                  project.reverse ? "lg:order-1" : ""
                }`}
              >
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  {project.category}
                </span>
                <h3 className="font-display text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/80 font-medium text-sm mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    {project.techIcon}
                  </span>
                  {project.tech}
                </p>
                <p className="text-[#beb29d] text-lg leading-relaxed mb-8 font-light italic">
                  {project.description}
                </p>

                {project.hasSecondaryButton ? (
                  <div className="flex gap-4">
                    <button className="bg-primary/10 border border-primary text-primary px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-background-dark transition-all">
                      Demo Access
                    </button>
                    <button className="border border-white/20 px-6 py-3 text-xs font-bold tracking-widest uppercase hover:border-primary transition-all">
                      Documentation
                    </button>
                  </div>
                ) : (
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/btn flex items-center gap-4 text-white hover:text-primary transition-all"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase">
                      {project.cta}
                    </span>
                    <div className="w-12 h-[1px] bg-white group-hover/btn:bg-primary group-hover/btn:w-16 transition-all"></div>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <h4 className="font-display text-2xl font-bold text-white mb-2 italic">
              Architecture of Code
            </h4>
            <p className="text-[#beb29d] text-sm uppercase tracking-widest">
              © 2024 All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">hub</span>
            </a>
            <a
              href="#"
              className="text-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">
                alternate_email
              </span>
            </a>
            <a
              href="#"
              className="text-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">
                verified_user
              </span>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white text-sm font-medium mb-2">
              Available for select projects.
            </p>
            <a
              href="mailto:hello@developer.com"
              className="text-primary font-display italic text-lg hover:underline decoration-1 underline-offset-4"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
