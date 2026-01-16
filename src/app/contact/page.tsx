import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-dark">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-16">
        <div className="max-w-4xl w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <span className="text-primary tracking-[0.4em] text-xs font-semibold uppercase block mb-4">
              Get In Touch
            </span>
            <h1 className="font-display gold-gradient-text text-5xl md:text-7xl font-black tracking-tight mb-6">
              Let&apos;s Create
              <br />
              Something Great
            </h1>
            <p className="text-stone-400 max-w-md mx-auto">
              Ready to elevate your digital presence? Let&apos;s discuss your
              vision and bring it to life with precision and elegance.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                Project Type
              </label>
              <select className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:border-primary focus:outline-none transition-colors">
                <option value="" className="bg-background-dark">
                  Select a service
                </option>
                <option value="web" className="bg-background-dark">
                  Web Development
                </option>
                <option value="brand" className="bg-background-dark">
                  Brand Identity
                </option>
                <option value="motion" className="bg-background-dark">
                  Motion Design
                </option>
                <option value="consulting" className="bg-background-dark">
                  Consulting
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
              <p className="text-stone-500 text-sm">
                Or email directly at{" "}
                <a
                  href="mailto:hello@luxe.dev"
                  className="text-primary hover:underline"
                >
                  hello@luxe.dev
                </a>
              </p>
              <button
                type="submit"
                className="min-w-[200px] rounded-sm bg-primary py-4 px-8 text-background-dark text-xs uppercase tracking-widest font-black transition-transform hover:scale-105 active:scale-95 gold-glow"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-20 pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
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
                LinkedIn
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
                Twitter
              </a>
            </div>
            <p className="text-stone-600 text-xs">
              Based in Jakarta, Indonesia • Available Worldwide
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
