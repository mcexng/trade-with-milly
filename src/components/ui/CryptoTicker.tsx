"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoinData {
  symbol: string;
  price: string;
  change: number;
  isUp: boolean;
}

// Fallback mock data shown while loading or on error
const FALLBACK_COINS: CoinData[] = [
  { symbol: "BTC", price: "64,230.50", change: 2.4, isUp: true },
  { symbol: "ETH", price: "3,450.20", change: 1.8, isUp: true },
  { symbol: "SOL", price: "145.60", change: -0.5, isUp: false },
  { symbol: "BNB", price: "590.10", change: 0.2, isUp: true },
  { symbol: "XRP", price: "0.5820", change: -1.2, isUp: false },
  { symbol: "DOGE", price: "0.1540", change: 5.4, isUp: true },
  { symbol: "ADA", price: "0.4520", change: -0.8, isUp: false },
  { symbol: "AVAX", price: "35.20", change: 3.1, isUp: true },
];

export function CryptoTicker() {
  const [mounted, setMounted] = useState(false);
  const [coins, setCoins] = useState<CoinData[]>(FALLBACK_COINS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchPrices = async () => {
      try {
        // Call our Next.js server-side proxy — avoids CORS issues
        const res = await fetch("/api/kucoin/tickers");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        if (data.coins && data.coins.length > 0) {
          setCoins(data.coins);
          setIsLive(true);
        }
      } catch (err) {
        console.warn("CryptoTicker: using fallback data.", err);
        setIsLive(false);
      }
    };

    fetchPrices();
    // Refresh every 30 seconds
    const interval = setInterval(fetchPrices, 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full bg-black/80 border-b border-[#d4af37]/20 overflow-hidden relative z-40 backdrop-blur-md">
      {/* Live indicator */}
      {isLive && (
        <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center gap-1 z-10 bg-black/60 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[10px] text-[#d4af37] font-bold">LIVE</span>
        </div>
      )}

      {/* Extra right padding so LIVE badge doesn't overlap last coin */}
      <div className="flex py-2.5 pr-20">
        {/* Seamless marquee — duplicated list, scrolls left */}
        <div
          className="flex gap-10 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] will-change-transform"
        >
          {[...coins, ...coins].map((coin, index) => (
            <span
              key={`${coin.symbol}-${index}`}
              className="inline-flex items-center gap-1.5 shrink-0"
            >
              <span className="font-bold text-[#d4af37] text-xs sm:text-sm">{coin.symbol}</span>
              <span className="text-[var(--color-brand-silver)]/90 text-xs sm:text-sm">${coin.price}</span>
              <span
                className={cn(
                  "text-xs font-semibold flex items-center gap-0.5",
                  coin.isUp ? "text-green-400" : "text-red-400"
                )}
              >
                {coin.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {coin.isUp ? "+" : ""}
                {typeof coin.change === "number" ? coin.change.toFixed(2) : coin.change}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
