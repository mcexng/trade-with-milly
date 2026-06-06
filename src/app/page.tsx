"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Shield, Users, Zap, TrendingUp, Award, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-purple)]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#d4af37]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-sm font-medium text-[#d4af37]">Trusted Crypto Trader Since 2016</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              TRADE WITH <span className="text-gradient">MILLY</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Professional Crypto Trader, Vendor & Mentor. Master the markets with premium signals and elite education.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/vendor" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2">
                Trade Crypto Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/academy" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10">
                Join Trading Academy
              </Link>
              <Link href="/signals" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center gap-2">
                Get Signals
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Award, label: "Years Experience", value: "8+" },
              { icon: TrendingUp, label: "Successful Trades", value: "10k+" },
              { icon: Users, label: "Active Students", value: "2,500+" },
              { icon: Zap, label: "Signal Subscribers", value: "5,000+" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="p-8 text-center flex flex-col items-center justify-center h-full group" glow glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-[var(--color-brand-silver)]/70 font-medium">{stat.label}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Complete Crypto Ecosystem</h2>
              <p className="text-lg text-[var(--color-brand-silver)]/70 max-w-2xl mx-auto">
                Everything you need to succeed in the cryptocurrency market under one premium platform.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <GlassCard className="p-8 h-full flex flex-col" glow glowColor="neon">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-brand-cyan)]/20 to-[var(--color-brand-purple)]/20 flex items-center justify-center mb-6 border border-white/10">
                  <Shield className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Trusted OTC Vendor</h3>
                <p className="text-[var(--color-brand-silver)]/70 mb-8 flex-1">
                  Fast, secure, and reliable cryptocurrency exchange. Buy and sell BTC, ETH, USDT, and more with competitive rates.
                </p>
                <Link href="/vendor" className="text-[var(--color-brand-cyan)] font-medium flex items-center gap-2 hover:gap-4 transition-all w-fit">
                  Exchange Crypto <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8 h-full flex flex-col" glow glowColor="purple">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-brand-purple)]/20 to-[var(--color-brand-cyan)]/20 flex items-center justify-center mb-6 border border-white/10">
                  <BarChart3 className="w-8 h-8 text-[var(--color-brand-purple)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Premium Signals</h3>
                <p className="text-[var(--color-brand-silver)]/70 mb-8 flex-1">
                  Daily high-accuracy trading signals with exact entry points, stop loss, and take profit targets.
                </p>
                <Link href="/signals" className="text-[var(--color-brand-purple)] font-medium flex items-center gap-2 hover:gap-4 transition-all w-fit">
                  View Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlassCard className="p-8 h-full flex flex-col" glow glowColor="cyan">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-cyan)]/10 flex items-center justify-center mb-6 border border-white/10">
                  <BookOpen className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Trading Academy</h3>
                <p className="text-[var(--color-brand-silver)]/70 mb-8 flex-1">
                  From beginner to advanced. Learn technical analysis, risk management, and profitable trading strategies.
                </p>
                <Link href="/academy" className="text-[var(--color-brand-cyan)] font-medium flex items-center gap-2 hover:gap-4 transition-all w-fit">
                  Start Learning <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
