import React from "react";
import resumeData from "@/content/resume.json";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { 
  GitCommit, Download, Calendar, CircleDot, 
  GraduationCap, Award, Code2, Cpu, ExternalLink, Briefcase 
} from "lucide-react";

export const metadata = {
  title: "Professional Timeline | Dhruv Vedwal",
  description: "A professional timeline highlighting my software engineering journey, key architectural achievements, and projects.",
};

export default function ResumeTimelinePage() {
  const { personal, experience, skills, projects, achievements, education } = resumeData;

  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow blur-[140px] rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/80 pb-8">
          <div className="text-left max-w-2xl">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary-glow text-[10px] font-bold text-primary tracking-widest uppercase mb-3 rounded-sm">
                <GitCommit className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-normal text-foreground leading-[1.05]">
                Professional History
                <span className="block mt-2 font-sans text-xs uppercase tracking-[0.25em] text-primary font-bold">
                  Dhruv Vedwal &apos;s Release Versioning & Projects
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-sm sm:text-base text-muted font-sans mt-3 leading-relaxed">
                A chronological timeline of my professional experience, core engineering achievements, and milestones as a software engineer.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bespoke py-3 px-5 rounded-md flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Download CV</span>
            </a>
          </FadeIn>
        </div>

        {/* SECTION 1: Release Timeline Linear Track */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>Version Releases (Experience)</span>
            </h2>
          </FadeIn>

          <div className="relative border-l border-border/80 pl-6 sm:pl-8 ml-3 sm:ml-4 flex flex-col gap-12 text-left">
            <FadeInStagger>
              {experience.map((release, idx) => (
                <FadeIn key={release.version} direction="left" delay={idx * 0.08} className="relative">
                  {/* Timeline node marker badge */}
                  <div className="absolute top-1 -left-[35px] sm:-left-[43px] z-20 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-sm bg-background border border-border flex items-center justify-center hover:border-primary transition-colors shadow-sm">
                      {idx === 0 ? (
                        <CircleDot className="w-3.5 h-3.5 sm:w-4.5 h-4.5 text-primary animate-pulse" />
                      ) : (
                        <GitCommit className="w-3.5 h-3.5 sm:w-4.5 h-4.5 text-muted" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="card-blueprint rounded-lg overflow-hidden bg-card/45 backdrop-blur-md relative">
                    <div className="p-6 pb-4 border-b border-border/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-primary bg-primary-glow/15 border border-primary/20 px-2.5 py-0.5 rounded-sm">
                          {release.version}
                        </span>
                        <h3 className="text-lg font-serif font-medium text-foreground">
                          {release.company}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{release.period}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                      {/* Subtitle */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground font-mono uppercase tracking-wider">
                          {release.role}
                        </h4>
                        <span className="text-[10px] text-muted font-mono tracking-wide mt-1 block">
                          {release.location}
                        </span>
                      </div>

                      {/* Narrative Description */}
                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                        {release.description}
                      </p>

                      {/* Key deliverables bullet points */}
                      <div className="flex flex-col gap-2.5 pt-2">
                        <span className="text-[9px] font-bold text-primary font-mono tracking-widest uppercase">
                          System Implementations & Deliverables
                        </span>
                        <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted font-sans list-none">
                          {release.deliverables.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="text-primary font-mono font-bold flex-shrink-0 mt-0.5">&gt;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </div>

        {/* SECTION 2: Technical Skills Matrix */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-primary" />
              <span>Programming Skills Stack</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {Object.entries(skills).map(([category, list], idx) => {
              const categoryNames: Record<string, string> = {
                languages: "Languages & Runtimes",
                frontend: "Frontend Architecture",
                backend: "Backend Services & Real-time",
                databasesAndTools: "Databases, Tools & Cloud",
                testing: "Testing Frameworks",
                professionalSkills: "Professional Core Skills"
              };

              return (
                <FadeIn key={category} direction="up" delay={idx * 0.05}>
                  <div className="card-blueprint h-full p-5 flex flex-col gap-4 rounded-lg bg-card/40">
                    <div className="pb-3 border-b border-border/30">
                      <h3 className="text-xs font-bold font-mono tracking-widest uppercase text-primary">
                        {categoryNames[category] || category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {list.map((skillItem: string, skillIdx: number) => (
                        <span
                          key={skillIdx}
                          className="px-2.5 py-1 rounded-sm bg-card-elevated border border-border text-xs text-foreground font-mono hover:border-primary/20 hover:bg-primary-glow/10 transition-all duration-300 cursor-default"
                        >
                          {skillItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </FadeInStagger>
        </div>

        {/* SECTION 3: Projects Portfolio */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Featured Engineering Systems</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {projects.map((project, idx) => (
              <FadeIn key={project.title} direction="up" delay={idx * 0.08}>
                <div className="card-blueprint p-6 rounded-lg bg-card/40 flex flex-col justify-between group h-full">
                  <div className="pb-2">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors cursor-pointer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </h3>
                  </div>

                  <div className="pt-2 flex flex-col gap-4">
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-primary group-hover:text-primary-hover hover:underline"
                      >
                        <span>View Repository source</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* SECTION 4: Achievements & Mentorships */}
        <div className="flex flex-col gap-8">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground flex items-center gap-2.5">
              <Award className="w-5 h-5 text-primary" />
              <span>Milestones & Key Achievements</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {achievements.map((achievement, idx) => (
              <FadeIn key={achievement.title} direction="up" delay={idx * 0.08}>
                <div className="card-blueprint p-5 flex flex-col justify-between rounded-lg bg-card/40 h-full">
                  <div className="pb-2 border-b border-border/30">
                    <h3 className="text-xs font-bold font-mono tracking-widest uppercase text-primary">
                      {achievement.title}
                    </h3>
                  </div>
                  <div className="pt-3 flex flex-col gap-3 h-full justify-between">
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <div className="mt-auto pt-2">
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold font-mono text-primary hover:text-primary-hover"
                        >
                          <span>Verify Credentials</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        {/* SECTION 5: Academic Foundations */}
        <FadeIn direction="up" delay={0.1}>
          <div className="card-blueprint p-6 sm:p-8 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left bg-card/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary-glow border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-primary font-mono tracking-widest uppercase block mb-1">
                  Academic Foundations
                </span>
                <h3 className="text-lg font-serif font-medium text-foreground">
                  {education[0].institution}
                </h3>
                <p className="text-xs sm:text-sm text-muted font-sans mt-1">
                  {education[0].degree} • {education[0].score}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 font-mono text-xs text-muted">
              <Calendar className="inline-block w-4 h-4 mr-1.5 align-text-bottom text-primary" />
              <span>{education[0].period}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
