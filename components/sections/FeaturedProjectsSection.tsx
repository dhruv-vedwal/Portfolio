"use client";

import React from "react";
import { Code2, ExternalLink, Terminal, Zap } from "lucide-react";
import { Card, CardTitle, CardDescription } from "../ui/Card";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";

const FEATURED_PROJECTS = [
  {
    title: "Chit-Chat Connect",
    subtitle: "Real-Time Duplex Communication Platform",
    description: "An ultra-low latency real-time messaging application featuring dynamic user presence indicators, immediate typing state streams, and fully synchronized channel messaging pathways.",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.IO", "Chakra UI", "Redis"],
    github: "https://github.com/dhruv-vedwal/Chit-Chat-Connect",
    highlight: "Sub-100ms Messaging Streams",
    color: "from-primary to-primary-hover",
    metrics: "5,000+ Concurrent Websockets"
  },
  {
    title: "Sociopedia",
    subtitle: "Full Stack Social Application Platform",
    description: "A secure, robust full-stack social portal engineered with token-based session verification, dynamic responsive feeds, interactive media, and structured MongoDB data pipelines.",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Material-UI"],
    github: "https://github.com/dhruv-vedwal/Sociopedia",
    highlight: "State-Driven React Redux Pattern",
    color: "from-success to-success-glow",
    metrics: "Secure JWT Authentication"
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 border-t border-border bg-transparent relative overflow-hidden">
      {/* Visual top grid background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-glow/5 blur-[150px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary tracking-widest uppercase mb-3 rounded-sm">
                <Code2 className="w-3.5 h-3.5" />
                <span>Featured Systems</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-normal text-foreground">
                End-to-End Product Deliveries
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-xs sm:text-sm text-muted mt-3 font-sans leading-relaxed">
                Explore a selection of my featured open-source work, demonstrating clean code practices, modern tech stacks, and end-to-end product delivery.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Projects Dual Grid */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="card-blueprint group h-full flex flex-col justify-between p-8 hover:border-primary/40 transition-all duration-300 relative bg-card/45 backdrop-blur-sm rounded-lg">
                
                <div className="flex flex-col gap-6">
                  {/* Top Row: Icon + Meta */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-card-elevated border border-border flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block">
                          {proj.highlight}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mt-1 transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-sm bg-card-elevated border border-border hover:border-primary/40 text-muted hover:text-foreground flex items-center justify-center transition-all cursor-pointer"
                        title="View GitHub Repository"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider block">
                    {proj.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans pt-1">
                    {proj.description}
                  </p>

                  {/* Live Metric callout */}
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary font-mono bg-primary/5 border border-primary/10 px-3 py-1 rounded-sm w-fit">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span>{proj.metrics}</span>
                  </div>
                </div>

                {/* Tech Badges & Footer */}
                <div className="mt-8 pt-5 border-t border-border/30 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {proj.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-sm bg-card-elevated border border-border/80 text-[10px] text-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-primary group-hover:text-primary-hover group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Analyze Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
