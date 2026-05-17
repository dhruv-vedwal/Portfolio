"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the workspace under a Client Component to resolve Next.js 15 compiler checks
const SystemsWorkspace = dynamic(
  () => import("./SystemsWorkspace"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[500px] flex items-center justify-center font-mono text-xs text-muted border border-border/60 bg-card/15 rounded-2xl animate-pulse">
        <span className="w-2 h-2 rounded-full bg-primary animate-status-blink mr-2.5" />
        LOADING SECURE TELEMETRY SYSTEMS WORKSPACE...
      </div>
    ),
  }
);

export default function SystemsClientWrapper() {
  return <SystemsWorkspace />;
}
