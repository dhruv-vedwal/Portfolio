"use client";

import React, { useEffect, useState } from "react";
import { Cpu, Wifi, Activity, GitBranch } from "lucide-react";

export default function SystemTicker() {
  const [latency, setLatency] = useState(14);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Dynamically update latency to simulate live server ping
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 6) + 12); // random between 12ms and 17ms
    }, 4000);

    // Live clock in UTC
    const clockInterval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    }, 1000);

    return () => {
      clearInterval(latencyInterval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="w-full bg-card/65 backdrop-blur-md border-b border-border/80 text-[10px] font-mono text-muted py-2 px-6 overflow-hidden relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left Side: System Status indicator */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-foreground tracking-wider">SYS_STATUS: OPERATIONAL</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-muted/60">
            <span>•</span>
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-primary" />
              <span>UPTIME: 99.998%</span>
            </span>
          </div>
        </div>

        {/* Center/Right Scrolling Live Logs */}
        <div className="flex items-center gap-6">
          {/* Edge Node Latency */}
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted/60">EDGE_PING:</span>
            <span className="text-foreground font-semibold">{latency}ms</span>
          </div>

          {/* Active WebSocket Pools */}
          <div className="hidden md:flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted/60">SOCKETS:</span>
            <span className="text-foreground font-semibold">ACTIVE (POOL_OK)</span>
          </div>

          {/* Current Git Revision */}
          <div className="hidden lg:flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted/60">REV:</span>
            <span className="text-foreground font-semibold">main-7a9b0c2</span>
          </div>

          {/* UTC Clock */}
          <div className="text-muted/80 border-l border-border/60 pl-4 h-4 flex items-center">
            <span>{currentTime || "SYSTEM INITIALIZING..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
