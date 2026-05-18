"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Sparkles, Terminal, FileText, Send } from "lucide-react";
import { DEV_INFO } from "@/lib/constants";
import { FadeIn } from "../animations/FadeIn";

// Bespoke stylized profile photo wrapper representing a technical engineer
function ProfileIllustration() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-lg overflow-hidden border border-border bg-card-elevated flex items-center justify-center transition-all duration-300 hover:border-primary">
      {/* Ambient glowing backdrops */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-60 z-0" />
      
      {/* Actual Profile Photo */}
      <div className="relative z-10 w-full h-full p-2">
        <div className="relative w-full h-full rounded-md overflow-hidden border border-border/50">
          <Image
            src="/profile-photo.jpeg"
            alt="Dhruv Vedwal"
            fill
            className="object-cover transition-all duration-500 hover:scale-105"
            sizes="(max-width: 640px) 192px, 224px"
            priority
          />
        </div>
      </div>
      
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Ambient accent background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-glow blur-[120px] rounded-full opacity-30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Identity Info */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:-translate-y-8">
          <FadeIn direction="none" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/20 bg-primary-glow text-[10px] text-primary font-bold font-mono tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Full-Stack Product Engineering</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-normal text-foreground leading-[1.05]">
              Dhruv Vedwal
              <span className="block mt-2 font-sans text-xs uppercase tracking-[0.25em] text-primary font-bold">
                System Architect & Engineer
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={0.6}>
            <p className="text-sm sm:text-base md:text-lg text-muted font-sans max-w-2xl leading-relaxed">
              I engineer high-performance software systems and dynamic web applications, focusing on robust architectures, scalability, and delivering exceptional user experiences.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.4} duration={0.6} className="w-full sm:w-auto">
            <div className="flex flex-wrap gap-4 items-center w-full">
              <Link
                href="/systems"
                className="btn-bespoke-solid"
              >
                <Terminal className="w-3.5 h-3.5 mr-2" />
                <span>Explore Systems</span>
              </Link>

              <Link
                href="/resume"
                className="btn-bespoke"
              >
                <FileText className="w-3.5 h-3.5 mr-2" />
                <span>View Timeline</span>
              </Link>

              <Link
                href="/contact"
                className="btn-bespoke"
              >
                <Send className="w-3.5 h-3.5 mr-2" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right Identity Cards */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:-translate-y-8 mt-8 lg:mt-0">
          <FadeIn direction="none" delay={0.3} duration={0.8}>
            <div className="card-blueprint relative flex flex-col items-center gap-6 p-6 rounded-lg max-w-[380px] sm:max-w-[420px] w-full">
              {/* Profile Photo Wrapper */}
              <ProfileIllustration />

              {/* Engineer Identity Card details */}
              <div className="w-full bg-card-elevated/65 rounded-sm border border-border/80 p-5 flex flex-col gap-4 font-mono">
                {/* Identity fields */}
                <div className="flex flex-col gap-3 text-xs">
                  <div className="flex justify-between gap-4 items-start">
                    <span className="text-muted shrink-0 text-[10px] tracking-wider">EXPERIENCE:</span>
                    <span className="text-foreground font-semibold text-right">{DEV_INFO.experience}</span>
                  </div>
                  <div className="flex justify-between gap-4 items-start">
                    <span className="text-muted shrink-0 text-[10px] tracking-wider">CURRENT ROLE:</span>
                    <span className="text-foreground font-semibold text-right">{DEV_INFO.currentRole}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-border/30 mt-1">
                    <span className="text-muted block text-[10px] tracking-wider">FOCUS FIELDS:</span>
                    <ul className="grid grid-cols-2 gap-1.5 text-[10px] text-foreground font-semibold list-inside list-none">
                      {DEV_INFO.focus.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="text-primary">&gt;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
