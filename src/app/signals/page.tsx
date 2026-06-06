"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, BarChart2, Check, Crosshair, ShieldAlert, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function SignalsPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              TRADING <span className="text-gradient">SIGNALS</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-2xl mx-auto">
              Get exact entry points, stop loss, and take profit targets. Maximize your profits with our high-accuracy daily signals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Target, label: "Precise Entry" },
              { icon: ShieldAlert, label: "Stop Loss" },
              { icon: Crosshair, label: "Take Profit" },
              { icon: BarChart2, label: "Risk Management" },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/5 text-center">
                  <feature.icon className="w-8 h-8 text-[var(--color-brand-purple)] mb-3" />
                  <span className="font-bold text-white">{feature.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 relative bg-black/40 border-y border-white/5 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16">Choose Your Plan</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <AnimatedSection delay={0.1}>
              <GlassCard className="p-8 h-full flex flex-col relative overflow-hidden border border-white/10 hover:border-white/20">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Free Channel</h3>
                  <div className="text-4xl font-black text-white">$0 <span className="text-lg text-[var(--color-brand-silver)]/50 font-normal">/forever</span></div>
                  <p className="text-[var(--color-brand-silver)]/70 mt-4">Basic market updates and occasional free setups to get you started.</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "1-2 Free Signals Per Week",
                    "General Market Analysis",
                    "Basic Crypto News",
                    "Community Chat Access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-brand-silver)]">
                      <Check className="w-5 h-5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="https://t.me/mcex_ng" target="_blank" className="w-full py-4 rounded-xl font-bold text-white glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10">
                  Join Free Telegram
                </Link>
              </GlassCard>
            </AnimatedSection>

            {/* Premium Plan */}
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8 h-full flex flex-col relative overflow-hidden" glow glowColor="purple">
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[var(--color-brand-purple)] to-[var(--color-brand-cyan)] text-xs font-bold px-3 py-1 rounded-full text-white">
                  RECOMMENDED
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium VIP</h3>
                  <div className="text-4xl font-black text-gradient">₦50,000 <span className="text-lg text-[var(--color-brand-silver)]/50 font-normal">/month</span></div>
                  <p className="text-[var(--color-brand-silver)]/70 mt-4">Full access to all our high-accuracy daily trading signals and VIP mentorship.</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "3-5 Premium Signals Daily",
                    "Exact Entry, TP & SL Targets",
                    "Leverage Suggestions",
                    "Detailed Trade Explanations",
                    "24/7 VIP Support",
                    "Early Gem Calls"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-[var(--color-brand-cyan)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/payment" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[var(--color-brand-purple)] to-[var(--color-brand-cyan)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  Subscribe Now <ArrowRight className="w-5 h-5" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
