import React from "react";
import { TIMELINE_DATA } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { GitCommit, Download, Calendar, CircleDot } from "lucide-react";

export const metadata = {
  title: "Engineering Release Timeline | Dhruv Vedwal",
  description: "A professional roadmap styled as active system version releases, displaying engineering achievements, architectural deliverables, and future systems integrations.",
};

export default function ResumeTimelinePage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow blur-[150px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col gap-12">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/80 pb-8">
          <div className="text-left max-w-2xl">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-glow text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                <GitCommit className="w-3.5 h-3.5" />
                <span>Product Release Log</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
                Dhruv Vedwal Roadmap
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-sm sm:text-base text-muted font-sans mt-3 leading-relaxed">
                Chronological timeline tracking my developer progression styled as production version releases, demonstrating system-level engineering achievements.
              </p>
            </FadeIn>
          </div>

          {/* Download resume CTA callout */}
          <FadeIn direction="up" delay={0.4} className="flex-shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card-elevated hover:bg-card border border-border hover:border-primary/40 text-xs font-semibold text-foreground transition-all active:scale-[0.98] shadow-md cursor-pointer font-sans"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Download Static CV</span>
            </a>
          </FadeIn>
        </div>

        {/* Release Timeline Linear Track */}
        <div className="relative border-l border-border/80 pl-6 sm:pl-8 ml-3 sm:ml-4 flex flex-col gap-12 text-left">
          <FadeInStagger>
            {TIMELINE_DATA.map((release, idx) => (
              <FadeIn key={release.version} direction="left" delay={idx * 0.08} className="relative">
                {/* Timeline node marker badge */}
                <div className="absolute top-1 -left-[35px] sm:-left-[43px] z-20 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-border/120 flex items-center justify-center hover:border-primary/80 transition-colors shadow-sm">
                    {release.version === "vNext" ? (
                      <CircleDot className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                    ) : (
                      <GitCommit className="w-3 h-3 sm:w-4 sm:h-4 text-muted" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <Card className="hover:border-primary/30 hover:shadow-[0_0_15px_var(--primary-glow)] transition-all duration-300">
                  <CardHeader className="p-6 pb-4 border-b border-border/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-primary bg-primary-glow/15 border border-primary/20 px-2.5 py-0.5 rounded">
                        {release.version}
                      </span>
                      <CardTitle className="text-lg font-bold text-foreground font-sans">
                        {release.title}
                      </CardTitle>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{release.date}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex flex-col gap-4">
                    {/* Subtitle */}
                    <h4 className="text-xs sm:text-sm font-bold text-foreground/90 font-sans tracking-wide">
                      {release.subtitle}
                    </h4>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      {release.description}
                    </p>

                    {/* Key deliverables bullet points */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <span className="text-[10px] font-bold text-primary font-mono tracking-widest uppercase">
                        Core Achievements / Deliverables
                      </span>
                      <ul className="flex flex-col gap-2 text-xs text-muted font-sans list-none">
                        {release.deliverables.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 leading-normal">
                            <span className="text-primary font-mono font-bold flex-shrink-0 mt-0.5">&gt;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
}
