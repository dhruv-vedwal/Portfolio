import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNoteBySlug, getAllNotes } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routing paths for all available notes at build time
export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

// Fetch dynamic metadata for SEO tags
export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  
  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: `${note.title} | Dhruv Vedwal`,
    description: note.excerpt,
    openGraph: {
      title: `${note.title} | Dhruv Vedwal`,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
    },
  };
}

// Visual overrides for Markdown HTML compilation
const customMdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-10 mb-4 font-sans tracking-tight leading-snug" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-10 mb-4 font-sans tracking-tight border-b border-border/40 pb-2.5" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3 font-sans" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-sm sm:text-base text-muted leading-relaxed font-sans mb-5" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-6 text-sm sm:text-base text-muted flex flex-col gap-2.5 font-sans" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-6 text-sm sm:text-base text-muted flex flex-col gap-2.5 font-sans" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 leading-relaxed" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-card-elevated border border-border text-foreground font-semibold" {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre className="font-mono text-xs overflow-x-auto p-4 rounded-xl bg-card border border-border text-foreground mb-6 max-h-[480px] leading-relaxed shadow-inner" {...props} />
  ),
  hr: (props: React.ComponentPropsWithoutRef<"hr">) => (
    <hr className="border-border/40 my-10" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted my-6 bg-primary-glow/5 rounded-r" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="w-full overflow-x-auto my-6 border border-border rounded-xl">
      <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className="p-3 font-bold bg-card-elevated border-b border-border text-foreground uppercase tracking-wider text-[10px]" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="p-3 border-b border-border/40 text-muted leading-normal" {...props} />
  ),
};

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return notFound();
  }

  return (
    <article className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-glow blur-[150px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link
            href="/engineering-notes"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="border-b border-border/80 pb-8 mb-10 text-left">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold font-mono text-primary bg-primary-glow/10 border border-primary/20 px-2.5 py-0.5 rounded uppercase tracking-wider mb-4">
              <BookOpen className="w-3 h-3" />
              {note.category}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15] font-sans">
              {note.title}
            </h1>
          </FadeIn>

          {/* Meta parameters */}
          <FadeIn direction="up" delay={0.3} className="flex flex-wrap gap-4 mt-6 text-xs text-muted font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {note.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {note.readTime}
            </span>
          </FadeIn>
        </div>

        {/* Compiled MDX Content */}
        <FadeIn direction="none" delay={0.4} duration={0.6}>
          <div className="text-left select-text">
            <MDXRemote source={note.content} components={customMdxComponents} />
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
