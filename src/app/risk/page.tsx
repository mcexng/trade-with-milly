import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function RiskWarningPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              RISK <span className="text-red-500">WARNING</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto">
              Important information regarding the risks of cryptocurrency trading.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="glass p-8 md:p-12 rounded-3xl border border-red-500/20 space-y-6 text-[var(--color-brand-silver)] leading-relaxed">
              <p className="font-semibold text-white">
                Trading and investing in cryptocurrencies involve significant risk and may not be suitable for all investors.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Market Volatility</h2>
              <p>
                The high degree of volatility in the crypto market can work against you as well as for you. Prices can fluctuate widely in a very short period, and the possibility exists that you could sustain a loss of some or all of your initial investment.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Educational Purposes Only</h2>
              <p>
                Our trading signals, academy materials, and mentoring are for educational and informational purposes only. They do not constitute financial advice. Before deciding to trade crypto assets, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Independent Advice</h2>
              <p>
                You should be aware of all the risks associated with digital asset trading and seek advice from an independent and suitably licensed financial advisor if you have any doubts. Past performance of our signals or trading strategies is not indicative of future results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
