"use client";

import React, { useState } from "react";
import { SYSTEMS_DATA, SystemNodeData } from "@/lib/constants";
import InteractiveFlow from "./InteractiveFlow";
import { Card } from "../ui/Card";
import { FadeIn } from "../animations/FadeIn";
import { 
  ShieldCheck, Zap, Server, 
  Workflow, Cpu, Settings, RefreshCw, Layers 
} from "lucide-react";

export default function SystemsWorkspace() {
  const [activeSystemId, setActiveSystemId] = useState<string>(SYSTEMS_DATA[0].id);
  const [selectedNode, setSelectedNode] = useState<SystemNodeData | null>(null);

  // Get active system details
  const activeSystem = SYSTEMS_DATA.find((sys) => sys.id === activeSystemId) || SYSTEMS_DATA[0];

  // Helper to handle switching tabs (resets active inspected node to clean the state)
  const handleSystemChange = (id: string) => {
    setActiveSystemId(id);
    setSelectedNode(null);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* 1. System Selection Slider Tabs */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
          SELECT OPERATIONAL SYSTEM ARCHITECTURE
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {SYSTEMS_DATA.map((sys) => {
            const isActive = sys.id === activeSystemId;
            return (
              <button
                key={sys.id}
                onClick={() => handleSystemChange(sys.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary-glow/20 border-primary shadow-[0_0_15px_var(--primary-glow)]"
                    : "bg-card/40 border-border hover:border-muted/50 hover:bg-card-elevated/40"
                }`}
              >
                <div className="text-[10px] font-bold text-muted font-mono tracking-wider uppercase mb-1 flex items-center justify-between">
                  <span>{sys.tag}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </div>
                <h4 className="text-xs font-extrabold text-foreground font-sans line-clamp-1 mb-2">
                  {sys.title}
                </h4>
                <div className="text-[10px] text-success font-semibold flex items-center gap-1 font-mono">
                  <Zap className="w-3 h-3" />
                  <span>{sys.impact.split(" | ")[0]}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Split Panel (React Flow + Inspector Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Canvas Section */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          <div className="flex justify-between items-center px-2 text-xs text-muted">
            <span className="font-sans flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-primary" />
              Interactive Topology Map (Drag canvas, click nodes to inspect)
            </span>
          </div>
          <InteractiveFlow
            nodesData={activeSystem.nodes}
            edgesData={activeSystem.edges}
            onSelectNode={(node) => setSelectedNode(node)}
          />
        </div>

        {/* Dynamic Telemetry Inspector sidebar panel */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <Card className="h-full border border-border flex flex-col justify-between p-6 bg-card/25 backdrop-blur-sm min-h-[300px]">
            {selectedNode ? (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                    NODE INSPECTOR
                  </span>
                  <span className="text-[9px] font-bold font-mono text-muted bg-card-elevated border border-border px-2 py-0.5 rounded">
                    ID: #{selectedNode.id}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-muted font-mono tracking-widest uppercase">
                    ENTITY CLASS TYPE
                  </span>
                  <div className="text-sm font-bold text-foreground font-sans flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      selectedNode.type === "ingress" ? "bg-primary" :
                      selectedNode.type === "queue" ? "bg-warning" :
                      selectedNode.type === "processing" ? "bg-purple-500" :
                      selectedNode.type === "database" ? "bg-success" :
                      selectedNode.type === "storage" ? "bg-pink-500" : "bg-slate-500"
                    }`} />
                    <span className="capitalize">{selectedNode.type}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-muted font-mono tracking-widest uppercase">
                    COMPONENT NAME
                  </span>
                  <h4 className="text-base font-extrabold text-foreground font-sans leading-snug">
                    {selectedNode.label}
                  </h4>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-muted font-mono tracking-widest uppercase">
                    TELEMETRY & ACTIONS
                  </span>
                  <p className="text-xs text-muted leading-relaxed font-sans bg-card-elevated/70 p-3 rounded-lg border border-border/80">
                    {selectedNode.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center my-auto gap-4 py-8">
                <div className="w-12 h-12 rounded-xl bg-card-elevated border border-border flex items-center justify-center text-muted">
                  <Settings className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-sans">
                    Inspection Telemetry Offline
                  </h4>
                  <p className="text-xs text-muted max-w-[240px] leading-relaxed font-sans mt-1.5 mx-auto">
                    Click on any node in the active topology canvas to analyze its scaling limits, task schemas, and failure recovery.
                  </p>
                </div>
              </div>
            )}

            {/* Sidebar bottom indicator */}
            <div className="border-t border-border/40 pt-4 mt-6 flex items-center justify-between text-[10px] text-muted font-mono">
              <span>SYSTEM: {activeSystem.id.toUpperCase()}</span>
              <span className="flex items-center gap-1 text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                ONLINE
              </span>
            </div>
          </Card>
        </div>
      </div>

      {/* 3. Detailed Engineering Breakdown narrative card */}
      <FadeIn direction="none" delay={0.1}>
        <Card className="border border-border/90 p-8 sm:p-10 bg-card-elevated/20">
          <div className="flex flex-wrap gap-4 items-center justify-between border-b border-border/60 pb-6 mb-8">
            <div>
              <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                ENGINEERING DEEP DIVE
              </span>
              <h3 className="text-2xl font-extrabold text-foreground font-sans mt-1">
                {activeSystem.title}
              </h3>
            </div>
            
            {/* Detailed tech tags list */}
            <div className="flex flex-wrap gap-1.5">
              {activeSystem.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-card-elevated border border-border text-xs text-foreground font-mono font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Left Narrative Column */}
            <div className="flex flex-col gap-6">
              {/* Problem */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Server className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    The Challenge & Bottlenecks
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.problem}
                  </p>
                </div>
              </div>

              {/* Architecture Decision */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary-glow border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    Architectural Decisions & Trade-Offs
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.decision}
                  </p>
                </div>
              </div>

              {/* Trade-Off details */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    Component Evaluation & Trade-offs
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.tradeoffs}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="flex flex-col gap-6">
              {/* Resiliency */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-success-glow border border-success/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    Resiliency & Failure Recovery
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.failure}
                  </p>
                </div>
              </div>

              {/* Scaling */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-warning/10 border border-warning/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-warning" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    Behaviour Under 100x Scale
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.scaling}
                  </p>
                </div>
              </div>

              {/* Improvements */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wide font-sans mb-1.5">
                    Self-Critique: What I&apos;d Improve
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {activeSystem.narrative.improvements}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
