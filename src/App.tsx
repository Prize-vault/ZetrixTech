import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LivePreviewSimulator } from './components/LivePreviewSimulator';
import { ServicesBento } from './components/ServicesBento';
import { ComparisonSection } from './components/ComparisonSection';
import { AuditCalculator } from './components/AuditCalculator';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const auditSectionRef = useRef<HTMLDivElement>(null);

  const scrollToAudit = () => {
    const el = document.getElementById('audit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col antialiased selection:bg-amber-400 selection:text-neutral-950 pb-14 md:pb-0">
      {/* 3-Zone Clean Header */}
      <Navbar onOpenAudit={scrollToAudit} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAudit={scrollToAudit} onExploreDemo={scrollToSimulator} />

        {/* Live Client Website Simulator */}
        <LivePreviewSimulator />

        {/* Core Capabilities / Services Bento Grid */}
        <ServicesBento />

        {/* Why One-Page Sites Win Comparison */}
        <ComparisonSection />

        {/* Local Gwalior Proof & Success Stories */}
        <TestimonialsSection />

        {/* Transparent Pricing Packages */}
        <PricingSection />

        {/* Interactive Free Online Presence Review Tool */}
        <AuditCalculator />

        {/* Frequently Answered Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={scrollToAudit} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenAudit={scrollToAudit} />
    </div>
  );
}
