"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Rates = {
  [key: string]: {
    buy: number;
    sell: number;
  };
};

export function TradeForm() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [crypto, setCrypto] = useState<"USDT" | "BTC" | "ETH" | "OTHERS">("USDT");
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    // Fetch rates from the public rates.json file
    const fetchRates = async () => {
      try {
        // Add a timestamp to prevent aggressive caching
        const res = await fetch(`/rates.json?t=${new Date().getTime()}`);
        if (!res.ok) throw new Error("Failed to load rates");
        const data = await res.json();
        setRates(data);
      } catch (error) {
        console.error("Error loading rates:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRates();
  }, []);

  const currentRate = rates ? rates[crypto]?.[tradeType] : 0;
  
  // Calculate expected NGN value
  const numAmount = parseFloat(amount);
  const expectedNgn = !isNaN(numAmount) && currentRate ? numAmount * currentRate : 0;
  
  // Format message for WhatsApp/Telegram
  const message = `Hello Milly, I would like to *${tradeType.toUpperCase()}* ${amount || 0} ${crypto}.
Rate: ₦${currentRate}/$
Expected NGN: ₦${expectedNgn.toLocaleString()}

Please process my transaction.`;

  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/2347077719341?text=${encodedMessage}`;
  const telegramUrl = `https://t.me/bigmilly01?text=${encodedMessage}`;

  return (
    <div className="w-full glass rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden" id="trade-form">
      {/* Rate Display Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--color-brand-cyan)]/20 to-[var(--color-brand-purple)]/20 border-b border-white/5 p-3 flex justify-center items-center gap-4 text-sm font-medium">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live Rates (NGN/$)
        </span>
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin text-[var(--color-brand-silver)]" />
        ) : rates ? (
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar px-2">
            <span className="text-[var(--color-brand-silver)]">
              USDT: Buy ₦{rates["USDT"]?.buy} / Sell ₦{rates["USDT"]?.sell}
            </span>
            <span className="text-[var(--color-brand-silver)]">
              BTC: Buy ₦{rates["BTC"]?.buy} / Sell ₦{rates["BTC"]?.sell}
            </span>
            <span className="text-[var(--color-brand-silver)]">
              ETH: Buy ₦{rates["ETH"]?.buy} / Sell ₦{rates["ETH"]?.sell}
            </span>
          </div>
        ) : (
          <span className="text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> Rates temporarily unavailable
          </span>
        )}
      </div>

      <div className="pt-12 space-y-8">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Trade Calculator</h2>
          <p className="text-[var(--color-brand-silver)]/80 text-sm">
            Fill in the details to get your expected payout, then proceed to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Side */}
          <div className="space-y-6">
            
            {/* Trade Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white">I want to:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTradeType("buy")}
                  className={cn(
                    "py-3 rounded-xl border font-bold transition-all",
                    tradeType === "buy" 
                      ? "bg-green-500/20 border-green-500/50 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
                      : "bg-white/5 border-white/10 text-[var(--color-brand-silver)] hover:bg-white/10"
                  )}
                >
                  BUY Crypto
                </button>
                <button
                  onClick={() => setTradeType("sell")}
                  className={cn(
                    "py-3 rounded-xl border font-bold transition-all",
                    tradeType === "sell" 
                      ? "bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]" 
                      : "bg-white/5 border-white/10 text-[var(--color-brand-silver)] hover:bg-white/10"
                  )}
                >
                  SELL Crypto
                </button>
              </div>
            </div>

            {/* Crypto Select */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white">Select Asset:</label>
              <div className="grid grid-cols-4 gap-2">
                {(["USDT", "BTC", "ETH", "OTHERS"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCrypto(c)}
                    className={cn(
                      "py-2 px-1 text-xs sm:text-sm rounded-lg border font-medium transition-all text-center",
                      crypto === c
                        ? "bg-[var(--color-brand-cyan)]/20 border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                        : "bg-white/5 border-white/10 text-[var(--color-brand-silver)] hover:bg-white/10"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white">Amount (in USD Value):</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[var(--color-brand-silver)]">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 100"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                />
              </div>
            </div>
            
          </div>

          {/* Result Side */}
          <div className="bg-black/30 rounded-2xl p-6 border border-white/5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-[var(--color-brand-silver)]">Current Rate</span>
                <span className="font-bold text-white text-xl">₦{currentRate || 0}/$</span>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-[var(--color-brand-silver)] text-lg">
                  {tradeType === "buy" ? "You Pay (NGN)" : "You Receive (NGN)"}
                </span>
                <span className="font-black text-3xl text-gradient">
                  ₦{expectedNgn.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link 
                href={whatsappUrl} 
                target="_blank" 
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all"
              >
                Trade via WhatsApp <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href={telegramUrl} 
                target="_blank" 
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-[#0088cc] hover:bg-[#007ab8] transition-all"
              >
                Trade via Telegram <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
