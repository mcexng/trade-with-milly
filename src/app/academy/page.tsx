"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { BookOpen, LineChart, Lock, MonitorPlay, Users2 } from "lucide-react";

export default function AcademyPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-neon)]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              TRADING <span className="text-gradient">ACADEMY</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto">
              From beginner to advanced. Master technical analysis, risk management, and profitable trading strategies with expert mentorship.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16">What You Will Learn</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Crypto Fundamentals", desc: "Understand blockchain, wallets, and how cryptocurrency markets operate." },
              { icon: LineChart, title: "Technical Analysis", desc: "Master candlestick reading, chart patterns, and indicators." },
              { icon: Lock, title: "Risk Management", desc: "Protect your capital with proper position sizing and stop loss strategies." },
              { icon: MonitorPlay, title: "Futures Trading", desc: "Learn how to use leverage responsibly to maximize gains." },
              { icon: Users2, title: "P2P Trading", desc: "Safely navigate peer-to-peer exchanges and secure OTC deals." },
            ].map((module, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-brand-cyan)]/10 flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-[var(--color-brand-cyan)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                  <p className="text-[var(--color-brand-silver)]/70 flex-1">{module.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 relative mt-12 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Apply for Mentorship</h2>
                
                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-3 rounded-2xl glass border border-[#d4af37]/40 mb-6 bg-gradient-to-r from-[#d4af37]/10 to-[#e5c158]/5">
                  <span className="text-3xl font-black text-gradient">₦300,000</span>
                  <span className="text-[var(--color-brand-silver)] font-medium text-center sm:text-left">/ Mentorship + 1 Month Free Premium Signals</span>
                </div>

                <p className="text-[var(--color-brand-silver)]/80">
                  Fill out the form below to register for the next academy batch.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8 md:p-10" glow glowColor="neon">
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const phone = formData.get("phone");
                    const telegram = formData.get("telegram");
                    const country = formData.get("country");
                    const experience = formData.get("experience");
                    const session = formData.get("session");

                    const message = `New Mentorship Application\n\nName: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nTelegram Username: ${telegram}\nCountry: ${country}\nExperience Level: ${experience}\nPreferred Session: ${session}`;
                    
                    window.open(`https://t.me/bigmilly01?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Full Name</label>
                      <input name="name" type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email Address</label>
                      <input name="email" type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Phone / WhatsApp</label>
                      <input name="phone" type="tel" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors" placeholder="+1234567890" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Telegram Username</label>
                      <input name="telegram" type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors" placeholder="@username" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Country</label>
                      <input name="country" type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors" placeholder="Your Country" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Trading Experience Level</label>
                    <select name="experience" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors appearance-none">
                      <option value="Beginner">Beginner (No experience)</option>
                      <option value="Intermediate">Intermediate (Some experience)</option>
                      <option value="Advanced">Advanced (Looking to refine skills)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Preferred Learning Session</label>
                    <select name="session" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors appearance-none">
                      <option value="Weekend Classes">Weekend Classes</option>
                      <option value="Evening Sessions">Evening Sessions</option>
                      <option value="One-on-One Coaching">One-on-One Coaching</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full py-4 mt-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    Submit Application
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
