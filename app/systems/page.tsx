import React from "react";
import SystemsClientWrapper from "@/components/systems/SystemsClientWrapper";
import { Workflow } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Interactive System Designs | Dhruv Vedwal",
  description: "Explore interactive architectural flows, message queues, WebSocket setups, and high-performance backend pipelines.",
};

export default function SystemsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-glow blur-[150px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-12">
        {/* Title panel */}
        <div className="text-left max-w-3xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary-glow text-[10px] font-bold text-primary tracking-widest uppercase mb-3 rounded-sm">
              <Workflow className="w-3.5 h-3.5" />
              <span>Interactive Diagrams</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-normal text-foreground leading-[1.05]">
              System Architecture
              <span className="block mt-2 font-sans text-xs uppercase tracking-[0.25em] text-primary font-bold">
                Interactive Design Diagrams & Specifications
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-muted font-sans mt-3 leading-relaxed">
              A visual exploration of the core system designs and structural pipelines behind my projects. Select a case study and click any component to inspect its architecture, engineering decisions, and technical specifications.
            </p>
          </FadeIn>
        </div>

        {/* Workspace wrapper */}
        <FadeIn direction="none" delay={0.4} duration={0.8}>
          <SystemsClientWrapper />
        </FadeIn>
      </div>
    </div>
  );
}
