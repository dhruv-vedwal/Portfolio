"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Sun, Moon, Terminal, 
  Home, FileText, Workflow, BookOpen, Send 
} from "lucide-react";
 
const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/resume", label: "Timeline" },
  { path: "/systems", label: "System Designs" },
  { path: "/engineering-notes", label: "Engineering Notes" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b flex flex-col ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/80 shadow-lg shadow-background/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className={`max-w-7xl w-full mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-sm bg-card-elevated border border-border flex items-center justify-center transition-all group-hover:border-primary">
            <Terminal className="w-4.5 h-4.5 text-primary group-hover:scale-105 transition-transform" />
          </div>
          <span className="font-mono font-bold tracking-tight text-lg text-foreground flex items-center gap-1.5">
            DHRUV<span className="text-primary font-sans text-[10px] tracking-widest font-bold bg-primary-glow px-1.5 py-0.5 rounded-sm border border-primary/20">.SYS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-card/45 backdrop-blur-sm px-1.5 py-1 rounded-md border border-border/50">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors font-mono rounded-md ${
                  isActive ? "text-background" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary rounded-md z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-md border border-border bg-card flex items-center justify-center text-muted hover:text-foreground hover:border-primary transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Link
            href="/contact"
            className="btn-bespoke py-2 px-4 rounded-md"
          >
            <span className="relative z-10 flex items-center gap-1">Contact Me <span className="group-hover:translate-x-0.5 transition-transform">→</span></span>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Drawer overlay backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-xs z-40 md:hidden"
            />
            {/* Slide-out Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 h-full w-[290px] sm:w-[340px] z-50 bg-card-elevated/95 backdrop-blur-xl border-l border-border flex flex-col p-6 md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Sidebar Header: Combined Logo & Developer Identity */}
              <div className="flex items-center justify-between pb-5 border-b border-border/50 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-glow border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col min-w-0 text-left">
                    <span className="font-mono font-bold tracking-tight text-foreground text-sm flex items-center gap-1">
                      DHRUV<span className="text-primary font-sans text-[10px] font-semibold bg-primary-glow px-1 py-0.5 rounded border border-primary/20 font-mono">.SYS</span>
                    </span>
                    <span className="text-[10px] text-muted truncate font-mono">System Architect</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary/40 cursor-pointer transition-all hover:text-primary"
                  aria-label="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive =
                    item.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.path);

                  // Map items to icons
                  const iconMap = {
                    "/": Home,
                    "/resume": FileText,
                    "/systems": Workflow,
                    "/engineering-notes": BookOpen,
                    "/contact": Send,
                  };
                  const Icon = iconMap[item.path as keyof typeof iconMap] || Terminal;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        className={`group relative text-sm font-medium tracking-tight flex items-center gap-3 py-3 px-4 rounded-xl transition-all ${
                          isActive
                            ? "text-primary bg-primary-glow/10 font-semibold pl-4.5"
                            : "text-muted hover:text-foreground hover:bg-card-elevated/40 pl-3.5"
                        }`}
                      >
                        {/* Perfect Straight Accent Line for Active Link */}
                        {isActive && (
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r" />
                        )}
                        <Icon className={`w-4.5 h-4.5 transition-transform group-hover:scale-105 ${isActive ? "text-primary" : "text-muted group-hover:text-foreground"}`} />
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Sidebar Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-auto pt-6 flex flex-col gap-4"
              >
                <div className="h-px bg-border/50 w-full" />

                {/* Social Connect Row */}
                <div className="flex items-center justify-around text-muted px-1.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-2 hover:bg-card border border-transparent hover:border-border rounded-lg flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-2 hover:bg-card border border-transparent hover:border-border rounded-lg flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
