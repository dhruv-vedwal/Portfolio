"use client";

import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { IMPACT_METRICS } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";
import { TrendingDown, Zap } from "lucide-react";

// Mock realistic engineering latency profiles (Before vs After) for the Recharts visualization
const CHART_DATA = [
  { name: "DB Queries", Before: 2400, After: 180, unit: "ms" },
  { name: "Webhook Ingress", Before: 1800, After: 120, unit: "ms" },
  { name: "CSV Ingestion", Before: 450, After: 42, unit: "s" },
  { name: "Socket Sync", Before: 980, After: 45, unit: "ms" },
  { name: "Worker RAM", Before: 840, After: 110, unit: "MB" },
];

export default function ImpactMetrics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              Direct, quantifiable business value and performance gains achieved through active systems optimization, backend re-architecture, and algorithmic pruning.
            </p>
          </FadeIn>
        </div>

        {/* Metrics Grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
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

        {/* Interactive Recharts visual showcase */}
        <FadeIn direction="none" delay={0.4} duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card-elevated/40 backdrop-blur-sm border border-border p-6 sm:p-8 rounded-2xl">
            {/* Chart Summary */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-lg bg-primary-glow border border-primary/20 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground font-sans flex items-center gap-2">
                  Latency Reduction Profile
                </h3>
                <p className="text-sm text-muted font-sans mt-2 leading-relaxed">
                  Real measurements of critical server bottlenecks before and after refactoring key paths. Asynchronous worker task models and memory-efficient structures lowered overhead across the entire stack.
                </p>
              </div>

              <div className="flex flex-col gap-3 font-mono text-xs pt-4 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <span className="text-muted flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-muted/40" />
                    Before Refactor:
                  </span>
                  <span className="text-muted font-semibold">High Overhead</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-primary" />
                    After Refactor:
                  </span>
                  <span className="text-primary font-semibold">Decoupled & Fast</span>
                </div>
              </div>
            </div>

            {/* Recharts Canvas */}
            <div className="lg:col-span-8 h-[280px] sm:h-[320px] w-full flex items-center justify-center relative">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={CHART_DATA}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#94A3B8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F7CFF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4F7CFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#263042" opacity={0.3} vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke="#94A3B8"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      className="font-mono"
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      className="font-mono"
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-card border border-border p-3.5 rounded-lg shadow-xl font-mono text-xs flex flex-col gap-1.5">
                              <p className="font-bold text-foreground mb-1 font-sans">{data.name}</p>
                              <p className="text-muted">
                                Original: <span className="text-foreground font-semibold">{data.Before}{data.unit}</span>
                              </p>
                              <p className="text-primary-hover">
                                Optimized: <span className="font-bold">{data.After}{data.unit}</span>
                              </p>
                              <p className="text-success text-[10px] font-bold">
                                Save Gain: {Math.round(((data.Before - data.After) / data.Before) * 100)}% Improvement
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="Before"
                      stroke="#94A3B8"
                      strokeWidth={1.5}
                      fillOpacity={1}
                      fill="url(#colorBefore)"
                      strokeDasharray="4 4"
                    />
                    <Area
                      type="monotone"
                      dataKey="After"
                      stroke="#4F7CFF"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorAfter)"
                      activeDot={{ r: 6, stroke: "#4F7CFF", strokeWidth: 2, fill: "#0B0F17" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-card/20 border border-border/50 rounded-xl animate-pulse font-mono text-xs text-muted">
                  Initializing Telemetry Chart...
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
