import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Architectural Design",
    title: "The Obsidian Manor",
    aspectRatio: "aspect-[16/10]",
    colSpan: "md:col-span-7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    category: "Interior Curation",
    title: "Golden Ratio UI",
    aspectRatio: "aspect-[4/5]",
    colSpan: "md:col-span-5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    category: "Fashion Editorial",
    title: "Noir Editorial",
    aspectRatio: "aspect-square",
    colSpan: "md:col-span-4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    category: "Branding",
    title: "Luxe Brand Identity",
    aspectRatio: "aspect-[21/9]",
    colSpan: "md:col-span-8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    category: "Concept Architecture",
    title: "Abstract Structures",
    aspectRatio: "aspect-[4/3]",
    colSpan: "md:col-span-6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Digital Products",
    title: "Ethereal Spaces",
    aspectRatio: "aspect-[4/3]",
    colSpan: "md:col-span-6",
  },
];

const filters = [
  { label: "All Works", active: true },
  { label: "Architectural", active: false },
  { label: "Digital Spaces", active: false },
  { label: "High Fashion", active: false },
  { label: "Identity", active: false },
];

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-dark">
      <Header />

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16 pt-32">
        {/* Hero Title */}
        <div className="flex flex-col items-center mb-20">
          <h1 className="font-display text-stroke-gold text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-none opacity-80">
            Portfolio
          </h1>
          <p className="font-display italic text-stone-500 mt-[-1rem] text-lg md:text-xl">
            Selected Works 2024
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap border-b border-stone-200/10 gap-8">
            {filters.map((filter, index) => (
              <Link
                key={index}
                href="#"
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 ${
                  filter.active
                    ? "border-primary text-primary"
                    : "border-transparent text-stone-400 hover:text-stone-200"
                } transition-colors`}
              >
                <p className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  {filter.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              aspectRatio={project.aspectRatio}
              colSpan={project.colSpan}
            />
          ))}
        </div>

        {/* View More */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <button className="group flex items-center justify-center border border-stone-700 px-10 py-5 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-[0.3em] group-hover:text-primary mr-3">
              Examine More Archive
            </span>
            <span className="material-symbols-outlined text-stone-500 group-hover:text-primary transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          <p className="text-[10px] text-stone-500 uppercase tracking-widest">
            Showing 6 of 42 Projects
          </p>
        </div>
      </main>

      {/* Contact Banner */}
      <section className="bg-stone-900 border-t border-stone-800 py-20 px-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="font-display text-4xl text-white font-bold mb-2">
              Have a vision?
            </h2>
            <p className="text-stone-400 max-w-sm">
              Elevating the digital landscape through meticulous design and
              sophisticated engineering.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <a
              href="mailto:hello@luxe.dev"
              className="text-2xl font-display text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-colors"
            >
              hello@luxe.dev
            </a>
            <div className="flex gap-6 mt-4">
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-widest text-stone-500 hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-widest text-stone-500 hover:text-primary transition-colors"
              >
                Dribbble
              </a>
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-widest text-stone-500 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
