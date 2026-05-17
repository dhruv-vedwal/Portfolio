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
        Loading interactive diagram...
      </div>
    ),
  }
);

export default function SystemsClientWrapper() {
  return <SystemsWorkspace />;
}
