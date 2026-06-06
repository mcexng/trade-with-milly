"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Alex T.",
      role: "Premium Signal Subscriber",
      text: "Milly's signals are incredibly accurate. Since joining the VIP channel, my portfolio has grown by 140%. The exact entry and exit points take all the emotion out of trading.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      role: "Academy Student",
      text: "I started with zero knowledge about crypto. The mentorship program broke everything down so simply. I now confidently trade futures and manage my risk properly.",
      rating: 5,
    },
    {
      name: "David K.",
      role: "OTC Client",
      text: "The fastest OTC transactions I've experienced. Sent my fiat and got USDT in under 5 minutes. Highly reliable and secure.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "VIP Member",
      text: "The community is fantastic. Milly doesn't just give signals, but explains the 'why' behind every trade. The best crypto education platform out there.",
      rating: 5,
    },
    {
      name: "Elena P.",
      role: "P2P Client",
      text: "Been using Milly for my crypto cashouts for 2 years now. Never had a single issue. The rates are always better than standard exchanges.",
      rating: 5,
    },
    {
      name: "James L.",
      role: "Academy Graduate",
      text: "Mastered technical analysis thanks to Milly. I no longer rely on luck, I trade the charts. Worth every penny.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-purple)]/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              SUCCESS <span className="text-gradient">STORIES</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our successful students and satisfied clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="p-8 h-full flex flex-col relative" glow glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-[var(--color-brand-silver)] text-lg leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--color-brand-purple)] to-[var(--color-brand-cyan)] p-[2px]">
                      <div className="w-full h-full rounded-full bg-[var(--color-brand-black)] flex items-center justify-center font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-[var(--color-brand-cyan)]">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results Snapshot */}
      <section className="py-20 bg-black/40 border-y border-white/5 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Recent Trade Results</h2>
              <p className="text-[var(--color-brand-silver)]/70 mt-2">Verified profits from the VIP Signals Channel</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { pair: "BTC/USDT", profit: "+145%", type: "Long" },
              { pair: "ETH/USDT", profit: "+89%", type: "Long" },
              { pair: "SOL/USDT", profit: "+210%", type: "Long" },
              { pair: "BNB/USDT", profit: "+65%", type: "Short" },
            ].map((trade, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl glass border border-green-500/20 text-center">
                  <div className="text-sm text-[var(--color-brand-silver)] font-medium mb-1">{trade.pair} ({trade.type})</div>
                  <div className="text-2xl md:text-3xl font-black text-green-400">{trade.profit}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
