"use client";

import React from "react";
import Link from "next/link";
import { GitBranch, Mail, ShieldCheck } from "lucide-react";
import { DEV_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/15 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-primary-glow blur-[100px] rounded-full opacity-30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand/Status Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-1.5 font-mono font-bold tracking-tight text-foreground">
              DHRUV<span className="text-primary font-sans text-sm tracking-widest font-semibold bg-primary-glow px-1.5 py-0.5 rounded border border-primary/20">.SYS</span>
            </div>
            
            <p className="text-muted text-sm max-w-sm font-sans leading-relaxed">
              A premium interactive systems portfolio presenting architectural narratives, event-driven pipelines, and robust full-stack delivery schemas.
            </p>

            {/* Dashboard Telemetry Live Status */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 bg-card-elevated px-3 py-1.5 rounded-full border border-border/80 text-xs text-muted font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                <span>SYSTEMS: ONLINE</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                <GitBranch className="w-3.5 h-3.5" />
                <span>v1.2.0-stable</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground font-sans">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition-colors">Home Page</Link>
              <Link href="/systems" className="hover:text-foreground transition-colors">Systems Explorer</Link>
              <Link href="/engineering-notes" className="hover:text-foreground transition-colors">Engineering Notes</Link>
              <Link href="/resume" className="hover:text-foreground transition-colors">Release Timeline</Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground font-sans">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                Github
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <Link 
                href="/contact"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact Portal
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-border w-full my-6" />

        {/* Copyright, Privacy, Safe storytelling disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <span>
            © {currentYear} {DEV_INFO.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-1 text-muted text-center sm:text-right">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Confidentiality Safe Architecture Storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
