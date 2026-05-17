"use client";

import React from "react";
import Link from "next/link";

import { Sparkles, Terminal, FileText, Send } from "lucide-react";
import { DEV_INFO } from "@/lib/constants";
import { FadeIn } from "../animations/FadeIn";

// Bespoke stylized SVG profile vector representing a technical engineer
function ProfileIllustration() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border bg-card-elevated flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300">
      {/* Ambient glowing backdrops */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-success/5 opacity-60" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-glow blur-2xl rounded-full" />
      
      {/* Dynamic technical grids */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
      </svg>

      {/* Cybernetic avatar outline */}
      <svg
        viewBox="0 0 200 200"
        className="w-36 h-36 sm:w-44 sm:h-44 text-muted/40 relative z-10 filter grayscale group-hover:grayscale-0 group-hover:text-primary/70 transition-all duration-500"
      >
        {/* Outer orbital rings */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-spin" style={{ animationDuration: '40s' }} />
        <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.75" />

        {/* Head/Shoulders Silhouette block */}
        <path
          d="M 60 160 C 60 120, 140 120, 140 160 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <circle cx="100" cy="85" r="30" fill="currentColor" opacity="0.4" />
        
        {/* Glowing technical specs */}
        <path d="M 50 100 L 70 100" stroke="#4F7CFF" strokeWidth="2" opacity="0.8" />
        <path d="M 130 100 L 150 100" stroke="#4F7CFF" strokeWidth="2" opacity="0.8" />
        <circle cx="100" cy="85" r="4" fill="#22C55E" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="100" cy="85" r="2.5" fill="#22C55E" />

        {/* Binary / Hex accents */}
        <text x="50" y="55" className="font-mono text-[8px] fill-muted" opacity="0.5">0x7F</text>
        <text x="135" y="55" className="font-mono text-[8px] fill-muted" opacity="0.5">SYN</text>
        <text x="130" y="145" className="font-mono text-[8px] fill-muted" opacity="0.5">ACK</text>
      </svg>
      
      {/* Code corner frames */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-muted opacity-50 select-none">&lt;DEV&gt;</div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-muted opacity-50 select-none">&lt;/DEV&gt;</div>
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
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
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
              I specialize in building scalable SaaS products, event-driven server engines, low-latency WebSockets, and secure AI-assisted workflow pipelines.
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
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
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
                <div className="flex flex-col gap-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted">EXPERIENCE:</span>
                    <span className="text-foreground font-semibold">{DEV_INFO.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">CURRENT ROLE:</span>
                    <span className="text-foreground font-semibold">{DEV_INFO.currentRole}</span>
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
