import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-purple)]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              TERMS OF <span className="text-gradient">SERVICE</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto">
              The rules and guidelines for using our services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 text-[var(--color-brand-silver)] leading-relaxed">
              <p>
                Welcome to Trade With Milly (MCEX). By accessing our website, purchasing crypto assets, or subscribing to our trading signals and academy, you agree to be bound by these Terms of Service.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Eligibility & Conduct</h2>
              <p>
                You must be at least 18 years old to use our services. You agree not to use our platform or services for any illegal, fraudulent, or unauthorized purpose, including money laundering or financing of terrorism.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Transactions & Refunds</h2>
              <p>
                Due to the irreversible nature of cryptocurrency transactions, all sales and OTC exchanges are final and non-refundable once the digital assets have been transferred. Please verify all wallet addresses before confirming a transaction.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Service Modifications</h2>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time. We may update these terms occasionally, and your continued use of the platform constitutes acceptance of those changes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
