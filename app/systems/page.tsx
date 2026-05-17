import React from "react";
import SystemsClientWrapper from "@/components/systems/SystemsClientWrapper";
import { Workflow } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Interactive Systems Explorer | Dhruv Vedwal",
  description: "Explore interactive architectural flows, event decoupling message queues, WebSockets connections, and robust processing backends, built safe from confidential leaks.",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-glow text-xs text-primary font-semibold uppercase tracking-wider mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Interactive Architecture explorer</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-sans">
              Interactive Systems
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-muted font-sans mt-3 leading-relaxed">
              Professional storytelling built around structural pipelines instead of confidential UI screens. Select any operational dashboard block to inspect scheduling, event attribution, live WebSockets, and bulk worker nodes.
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
