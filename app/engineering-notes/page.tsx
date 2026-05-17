import React from "react";
import Link from "next/link";
import { getAllNotes } from "@/lib/mdx";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { BookOpen, Calendar, Clock, Terminal } from "lucide-react";

export const metadata = {
  title: "Engineering Decision Journal | Dhruv Vedwal",
  description: "A detailed journal documenting architectural decisions, design choices, queue strategies, real-time sync systems, and failure recovery tradeoffs.",
};

export default function EngineeringNotesPage() {
  const notes = getAllNotes();

  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary-glow blur-[160px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-glow text-xs text-primary font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Journal</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-sans">
              Engineering Notes
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-muted font-sans mt-3 leading-relaxed">
              Why build it this way? This journal documents my architectural rationale, design trade-offs, queue configurations, and real-time synchronizations.
            </p>
          </FadeIn>
        </div>

        {/* Notes List */}
        {notes.length > 0 ? (
          <FadeInStagger className="flex flex-col gap-6">
            {notes.map((note, idx) => (
              <FadeIn key={note.slug} direction="up" delay={idx * 0.08}>
                <Link href={`/engineering-notes/${note.slug}`} className="block group">
                  <Card className="p-6 sm:p-8 hover:border-primary/40 hover:shadow-[0_0_15px_var(--primary-glow)] transition-all duration-300">
                    <div className="flex flex-col gap-4">
                      {/* Meta: Category + Date + Read Time */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 gap-y-2 text-xs font-mono text-muted">
                        <span className="px-2 py-0.5 rounded border border-primary/20 bg-primary-glow/10 text-primary font-semibold">
                          {note.category}
                        </span>
                        
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {note.date}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {note.readTime}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="flex flex-col gap-2.5">
                        <CardTitle className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors font-sans leading-tight">
                          {note.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-muted leading-relaxed font-sans line-clamp-2 pt-0.5">
                          {note.excerpt}
                        </CardDescription>
                      </div>

                      {/* Link Action */}
                      <div className="flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:text-primary-hover group-hover:translate-x-1.5 transition-all">
                        <span>Read full assessment</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </FadeInStagger>
        ) : (
          <FadeIn direction="none" delay={0.2}>
            <div className="w-full text-center py-16 border border-border bg-card/15 rounded-2xl flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-card-elevated border border-border flex items-center justify-center text-muted">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground font-sans">No journal entries found</h4>
                <p className="text-xs text-muted leading-relaxed font-sans mt-1.5 max-w-[280px] mx-auto">
                  Ensure .mdx articles are correctly enqueued in the /content/notes/ directory.
                </p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
