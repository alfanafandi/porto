import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "code",
    title: "Bespoke Web Development",
    description:
      "Custom React and Next.js architectures meticulously crafted for unique brand identities and high-performance needs. From landing pages to complex web applications.",
    features: [
      "Custom React/Next.js Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Integration & Development",
    ],
  },
  {
    icon: "stylus_note",
    title: "Creative Direction",
    description:
      "Strategic design language that bridges the gap between digital utility and aesthetic prestige. We create visual identities that resonate with your audience.",
    features: [
      "Brand Identity Design",
      "UI/UX Design",
      "Design Systems",
      "Art Direction",
    ],
  },
  {
    icon: "layers",
    title: "Motion Design",
    description:
      "Sophisticated micro-interactions and high-end 3D visual storytelling that captures user attention and creates memorable digital experiences.",
    features: [
      "Micro-interactions",
      "3D Animations",
      "Video Production",
      "Interactive Experiences",
    ],
  },
  {
    icon: "cloud",
    title: "Digital Infrastructure",
    description:
      "Robust cloud architecture and deployment strategies ensuring your digital presence is fast, secure, and scalable across the globe.",
    features: [
      "Cloud Architecture",
      "Performance Optimization",
      "Security Implementation",
      "DevOps & CI/CD",
    ],
  },
  {
    icon: "analytics",
    title: "Strategy & Consulting",
    description:
      "Data-driven insights and strategic planning to help your brand navigate the digital landscape with precision and purpose.",
    features: [
      "Digital Strategy",
      "User Research",
      "Analytics & Insights",
      "Growth Consulting",
    ],
  },
  {
    icon: "support_agent",
    title: "Ongoing Support",
    description:
      "Dedicated maintenance and support to ensure your digital products continue to perform at the highest level long after launch.",
    features: [
      "24/7 Monitoring",
      "Regular Updates",
      "Performance Reports",
      "Priority Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-dark">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-24">
          <div className="text-center">
            <span className="text-primary tracking-[0.4em] text-xs font-semibold uppercase block mb-4">
              What We Offer
            </span>
            <h1 className="font-display gold-gradient-text text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions tailored to elevate your brand.
              From concept to execution, we deliver excellence at every stage.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-surface/30 border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-500 hover:bg-surface/50"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center size-14 border border-primary/30 rounded-sm group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-stone-500 text-xs"
                    >
                      <span className="h-[1px] w-3 bg-primary/50"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">
          <div className="text-center mb-16">
            <span className="text-primary tracking-[0.4em] text-xs font-semibold uppercase block mb-4">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding your vision, goals, and target audience through in-depth consultation.",
              },
              {
                number: "02",
                title: "Strategy",
                desc: "Developing a comprehensive roadmap tailored to your unique requirements.",
              },
              {
                number: "03",
                title: "Creation",
                desc: "Bringing your vision to life with meticulous attention to every detail.",
              },
              {
                number: "04",
                title: "Launch",
                desc: "Deploying your project with precision and providing ongoing support.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl text-white font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">
          <div className="bg-surface/50 border border-primary/20 rounded-sm p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-5xl text-white font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-10">
              Let&apos;s collaborate to create something extraordinary. Share
              your vision with us and we&apos;ll bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="min-w-[200px] rounded-sm bg-primary py-4 px-8 text-background-dark text-xs uppercase tracking-widest font-black transition-transform hover:scale-105 active:scale-95 gold-glow text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="min-w-[200px] rounded-sm border border-white/10 py-4 px-8 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
