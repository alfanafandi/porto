const features = [
  {
    icon: "code",
    title: "Bespoke Dev",
    description:
      "Custom React architectures meticulously crafted for unique brand identities and high-performance needs.",
  },
  {
    icon: "stylus_note",
    title: "Creative Direction",
    description:
      "Strategic design language that bridges the gap between digital utility and aesthetic prestige.",
  },
  {
    icon: "layers",
    title: "Motion Design",
    description:
      "Sophisticated micro-interactions and high-end 3D visual storytelling that captures user attention.",
  },
];

export default function Features() {
  return (
    <section className="bg-surface/30 border-t border-white/5 py-24 px-6 md:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </span>
              <h3 className="text-white font-display text-xl">
                {feature.title}
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
