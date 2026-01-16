import Image from "next/image";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  aspectRatio?: string;
  colSpan?: string;
}

export default function ProjectCard({
  image,
  category,
  title,
  aspectRatio = "aspect-[4/3]",
  colSpan = "md:col-span-6",
}: ProjectCardProps) {
  return (
    <div
      className={`${colSpan} group project-card relative overflow-hidden bg-stone-900 border border-stone-800 rounded-sm ${aspectRatio}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
      />
      <div className="overlay absolute inset-0 bg-background-dark/80 opacity-0 transition-opacity duration-500 p-8 flex flex-col justify-end border-4 border-primary/20 m-2">
        <span className="text-primary text-[10px] uppercase font-bold tracking-widest mb-2">
          {category}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
          {title}
        </h3>
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="text-stone-400 text-xs uppercase tracking-widest">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
}
