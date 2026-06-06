"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vendor", href: "/vendor" },
  { name: "Signals", href: "/signals" },
  { name: "Academy", href: "/academy" },
  { name: "Market", href: "/market" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-white/10 py-2 shadow-lg shadow-black/40"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/mcex-logo.png"
            alt="MCEX"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-screen"
            style={{
              filter:
                "invert(1) grayscale(1) contrast(200%) sepia(100%) saturate(280%) hue-rotate(350deg) brightness(1.3)",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#d4af37]",
                pathname === link.href
                  ? "text-[#d4af37]"
                  : "text-[var(--color-brand-silver)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full font-medium text-sm transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/50 text-[var(--color-brand-silver)]"
          >
            Contact
          </Link>
          <Link
            href="/academy"
            className="px-4 py-2 rounded-full font-medium text-sm text-black font-bold bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:opacity-90 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
          >
            Join Academy
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                  pathname === link.href
                    ? "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30"
                    : "text-[var(--color-brand-silver)] hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/10">
              <Link
                href="/contact"
                className="text-center py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-[var(--color-brand-silver)]"
              >
                Contact
              </Link>
              <Link
                href="/academy"
                className="text-center py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#d4af37] to-[#e5c158] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Join Academy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
