"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Copy, CreditCard, Wallet, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PaymentPage() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  const paymentMethods = [
    {
      id: "usdt",
      title: "USDT (TRC20)",
      icon: Wallet,
      address: "TYourUSDTAddressHere...",
      color: "text-green-400"
    },
    {
      id: "btc",
      title: "Bitcoin (BTC)",
      icon: Wallet,
      address: "1YourBTCAddressHere...",
      color: "text-orange-400"
    },
    {
      id: "eth",
      title: "Ethereum (ERC20)",
      icon: Wallet,
      address: "0xYourETHAddressHere...",
      color: "text-blue-400"
    },
    {
      id: "bank",
      title: "Nigeria Bank Transfer",
      icon: CreditCard,
      address: "Account Name: Milly Crypto Exchange\nAccount Number: 0123456789\nBank: Access Bank",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              COMPLETE <span className="text-gradient">PAYMENT</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-2xl mx-auto mb-4">
              Premium VIP Subscription: <span className="text-white font-bold">₦50,000 / month</span>
            </p>
            <p className="text-[var(--color-brand-silver)]/60 text-sm max-w-xl mx-auto">
              Please choose a payment method below. Once you have completed the payment, send your proof of payment via WhatsApp or Telegram to get instant access.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method, i) => (
              <AnimatedSection key={method.id} delay={i * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col hover:border-[var(--color-brand-cyan)]/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${method.color}`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-white">{method.title}</h3>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-4 flex-1 relative group">
                    <pre className="text-sm text-[var(--color-brand-silver)] whitespace-pre-wrap break-all font-mono">
                      {method.address}
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(method.address, method.id)}
                      className="absolute top-2 right-2 p-2 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--color-brand-cyan)]/20 hover:text-[var(--color-brand-cyan)]"
                      title="Copy"
                    >
                      {copied === method.id ? <span className="text-xs font-bold text-green-400">Copied!</span> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center p-8 rounded-2xl glass border border-[var(--color-brand-purple)]/30">
              <h3 className="text-xl font-bold text-white mb-4">Done with Payment?</h3>
              <p className="text-[var(--color-brand-silver)]/80 mb-6">
                Send your payment receipt / proof of transaction to us immediately to activate your VIP access.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://wa.me/2347077719341" target="_blank" className="px-8 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Confirm via WhatsApp
                </Link>
                <Link href="https://t.me/bigmilly01" target="_blank" className="px-8 py-3 rounded-xl font-bold text-white bg-[#0088cc] hover:bg-[#007ab8] transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Confirm via Telegram
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
