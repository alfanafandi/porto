"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-16 lg:px-24 bg-background-dark/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="size-8 flex items-center justify-center border border-primary/40 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-xl">
            architecture
          </span>
        </div>
        <h2 className="text-white text-lg font-display font-bold tracking-[0.2em] transition-all group-hover:tracking-[0.3em]">
          LUXE.DEV
        </h2>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <Link
          href="/portfolio"
          className="text-white/70 text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="text-white/70 text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white/70 text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white/70 text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="flex items-center justify-center rounded-sm border border-primary/30 px-6 py-2 bg-transparent hover:bg-primary/10 transition-all gold-glow group"
      >
        <span className="text-primary text-xs uppercase tracking-widest font-bold group-hover:text-white transition-colors">
          Let&apos;s Talk
        </span>
      </Link>
    </header>
  );
}
