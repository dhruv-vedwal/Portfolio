"use client";

import React, { useEffect, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { SystemNodeData, SystemEdgeData } from "@/lib/constants";
import { Terminal, Cpu, Database, CloudLightning, HardDrive, Globe, Info } from "lucide-react";

// Inline Custom Node Renderer for gorgeous visual layouts
const CustomNode = ({ data, selected }: { data: { label: string; type: string; description: string }; selected?: boolean }) => {
  const typeConfigs = {
    ingress: {
      border: "border-primary/60",
      glow: "shadow-[0_0_15px_rgba(79,124,255,0.15)]",
      accent: "bg-primary",
      icon: Globe,
      label: "Ingress",
    },
    queue: {
      border: "border-warning/60",
      glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      accent: "bg-warning",
      icon: CloudLightning,
      label: "Message Queue",
    },
    processing: {
      border: "border-purple-500/60",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      accent: "bg-purple-500",
      icon: Cpu,
      label: "Worker Unit",
    },
    database: {
      border: "border-success/60",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.15)]",
      accent: "bg-success",
      icon: Database,
      label: "DB Engine",
    },
    storage: {
      border: "border-pink-500/60",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
      accent: "bg-pink-500",
      icon: HardDrive,
      label: "Obj Storage",
    },
    external: {
      border: "border-slate-500/60",
      glow: "shadow-[0_0_15px_rgba(100,116,139,0.15)]",
      accent: "bg-slate-500",
      icon: Terminal,
      label: "External Service",
    },
  };

  const config = typeConfigs[data.type as keyof typeof typeConfigs] || typeConfigs.external;
  const Icon = config.icon;

  return (
    <div
      className={`px-4 py-3 rounded-xl bg-card border ${config.border} ${config.glow} transition-all duration-300 w-[200px] text-left relative ${
        selected ? "ring-2 ring-primary/80 border-primary" : ""
      }`}
    >
      {/* Dynamic left side border bar */}
      <div className={`absolute top-3 left-0 w-1 h-10 rounded-r ${config.accent}`} />
      
      <div className="flex items-center gap-2.5 mb-1.5 pl-1.5">
        <Icon className={`w-4 h-4 text-foreground/80`} />
        <span className="text-[9px] font-bold text-muted font-mono tracking-widest uppercase">
          {config.label}
        </span>
      </div>
      
      <p className="text-xs font-bold text-foreground font-sans truncate pl-1.5">
        {data.label}
      </p>
      
      <div className="mt-2 flex items-center justify-between text-[8px] text-muted pl-1.5 font-mono">
        <span>Click for details</span>
        <Info className="w-3 h-3 text-muted/65" />
      </div>
    </div>
  );
};

interface InteractiveFlowProps {
  nodesData: SystemNodeData[];
  edgesData: SystemEdgeData[];
  onSelectNode: (node: SystemNodeData | null) => void;
}

export default function InteractiveFlow({
  nodesData,
  edgesData,
  onSelectNode,
}: InteractiveFlowProps) {
  // Define Node Types outside of component render
  const nodeTypes = useMemo(() => ({ customNode: CustomNode } as NodeTypes), []);

  // Map incoming systems-specific node details to standard React Flow interfaces
  const formattedNodes: Node[] = useMemo(() => {
    return nodesData.map((n) => ({
      id: n.id,
      type: "customNode",
      position: { x: n.x, y: n.y },
      data: { label: n.label, type: n.type, description: n.description },
    }));
  }, [nodesData]);

  const formattedEdges: Edge[] = useMemo(() => {
    return edgesData.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      animated: e.animated ?? true,
      label: e.label,
      style: { stroke: "#263042", strokeWidth: 1.5 },
      labelStyle: { fill: "#94A3B8", fontSize: 9, fontFamily: "var(--font-mono)", fontWeight: 500 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
      labelBgStyle: { fill: "#111827", stroke: "#263042", strokeWidth: 0.5 },
    }));
  }, [edgesData]);

  const [nodes, setNodes, onNodesChange] = useNodesState(formattedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(formattedEdges);

  // Sync state when incoming system changes
  useEffect(() => {
    setNodes(formattedNodes);
    setEdges(formattedEdges);
  }, [formattedNodes, formattedEdges, setNodes, setEdges]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-card/10 border border-border/80 rounded-2xl relative overflow-hidden">
      {/* Background visual watermarks */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 font-mono text-[9px] text-muted bg-card px-2.5 py-1 rounded-md border border-border/80 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span>INTERACTIVE TOPOLOGY CANVAS</span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node) => {
          const matchingNode = nodesData.find((n) => n.id === node.id);
          if (matchingNode) {
            onSelectNode(matchingNode);
          }
        }}
        onPaneClick={() => onSelectNode(null)}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.5}
        maxZoom={1.5}
        className="w-full h-full"
      >
        <Background color="#263042" gap={16} size={1} style={{ opacity: 0.3 }} />
        <Controls
          className="bg-card border border-border rounded-lg p-1 flex flex-col gap-1 shadow-2xl !left-auto !right-4 !bottom-4"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}
