"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#1e1b14]/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">
              architecture
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tighter text-white uppercase italic">
            Portfolio
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/portfolio"
            className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
          >
            Curated Work
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
          >
            Artist Bio
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
          >
            Manifesto
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
          >
            Inquiry
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden sm:flex h-11 px-8 items-center justify-center bg-primary text-background-dark font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300"
          >
            Dossier
          </Link>
          <div
            className="size-10 rounded-full border border-primary/30 bg-center bg-cover"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZElG9jsYhGVE_Fo1I8TjwPwR_fjWQSuZM4LQ-gN27SWV9zWXX1Xv03QJWifI4wsp4DVFJGbTvIt-s63Vt3pfh5hD33VxygM0ZLdbW1dDt7UicqpZ6BAJHdgvzEPg0jHQJgEMSAlfKhMW48DvJG-99zdFyiUt_TyI826BvqY4alRb-t7LVZJElMbTD9KETJ9HPoBr2nSxaasxNm-UcXg0FcTnxnch_bfZCsDygLCMRCLhvs7AtI2rtYY_4GDpHZ-5MFSp0rV8GaE7E')`,
            }}
          />
        </div>
      </div>
    </header>
  );
}
