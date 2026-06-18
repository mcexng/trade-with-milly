"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Wallet } from "lucide-react";
import Link from "next/link";
import { TradeForm } from "@/components/ui/TradeForm";

export default function VendorPage() {
  const cryptos = ["BTC", "ETH", "USDT", "BNB", "SOL", "XRP", "DOGE", "USDC"];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-purple)]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              CRYPTO <span className="text-gradient">VENDOR</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-2xl mx-auto">
              Fast, secure, and reliable OTC cryptocurrency exchange. Buy and sell with competitive rates and 24/7 availability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Available Cryptos */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-center mb-8">Supported Cryptocurrencies</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {cryptos.map((coin, i) => (
                <div key={i} className="px-6 py-3 rounded-xl glass border border-white/10 text-lg font-bold hover:border-[var(--color-brand-cyan)] hover:text-[var(--color-brand-cyan)] transition-colors cursor-pointer">
                  {coin}
                </div>
              ))}
              <div className="px-6 py-3 rounded-xl glass border border-white/10 text-lg font-bold text-[var(--color-brand-silver)]/50">
                + Many More
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wallet, title: "Buy & Sell Crypto", desc: "Easily exchange your fiat for crypto and vice versa." },
              { icon: Clock, title: "Fast Transactions", desc: "Get your funds or crypto in minutes, not hours." },
              { icon: ShieldCheck, title: "Secure Payments", desc: "100% secure escrow and direct bank transfers." },
              { icon: CheckCircle2, title: "24/7 Availability", desc: "Trade anytime, day or night, including weekends." },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-[var(--color-brand-cyan)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[var(--color-brand-silver)]/70 text-sm">{feature.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Process */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Contact Milly", desc: "Reach out via WhatsApp or Telegram with your trade request." },
              { step: "02", title: "Agree on Rate", desc: "We provide the best real-time market rate for your transaction." },
              { step: "03", title: "Instant Transfer", desc: "Send funds/crypto and receive your equivalent instantly." },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="relative text-center">
                  {i !== 2 && <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-[var(--color-brand-cyan)] to-transparent opacity-30" />}
                  <div className="w-16 h-16 rounded-full glass border border-[var(--color-brand-purple)] flex items-center justify-center mx-auto mb-6 relative z-10 text-xl font-bold text-[var(--color-brand-purple)]">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[var(--color-brand-silver)]/70">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Form */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <TradeForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
