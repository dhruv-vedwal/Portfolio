import React from "react";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CapabilitySection from "@/components/sections/CapabilitySection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import { Terminal, Send, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruv Vedwal",
    "jobTitle": "Full Stack Product Engineer",
    "url": "https://dhruv.systems",
    "sameAs": [
      "https://github.com/dhruv-vedwal",
      "https://www.linkedin.com/in/dhruv-vedwal-2473641b7/"
    ],
    "knowsAbout": [
      "Software Engineering",
      "SaaS Systems",
      "Real-Time Architecture",
      "Event-Driven Backend",
      "AI Workflows",
      "Next.js",
      "Node.js",
      "WebSockets",
      "AWS SQS",
      "TypeScript",
      "PostgreSQL"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* 1. Hero Identity Header */}
      <HeroSection />

      {/* 2. Impact Metrics and Recharts Telemetry */}
      <ImpactMetrics />

      {/* 3. Engineering Core Capabilities */}
      <CapabilitySection />

      {/* 4. Featured Software Projects */}
      <FeaturedProjectsSection />

      {/* 5. Bottom System Promotion CTA Banner */}
      <section className="py-20 bg-card/15 border-t border-b border-border relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/5 via-transparent to-success-glow/5 opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-glow blur-[150px] rounded-full opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <FadeIn direction="up" delay={0.1}>
            <div className="w-12 h-12 rounded-xl bg-card-elevated border border-border flex items-center justify-center mb-2">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Dive Deeper Into the Architecture
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              A personal portfolio shouldn&apos;t leak proprietary interfaces. Instead, explore my customized, interactive systems engineering maps illustrating complex events, scaling behaviors, and recovery procedures.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
              <Link
                href="/systems"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-[0_0_15px_var(--primary-glow)] hover:shadow-[0_0_20px_rgba(79,124,255,0.45)] transition-all active:scale-[0.98]"
              >
                <span>Launch Systems Explorer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card border border-border/80 hover:border-primary/40 text-muted hover:text-foreground text-sm font-semibold transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-muted" />
                <span>Submit Portal Request</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
