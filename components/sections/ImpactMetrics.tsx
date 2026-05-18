"use client";

import React from "react";
import { IMPACT_METRICS } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";
import { Zap } from "lucide-react";

export default function ImpactMetrics() {
  return (
    <section className="py-20 border-t border-border bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary-glow/5 blur-[140px] rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left max-w-3xl mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary tracking-widest uppercase mb-3 rounded-sm">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Measurable Outcomes</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-normal text-foreground">
              Engineering Impact Metrics
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm text-muted mt-3 font-sans leading-relaxed">
              Real-world engineering translated into measurable business value, highlighting improvements in system reliability, speed, and overall operational efficiency.
            </p>
          </FadeIn>
        </div>

        {/* Metrics Grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {IMPACT_METRICS.map((metric, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.05}>
              <div className="card-blueprint h-full flex flex-col justify-between group p-6 hover:border-primary/40 transition-all duration-300 bg-card/45 backdrop-blur-sm rounded-lg">
                <div className="pb-3 border-b border-border/40 mb-3">
                  <div className="text-3xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 font-mono">
                    {metric.value}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider mb-1">{metric.label}</h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">{metric.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>

      </div>
    </section>
  );
}
