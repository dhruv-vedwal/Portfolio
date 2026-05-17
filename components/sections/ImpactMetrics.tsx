"use client";

import React from "react";
import { IMPACT_METRICS } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";
import { Zap } from "lucide-react";

export default function ImpactMetrics() {
  return (
    <section className="py-20 border-t border-border bg-card/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-success-glow blur-[140px] rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/20 bg-success-glow/10 text-success text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Measurable Outcomes</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Engineering Impact Metrics
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-muted mt-3 font-sans">
              Real-world engineering translated into measurable business value, highlighting improvements in system reliability, speed, and overall operational efficiency.
            </p>
          </FadeIn>
        </div>

        {/* Metrics Grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {IMPACT_METRICS.map((metric, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.05}>
              <Card className="h-full flex flex-col justify-between group hover:-translate-y-1 hover:border-success/30 hover:shadow-[0_0_15px_var(--success-glow)] transition-all">
                <CardHeader className="p-5 pb-2">
                  <div className="text-4xl font-extrabold text-foreground tracking-tight group-hover:text-success transition-colors duration-300 font-mono">
                    {metric.value}
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <h4 className="text-sm font-bold text-foreground font-sans mb-1">{metric.label}</h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">{metric.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>


      </div>
    </section>
  );
}
