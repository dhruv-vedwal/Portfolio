"use client";

import React from "react";
import { MessageSquareCode, Network, Cpu, Layers, Terminal } from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import { Card, CardTitle, CardDescription } from "../ui/Card";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";

// Map icon string names in constants.ts to active Lucide Components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquareCode: MessageSquareCode,
  Network: Network,
  Cpu: Cpu,
  Layers: Layers,
};

export default function CapabilitySection() {
  return (
    <section className="py-20 border-t border-border bg-transparent relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow/5 blur-[140px] rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary tracking-widest uppercase mb-3 rounded-sm">
                <Terminal className="w-3.5 h-3.5" />
                <span>Expertise Stack</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-normal text-foreground">
                Core Engineering Capabilities
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-xs sm:text-sm text-muted mt-3 font-sans leading-relaxed">
                A comprehensive approach to software development, bridging the gap between sophisticated backend infrastructure and intuitive, responsive frontend interfaces.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Capabilities Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = ICON_MAP[cap.icon] || Terminal;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.08}>
                <div className="card-blueprint h-full group relative p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 bg-card/45 backdrop-blur-sm rounded-lg">
                  {/* Visual accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-lg pointer-events-none group-hover:from-primary/10 transition-colors" />
                  
                  <div className="flex flex-col gap-5">
                    {/* Header: Icon + Titles */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-card-elevated border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-muted group-hover:text-primary group-hover:scale-105 transition-all" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-primary font-mono tracking-widest uppercase block mb-1">
                          {cap.subtitle}
                        </span>
                        <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-foreground/95 transition-colors">
                          {cap.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans pt-1">
                      {cap.description}
                    </p>
                  </div>

                  {/* Technical Tags */}
                  <div className="mt-8 border-t border-border/30 pt-5 flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-sm bg-card-elevated/70 border border-border/80 text-[10px] text-foreground font-mono font-medium hover:border-primary/20 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
