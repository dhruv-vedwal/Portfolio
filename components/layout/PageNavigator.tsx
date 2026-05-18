"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, Command } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "01 // SYSTEM_START", shortLabel: "Home" },
  { id: "cli", label: "02 // DEV_TERMINAL", shortLabel: "Terminal" },
  { id: "capabilities", label: "03 // SKILLS_STACK", shortLabel: "Skills" },
  { id: "projects", label: "04 // PROJ_RELEASES", shortLabel: "Projects" },
  { id: "metrics", label: "05 // ENG_METRICS", shortLabel: "Metrics" },
];

export default function PageNavigator() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when section is in the middle of the screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Large Viewport Sidebar Navigator (Fixed Left, Floating Clear of Borders) */}
      <div className="fixed left-8 min-[1600px]:left-12 top-1/2 -translate-y-1/2 z-50 hidden min-[1600px]:flex flex-col gap-3.5 items-start select-none">
        <div className="flex items-center gap-1.5 px-2 py-0.5 border border-border bg-card/60 backdrop-blur-md rounded-sm mb-1 self-start">
          <Command className="w-3 h-3 text-primary animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-muted/65 uppercase tracking-widest">
            WORKSPACE MAP
          </span>
        </div>
        
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3 focus:outline-none cursor-pointer"
              title={`Scroll to ${item.label}`}
            >
              {/* Geometric indicator bullet (on the left) */}
              <span className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border transition-all duration-300 ${
                isActive 
                  ? "border-primary bg-primary/10 rotate-45 scale-110" 
                  : "border-border/80 bg-card group-hover:border-primary/50 group-hover:rotate-45"
              }`}>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-sm" />
                )}
              </span>

              {/* Expandable Label (on the right, sliding right from left) */}
              <span className={`font-mono text-[9px] font-bold tracking-widest transition-all duration-300 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${
                isActive ? "text-primary opacity-80 translate-x-0" : "text-muted/60"
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Scroll back to top shortcut */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 w-7 h-7 rounded-sm border border-border/80 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all flex items-center justify-center cursor-pointer group self-start ml-0.5"
          title="Scroll to Top"
        >
          <ChevronUp className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* 2. Responsive Bottom Glass Pill Menu (Mobile/Tablet/Medium Viewports) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 min-[1600px]:hidden flex items-center justify-center select-none max-w-[90vw]">
        <div className="flex items-center gap-1.5 bg-card/65 backdrop-blur-md border border-border/80 rounded-sm py-1.5 px-3.5 shadow-lg shadow-black/40">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <React.Fragment key={item.id}>
                {idx > 0 && <span className="text-border/40 font-mono text-[10px] select-none">|</span>}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-[9px] font-extrabold tracking-widest px-1.5 py-0.5 rounded-sm transition-all cursor-pointer ${
                    isActive 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.shortLabel}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
