import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              PRIVACY <span className="text-gradient">POLICY</span>
            </h1>
            <p className="text-xl text-[var(--color-brand-silver)]/80 max-w-3xl mx-auto">
              How we collect, use, and protect your information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 text-[var(--color-brand-silver)] leading-relaxed">
              <p>
                At Milly Crypto Exchange (MCEX), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
              <p>
                We only collect necessary information such as your contact details, identification documents (for KYC purposes), and transaction history to provide you with our crypto vending, mentoring, and signal services securely.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Data</h2>
              <p>
                Your information is used to process your OTC transactions, deliver academy materials, and provide trading signals. We do not sell or share your data with third parties without your consent, except as required by law.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
              <p>
                By using our platform, you agree to our data practices as described in this policy. We employ industry-standard security measures, including encryption and secure server hosting, to safeguard your information against unauthorized access.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
