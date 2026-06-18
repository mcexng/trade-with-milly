"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { TradingViewTimeline } from "@/components/ui/TradingViewTimeline";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface CoinData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isUp: boolean;
}

interface NewsData {
  title: string;
  time: string;
  source: string;
  url: string;
}

const FALLBACK_COINS: CoinData[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$64,230.50", change: "+2.4%", isUp: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,450.20", change: "+1.8%", isUp: true },
  { symbol: "SOL", name: "Solana", price: "$145.60", change: "-0.5%", isUp: false },
  { symbol: "XRP", name: "Ripple", price: "$0.58", change: "-1.2%", isUp: false },
  { symbol: "DOGE", name: "Dogecoin", price: "$0.15", change: "+5.4%", isUp: true },
];

const FALLBACK_NEWS: NewsData[] = [
  { title: "Bitcoin Surges Past Resistance Level", time: "2 hours ago", source: "Crypto News", url: "#" },
  { title: "Ethereum ETF Approval Odds Increase", time: "4 hours ago", source: "Market Watch", url: "#" },
  { title: "Solana Network Performance Update", time: "6 hours ago", source: "Decrypt", url: "#" },
];

export default function MarketPage() {
  const [trendingCoins, setTrendingCoins] = useState<CoinData[]>(FALLBACK_COINS);
  const [news, setNews] = useState<NewsData[]>(FALLBACK_NEWS);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Prices via server-side proxy (avoids CORS)
      try {
        const priceRes = await fetch("/api/kucoin/tickers");
        if (priceRes.ok) {
          const priceData = await priceRes.json();
          if (priceData.coins && priceData.coins.length > 0) {
            const mapped = priceData.coins.map((c: any) => ({
              symbol: c.symbol,
              name: c.name || c.symbol,
              price: "$" + c.price,
              change: (c.isUp ? "+" : "") + c.change.toFixed(2) + "%",
              isUp: c.isUp,
            }));
            setTrendingCoins(mapped);
            setIsLive(true);
          }
        }
      } catch {
        console.warn("Market: prices fallback in use");
      }

      // Fetch News via server-side proxy
      try {
        const newsRes = await fetch("/api/kucoin/news");
        if (newsRes.ok) {
          const newsData = await newsRes.json();
          if (newsData.items && newsData.items.length > 0) {
            setNews(newsData.items);
          }
        }
      } catch {
        console.warn("Market: news fallback in use");
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              LIVE <span className="text-gradient">MARKET</span>
            </h1>
            <p className="text-[var(--color-brand-silver)]/80 max-w-2xl">
              Real-time cryptocurrency prices, news, and market intelligence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Column: TradingView Widget & Fear/Greed */}
            <div className="lg:col-span-2 space-y-8">

              {/* Fear & Greed Index */}
              <AnimatedSection>
                <GlassCard className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-brand-silver)] mb-1">Fear & Greed Index</h3>
                    <div className="text-3xl font-black text-green-400">74</div>
                    <div className="text-sm text-green-400 font-medium">Greed</div>
                  </div>
                  <div className="w-full sm:w-32 h-4 bg-white/10 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 bottom-0 w-[74%] bg-gradient-to-r from-yellow-500 to-green-500 rounded-full" />
                  </div>
                </GlassCard>
              </AnimatedSection>

              {/* TradingView Timeline Widget */}
              <AnimatedSection delay={0.1}>
                <GlassCard className="p-0 h-[750px] relative overflow-hidden" glow glowColor="neon">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-transparent">
                    <TradingViewTimeline />
                  </div>
                </GlassCard>
              </AnimatedSection>
            </div>

            {/* Right Column: Trending & News */}
            <div className="space-y-8">

              {/* Trending Coins */}
              <AnimatedSection delay={0.2}>
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                    Top Coins
                    <div className="flex items-center gap-2">
                      {isLive && (
                        <span className="flex items-center gap-1 text-xs text-green-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          LIVE
                        </span>
                      )}
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-brand-silver)]" />
                    </div>
                  </h3>

                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-12 rounded-lg bg-white/5 animate-pulse" />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {trendingCoins.map((coin, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 last:pb-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                              {coin.symbol[0]}
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">{coin.symbol}</div>
                              <div className="text-xs text-[var(--color-brand-silver)]/70">{coin.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white text-sm">{coin.price}</div>
                            <div className={`text-xs font-medium flex items-center justify-end gap-1 ${coin.isUp ? "text-green-400" : "text-red-400"}`}>
                              {coin.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                              {coin.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </AnimatedSection>

              {/* Market News */}
              <AnimatedSection delay={0.3}>
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Market News</h3>

                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-white/5 animate-pulse" />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {news.map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group cursor-pointer block"
                        >
                          <h4 className="text-sm font-bold text-[var(--color-brand-silver)] group-hover:text-[var(--color-brand-cyan)] transition-colors line-clamp-2 mb-2">
                            {item.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-[var(--color-brand-silver)]/50">
                            <span>{item.source}</span>
                            <span>{item.time}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  <button className="w-full mt-6 py-3 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                    View All News
                  </button>
                </GlassCard>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
