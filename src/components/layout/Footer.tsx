import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook, FaTelegramPlane } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <img
              src="/mcex-logo.png"
              alt="MCEX"
              className="h-14 w-auto object-contain mix-blend-screen"
              style={{
                filter:
                  "invert(1) grayscale(1) contrast(200%) sepia(100%) saturate(280%) hue-rotate(350deg) brightness(1.3)",
              }}
            />
            <p className="text-[var(--color-brand-silver)] text-sm leading-relaxed opacity-80">
              Professional cryptocurrency trader, vendor, mentor, and digital asset consultant helping you navigate the crypto markets since 2016.
            </p>
            <div className="flex space-x-3 pt-1">
              <Link
                href="https://instagram.com/mcex.ng"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 border border-white/10 transition-colors"
              >
                <FaInstagram className="w-4 h-4 text-[var(--color-brand-silver)]" />
              </Link>
              <Link
                href="https://tiktok.com/@mcex.ng"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 border border-white/10 transition-colors"
              >
                <FaTiktok className="w-4 h-4 text-[var(--color-brand-silver)]" />
              </Link>
              <Link
                href="https://facebook.com/millycryptoexchange"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 border border-white/10 transition-colors"
              >
                <FaFacebook className="w-4 h-4 text-[var(--color-brand-silver)]" />
              </Link>
              <Link
                href="https://t.me/mcex_ng"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 border border-white/10 transition-colors"
              >
                <FaTelegramPlane className="w-4 h-4 text-[var(--color-brand-silver)]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[var(--color-brand-silver)] opacity-80">
              {[
                { label: "About Milly", href: "/about" },
                { label: "Crypto Vendor", href: "/vendor" },
                { label: "Trading Signals", href: "/signals" },
                { label: "Trading Academy", href: "/academy" },
                { label: "Live Market", href: "/market" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#d4af37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-[var(--color-brand-silver)] opacity-80">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <Link
                  href="https://wa.me/2347077719341"
                  target="_blank"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp: +234 7077719341
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Send className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <Link
                  href="https://t.me/bigmilly01"
                  target="_blank"
                  className="hover:text-blue-400 transition-colors"
                >
                  Telegram: @bigmilly01
                </Link>
              </li>
              <li className="text-xs break-all opacity-70">
                millycryptoexch@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-[var(--color-brand-silver)] opacity-80 mb-4">
              Subscribe for weekly market updates and free signals.
            </p>
            <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-[#d4af37] text-white placeholder-white/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-black font-bold rounded-lg px-4 py-2 text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-brand-silver)] opacity-60">
          <p>© {new Date().getFullYear()} Trade With Milly. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/risk" className="hover:text-white transition-colors">Risk Warning</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
