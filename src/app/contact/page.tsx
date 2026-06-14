"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, MapPin, MessageCircle, Send, AtSign, PlaySquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-neon)]/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              GET IN <span className="text-gradient">TOUCH</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-2xl mx-auto">
              Ready to trade, join the academy, or have a question? Contact Milly through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Socials */}
            <div className="space-y-8">
              <AnimatedSection>
                <GlassCard className="p-8" glow glowColor="cyan">
                  <h2 className="text-2xl font-bold text-white mb-6">Direct Contact</h2>
                  <div className="space-y-6">
                    <Link href="https://wa.me/2347077719341" target="_blank" className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle className="w-7 h-7 text-[#25D366]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--color-brand-silver)]/70">WhatsApp</div>
                        <div className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">+234 7077719341</div>
                      </div>
                    </Link>

                    <Link href="https://t.me/bigmilly01" target="_blank" className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-full bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-colors">
                        <Send className="w-7 h-7 text-[#0088cc]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--color-brand-silver)]/70">Telegram</div>
                        <div className="text-lg font-bold text-white group-hover:text-[#0088cc] transition-colors">@bigmilly01</div>
                      </div>
                    </Link>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--color-brand-silver)]/70">Email</div>
                        <div className="text-lg font-bold text-white">millycryptoexch@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="#" className="flex items-center justify-center gap-3 p-4 rounded-2xl glass border border-white/5 hover:border-white/20 transition-colors">
                    <AtSign className="w-6 h-6 text-[#1DA1F2]" />
                    <span className="font-bold text-white">Twitter</span>
                  </Link>
                  <Link href="#" className="flex items-center justify-center gap-3 p-4 rounded-2xl glass border border-white/5 hover:border-white/20 transition-colors">
                    <PlaySquare className="w-6 h-6 text-[#FF0000]" />
                    <span className="font-bold text-white">YouTube</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              <GlassCard className="p-8 h-full" glow glowColor="purple">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const subject = formData.get("subject");
                    const message = formData.get("message");

                    const text = `New Contact Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`;
                    
                    window.open(`https://t.me/bigmilly01?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Name</label>
                    <input name="name" type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-purple)] transition-colors" placeholder="Your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Email</label>
                    <input name="email" type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-purple)] transition-colors" placeholder="Your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Subject</label>
                    <select name="subject" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-purple)] transition-colors appearance-none">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Crypto Vendor Services">Crypto Vendor Services</option>
                      <option value="Trading Signals">Trading Signals</option>
                      <option value="Mentorship Academy">Mentorship Academy</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Message</label>
                    <textarea name="message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-purple)] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[var(--color-brand-purple)] to-[var(--color-brand-cyan)] hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="w-full h-[400px] rounded-3xl glass border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center p-6 glass rounded-2xl border border-[var(--color-brand-cyan)]/30 backdrop-blur-md">
                  <MapPin className="w-10 h-10 text-[var(--color-brand-cyan)] mb-2" />
                  <h3 className="font-bold text-xl text-white">Global Reach</h3>
                  <p className="text-[var(--color-brand-silver)]">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
