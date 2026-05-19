"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Terminal, CornerDownLeft, Play, ShieldAlert, Cpu, 
  Database, Layers, Code2, Wifi, Activity, 
  Mail, Briefcase, FileCode2 
} from "lucide-react";
import { FadeIn } from "../animations/FadeIn";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function DeveloperTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "system-init",
      output: (
        <div className="flex flex-col gap-1.5 text-muted/80 text-left">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
            <Terminal className="w-4.5 h-4.5 text-primary" />
            <span>DHRUV_SYSTEMS CORE CLI INITIALIZED</span>
          </div>
          <p>Welcome, guest operator. You have entered the active system terminal.</p>
          <p>
            Type <span className="text-primary font-bold">help</span> or{" "}
            <span className="text-primary font-bold">ls</span> to view all operational commands.
          </p>
        </div>
      ),
    },
  ]);

  const consoleContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll the inner container only (avoids scrolling the parent page down)
  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTo({
        top: consoleContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  // Focus input when clicking anywhere inside the terminal card
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
      case "ls":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 py-1 text-xs font-mono text-left">
            <div>
              <span className="text-primary font-bold">help / ls</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— List all terminal operations</span>
            </div>
            <div>
              <span className="text-primary font-bold">about</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Software background & design focus</span>
            </div>
            <div>
              <span className="text-primary font-bold">skills</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Print custom ASCII stack bar chart</span>
            </div>
            <div>
              <span className="text-primary font-bold">projects</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Explore delivered engineering systems</span>
            </div>
            <div>
              <span className="text-primary font-bold">experience</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Career timeline milestones list</span>
            </div>
            <div>
              <span className="text-primary font-bold">latency</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Ping global systems edge nodes live</span>
            </div>
            <div>
              <span className="text-primary font-bold">system</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Active Next.js runtime status log</span>
            </div>
            <div>
              <span className="text-primary font-bold">contact</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Retrieve system contact address</span>
            </div>
            <div>
              <span className="text-primary font-bold">clear</span>
              <span className="text-muted/65 block sm:inline sm:ml-2">— Clear history logs</span>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="flex flex-col gap-2 leading-relaxed text-muted/90 font-sans text-xs text-left">
            <p>
              I am <strong className="text-foreground">Dhruv Vedwal</strong>, a Full Stack Product Engineer specializing in high-performance SaaS environments, real-time message streams, and robust event-driven backend systems.
            </p>
            <p>
              Rather than building static applications, I engineer responsive systems that scale gracefully under load. My architecture focus combines clean databases, WebSocket message paths, and high-fidelity product UI.
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="flex flex-col gap-3 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <Cpu className="w-4 h-4 text-primary" />
              <span>TECHNICAL STACK CONFIDENCE:</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <Code2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="inline-block w-24 text-foreground font-bold font-mono">Languages</span>
                <span className="text-primary font-bold font-mono text-[8px] xs:text-[10px] sm:text-xs tracking-tight sm:tracking-normal">[████████████████████]</span>
                <span className="ml-2 font-bold text-foreground font-mono">100%</span>
                <span className="text-muted/50 font-mono text-[10px] sm:text-xs ml-0 sm:ml-2">(TS / Go / Node.js)</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Layers className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="inline-block w-24 text-foreground font-bold font-mono">Frameworks</span>
                <span className="text-primary font-bold font-mono text-[8px] xs:text-[10px] sm:text-xs tracking-tight sm:tracking-normal">[██████████████████░░]</span>
                <span className="ml-2 font-bold text-foreground font-mono">90%</span>
                <span className="text-muted/50 font-mono text-[10px] sm:text-xs ml-0 sm:ml-2">(Next.js / Express)</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Database className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="inline-block w-24 text-foreground font-bold font-mono">Databases</span>
                <span className="text-primary font-bold font-mono text-[8px] xs:text-[10px] sm:text-xs tracking-tight sm:tracking-normal">[██████████████████░░]</span>
                <span className="ml-2 font-bold text-foreground font-mono">90%</span>
                <span className="text-muted/50 font-mono text-[10px] sm:text-xs ml-0 sm:ml-2">(PostgreSQL / Redis)</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Cpu className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="inline-block w-24 text-foreground font-bold font-mono">Ops / Cloud</span>
                <span className="text-primary font-bold font-mono text-[8px] xs:text-[10px] sm:text-xs tracking-tight sm:tracking-normal">[████████████████░░░░]</span>
                <span className="ml-2 font-bold text-foreground font-mono">80%</span>
                <span className="text-muted/50 font-mono text-[10px] sm:text-xs ml-0 sm:ml-2">(AWS / Docker)</span>
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="flex flex-col gap-3 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <FileCode2 className="w-4 h-4 text-primary" />
              <span>DELIVERED SYSTEMS PORTFOLIO:</span>
            </div>
            <div className="flex flex-col gap-3.5 pl-2">
              <div className="border-l border-primary/40 pl-3 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">1. Chit-Chat Connect</span>
                  <span className="text-[10px] text-primary bg-primary/5 px-2 py-0.5 border border-primary/10 rounded-sm">Sub-100ms messaging</span>
                </div>
                <p className="text-muted/70 font-sans leading-relaxed text-[11px] max-w-xl">
                  Real-time duplex chat hub built with Socket.IO, Redis clustering, and Node.js. Serves over 5,000 active message paths synchronously.
                </p>
              </div>
              <div className="border-l border-primary/40 pl-3 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">2. Sociopedia</span>
                  <span className="text-[10px] text-primary bg-primary/5 px-2 py-0.5 border border-primary/10 rounded-sm">JWT verified API</span>
                </div>
                <p className="text-muted/70 font-sans leading-relaxed text-[11px] max-w-xl">
                  Full stack event feed platform with session authentication pipelines, structured MongoDB document indexes, and Redux data bindings.
                </p>
              </div>
            </div>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="flex flex-col gap-3 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>PROFESSIONAL CHRONOLOGY REVISIONS:</span>
            </div>
            <div className="flex flex-col gap-2 pl-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-primary font-bold">v2.0 (Present)</span>
                <span className="text-foreground font-semibold">— Full Stack Product Engineer</span>
                <span className="text-muted/50 text-[10px] sm:text-xs sm:ml-auto">(Architecting distributed SaaS backends)</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-primary font-bold">v1.5 (2024)</span>
                <span className="text-foreground font-semibold">— Systems & Backend Developer Intern</span>
                <span className="text-muted/50 text-[10px] sm:text-xs sm:ml-auto">(Coded queue brokers and Postgres schemas)</span>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="flex flex-col gap-3 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>SYSTEM CONNECTION PORTALS:</span>
            </div>
            <div className="flex flex-col gap-1.5 pl-2">
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-muted/60">EMAIL:</span>
                <a href="mailto:contact@dhruv.systems" className="text-foreground hover:text-primary transition-colors underline">contact@dhruv.systems</a>
              </p>
              <p className="flex items-center gap-2.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-muted/60">LINKEDIN:</span>
                <a href="https://linkedin.com/in/dhruv-vedwal-2473641b7/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">linkedin.com/in/dhruv-vedwal</a>
              </p>
              <p className="flex items-center gap-2.5">
                <GithubIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-muted/60">GITHUB:</span>
                <a href="https://github.com/dhruv-vedwal" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">github.com/dhruv-vedwal</a>
              </p>
            </div>
          </div>
        );
        break;

      case "latency":
        output = (
          <div className="flex flex-col gap-2 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <Wifi className="w-4 h-4 text-primary" />
              <span>ESTABLISHING LIVE CONTEXT EDGE PINGS:</span>
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <p className="flex items-center justify-between border-b border-border/20 pb-1 max-w-sm">
                <span>ap-south-1 (Mumbai, IN):</span>
                <span className="text-emerald-500 font-bold">14ms [ACTIVE]</span>
              </p>
              <p className="flex items-center justify-between border-b border-border/20 pb-1 max-w-sm">
                <span>us-east-1 (N. Virginia, US):</span>
                <span className="text-primary font-bold">84ms [ACTIVE]</span>
              </p>
              <p className="flex items-center justify-between border-b border-border/20 pb-1 max-w-sm">
                <span>eu-central-1 (Frankfurt, DE):</span>
                <span className="text-primary font-bold">116ms [ACTIVE]</span>
              </p>
            </div>
            <p className="text-[10px] text-muted/50 mt-1 leading-relaxed">
              * Edge ping latency is dynamically computed using synthetic socket channels.
            </p>
          </div>
        );
        break;

      case "system":
        output = (
          <div className="flex flex-col gap-1.5 font-mono text-xs text-muted/90 text-left">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-sans mb-1">
              <Activity className="w-4 h-4 text-primary" />
              <span>SERVER LOG REVISION TELEMETRY:</span>
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <p>
                <strong className="text-foreground">CORE RUNTIME:</strong> Next.js Edge Runtime / Turbopack
              </p>
              <p>
                <strong className="text-foreground">EVENT PROCESSORS:</strong> WebSocket socket-pool / Serverless Active
              </p>
              <p>
                <strong className="text-foreground">DB CONNECTIONS:</strong> Prisma DB pool status: OK
              </p>
              <p>
                <strong className="text-foreground">DEPLOYED REGION:</strong> AWS edge routers (AP-South)
              </p>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="flex items-center gap-2 text-rose-500 font-semibold font-mono text-xs text-left">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>COMMAND NOT RECOGNIZED: &apos;{input}&apos;. Type &apos;help&apos; to view all operations.</span>
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <section className="py-20 border-t border-border bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & Context Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary tracking-widest uppercase rounded-sm w-fit">
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive Console</span>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-3">
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-normal text-foreground leading-tight">
                  Dhruv_Systems Command Center
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                  Explore my core engineering stack, server metrics, and deployed SaaS pipelines in real-time. This bespoke command interface connects directly to simulated cloud infrastructure parameters.
                </p>
              </FadeIn>
            </div>

            {/* Quick reference guide */}
            <FadeIn direction="up" delay={0.4}>
              <div className="border-t border-border/30 pt-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider">
                  Operational Commands Directory:
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {["help", "skills", "projects", "experience", "latency", "system", "contact"].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => {
                        setInput(cmd);
                        inputRef.current?.focus();
                      }}
                      className="px-2.5 py-1 rounded-sm bg-card-elevated border border-border/80 text-[10px] text-foreground font-mono font-medium hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer"
                      title={`Pre-fill command '${cmd}'`}
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-muted/50 font-sans leading-relaxed">
                  * Click any label above to pre-fill the command input box, then press Enter or click the execution arrow to run.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Terminal Box */}
          <div className="lg:col-span-7 w-full">
            <FadeIn direction="none" delay={0.4}>
              <div
                onClick={handleTerminalClick}
                className="card-blueprint rounded-lg overflow-hidden bg-card/65 backdrop-blur-md relative border border-border flex flex-col h-[500px] cursor-text text-left transition-all duration-300"
              >
                {/* Window header */}
                <div className="bg-card-elevated border-b border-border/80 px-4 py-2 flex items-center justify-between select-none">
                  {/* Window dots */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-primary/20 border border-primary/45" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-primary/20 border border-primary/45" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-primary/20 border border-primary/45" />
                  </div>
                  {/* Filename tab identifier */}
                  <span className="font-mono text-[9px] font-bold text-muted/65 uppercase tracking-widest">
                    dhruv@systems-core:~
                  </span>
                  {/* Status logo badge */}
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[9px] text-muted/60">CLI ONLINE</span>
                  </div>
                </div>

                {/* Console logs output */}
                <div ref={consoleContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 font-mono text-xs select-text">
                  {history.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-foreground/80 font-bold select-none text-[11px] sm:text-xs">
                        <span className="text-primary font-bold">&gt;</span>
                        <span className="text-muted/60 font-medium hidden sm:inline">visitor@dhruv.systems:~$</span>
                        <span className="text-muted/60 font-medium sm:hidden">visitor:~$</span>
                        <span>{item.command}</span>
                      </div>
                      <div className="pl-4 border-l border-border/40 ml-1">{item.output}</div>
                    </div>
                  ))}
                </div>

                {/* CLI Active Input bar */}
                <form
                  onSubmit={handleCommandSubmit}
                  className="bg-card-elevated border-t border-border/60 px-4 py-2.5 flex items-center gap-2.5 select-none"
                >
                  <Play className="w-3 h-3 text-primary animate-pulse" />
                  <span className="font-mono text-xs text-muted/50 hidden sm:inline">visitor@dhruv.systems:~$</span>
                  <span className="font-mono text-xs text-muted/50 sm:hidden">visitor:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a command (e.g. help, skills, projects, contact)..."
                    className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-foreground placeholder:text-muted/30 p-0"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="p-1 rounded-sm bg-primary/10 border border-primary/20 text-primary hover:bg-primary-glow/20 transition-all cursor-pointer"
                    title="Execute Command"
                  >
                    <CornerDownLeft className="w-3 h-3" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
