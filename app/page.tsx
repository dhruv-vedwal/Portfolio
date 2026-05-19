import React from "react";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import DeveloperTerminal from "@/components/sections/DeveloperTerminal";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CapabilitySection from "@/components/sections/CapabilitySection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import PageNavigator from "@/components/layout/PageNavigator";
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
      {/* Dynamic Side & Mobile HUD Navigator */}
      <PageNavigator />

      {/* 1. Hero Identity Header */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Interactive CLI Command Center */}
      <div id="cli">
        <DeveloperTerminal />
      </div>

      {/* 3. Engineering Core Capabilities */}
      <div id="capabilities">
        <CapabilitySection />
      </div>

      {/* 4. Featured Software Projects */}
      <div id="projects">
        <FeaturedProjectsSection />
      </div>

      {/* 5. Engineering Impact Metrics */}
      <div id="metrics">
        <ImpactMetrics />
      </div>

      {/* 6. Bottom System Promotion CTA Banner */}
      <section className="py-20 bg-card/10 border-t border-b border-border relative overflow-hidden">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/5 via-transparent to-primary-glow/5 opacity-80" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <FadeIn direction="up" delay={0.1}>
            <div className="w-12 h-12 rounded-sm bg-card-elevated border border-border flex items-center justify-center mb-2">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-normal text-foreground">
              Dive Deeper Into the Architecture
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              Instead of static screenshots or proprietary code, explore my interactive system diagrams illustrating how I structure projects, solve key scaling problems, and handle event distribution.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center mt-4 w-full sm:w-auto">
              <Link
                href="/systems"
                className="btn-bespoke-solid w-full sm:w-auto text-center justify-center group"
              >
                <span>Explore System Designs</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="btn-bespoke w-full sm:w-auto text-center justify-center"
              >
                <Send className="w-3.5 h-3.5 mr-2 text-primary" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
