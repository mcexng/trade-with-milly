"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              ABOUT <span className="text-gradient">MILLY</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto">
              Started in 2016. Grown into a professional crypto trader, vendor, mentor, and digital asset consultant.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Biography & Image Placeholder */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-square md:aspect-[4/5] w-full rounded-3xl overflow-hidden glass border border-[var(--color-brand-cyan)]/20 p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-brand-midnight)] to-[var(--color-brand-dark)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/milly-profile.jpg')] bg-cover bg-center opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-midnight)] via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">The Journey to Mastery</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] rounded-full" />
                
                <p className="text-[var(--color-brand-silver)] leading-relaxed text-lg">
                  Milly started cryptocurrency trading in 2016 and has grown into a professional crypto trader, vendor, mentor, and digital asset consultant with years of market experience.
                </p>
                <p className="text-[var(--color-brand-silver)] leading-relaxed text-lg">
                  Over the years, Milly has helped beginners and experienced traders understand cryptocurrency markets, risk management, profitable trading strategies, and secure crypto transactions.
                </p>
                <p className="text-[var(--color-brand-silver)] leading-relaxed text-lg mt-4">
                  In 2019, Milly founded and registered a crypto vendor and exchange company called Milly Crypto Exchange. Today, in 2025, its name and logo are widely recognized as MCEX. MCEX seamlessly handles over 500 monthly transactions and is continuously expanding its operations.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Crypto Expertise",
                    "Market Analysis",
                    "OTC Trading",
                    "P2P Exchange",
                    "Blockchain Knowledge",
                    "Investment Guidance"
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-[var(--color-brand-silver)]">
                      <ShieldCheck className="w-5 h-5 text-[var(--color-brand-cyan)]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16">Professional Timeline</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2016", title: "The Beginning", desc: "Started the journey into cryptocurrency trading and blockchain technology." },
              { year: "2018", title: "Mastering the Market", desc: "Developed robust risk management and profitable trading strategies during market volatility." },
              { year: "2019", title: "Founded MCEX", desc: "Registered Milly Crypto Exchange (now recognized as MCEX), which handles over 500 monthly transactions and continues to expand." },
              { year: "2020", title: "OTC Vendor Launch", desc: "Established a secure peer-to-peer crypto exchange service for fast transactions." },
              { year: "2022", title: "Trading Academy", desc: "Started mentoring beginners and experienced traders to achieve financial independence." },
              { year: "2024", title: "Premium Signals", desc: "Launched daily high-accuracy trading signals and community support." },
            ].map((item, i, arr) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 relative">
                  {/* Timeline Line */}
                  {i !== arr.length - 1 && <div className="absolute left-8 top-16 bottom-[-32px] w-0.5 bg-gradient-to-b from-[var(--color-brand-cyan)]/50 to-transparent" />}
                  
                  <div className="w-16 h-16 rounded-full glass border border-[var(--color-brand-cyan)] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <span className="font-bold text-[var(--color-brand-cyan)]">{item.year}</span>
                  </div>
                  <GlassCard className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[var(--color-brand-silver)]/80">{item.desc}</p>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certificates */}
      <section className="py-20 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16">Achievements</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Top Crypto Vendor 2023", desc: "Recognized for secure and fast OTC transactions." },
              { icon: GraduationCap, title: "Master Trader Certification", desc: "Advanced technical analysis and market psychology." },
              { icon: Briefcase, title: "Certified Blockchain Expert", desc: "Deep understanding of decentralized finance (DeFi)." },
            ].map((achieve, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="p-8 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <achieve.icon className="w-8 h-8 text-[var(--color-brand-purple)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achieve.title}</h3>
                  <p className="text-[var(--color-brand-silver)]/70 text-sm">{achieve.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
