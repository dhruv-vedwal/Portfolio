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
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border bg-card-elevated flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300">
      {/* Ambient glowing backdrops */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-success/5 opacity-60 z-0" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-glow blur-2xl rounded-full z-0" />
      
      {/* Actual Profile Photo */}
      <div className="relative z-10 w-full h-full p-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-border/50">
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
      
      {/* Code corner frames */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-primary/70 z-20 select-none drop-shadow-md">&lt;DEV&gt;</div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-primary/70 z-20 select-none drop-shadow-md">&lt;/DEV&gt;</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Accent glow behind hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-glow blur-[140px] rounded-full opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Identity Info */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:-translate-y-8">
          <FadeIn direction="none" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-glow text-xs text-primary font-semibold w-fit tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Product Engineering</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.6}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] font-sans">
              Dhruv Vedwal
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                System Architect
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={0.6}>
            <p className="text-base sm:text-lg md:text-xl text-muted font-sans max-w-2xl leading-relaxed">
              I engineer high-performance software systems and dynamic web applications, focusing on robust architectures, scalability, and delivering exceptional user experiences.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.4} duration={0.6}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-[0_0_15px_var(--primary-glow)] hover:shadow-[0_0_20px_rgba(79,124,255,0.4)] transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4" />
                <span>Explore Systems</span>
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card-elevated hover:bg-card border border-border text-foreground hover:border-muted text-sm font-semibold transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-muted" />
                <span>View Timeline</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/80 hover:border-primary/40 text-muted hover:text-foreground text-sm font-semibold transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-muted hover:text-primary" />
                <span>Contact Portal</span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right Identity Cards */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:-translate-y-8 mt-8 lg:mt-0">
          <FadeIn direction="none" delay={0.3} duration={0.8}>
            <div className="group relative flex flex-col items-center gap-6 p-6 rounded-2xl bg-card/25 backdrop-blur-sm border border-border shadow-2xl shadow-black/40 max-w-[380px] sm:max-w-[420px] w-full">
              {/* Profile Photo Wrapper */}
              <ProfileIllustration />

              {/* Engineer Identity Card details */}
              <div className="w-full bg-card-elevated/65 rounded-xl border border-border/80 p-5 flex flex-col gap-4 font-mono">
                {/* Live Status indicator bar */}
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-xs text-muted">SYSTEM TELEMETRY</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-success-glow bg-success-glow/10 text-success text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-status-blink" />
                    <span>STATUS: ACTIVE</span>
                  </div>
                </div>

                {/* Identity fields */}
                <div className="flex flex-col gap-3 text-xs">
                  <div className="flex justify-between gap-4 items-start">
                    <span className="text-muted shrink-0">EXPERIENCE:</span>
                    <span className="text-foreground font-semibold text-right">{DEV_INFO.experience}</span>
                  </div>
                  <div className="flex justify-between gap-4 items-start">
                    <span className="text-muted shrink-0">CURRENT ROLE:</span>
                    <span className="text-foreground font-semibold text-right">{DEV_INFO.currentRole}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-border/30 mt-1">
                    <span className="text-muted block">FOCUS FIELDS:</span>
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
