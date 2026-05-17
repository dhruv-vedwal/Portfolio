"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/systems", label: "Systems Explorer" },
  { path: "/engineering-notes", label: "Engineering Notes" },
  { path: "/resume", label: "Timeline" },
  { path: "/contact", label: "Contact Portal" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/80 py-4 shadow-lg shadow-background/5"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-card-elevated border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_10px_var(--primary-glow)] transition-all">
            <Terminal className="w-5 h-5 text-primary group-hover:scale-105 transition-transform" />
          </div>
          <span className="font-mono font-bold tracking-tight text-lg text-foreground flex items-center gap-1.5">
            DHRUV<span className="text-primary font-sans text-sm tracking-widest font-semibold bg-primary-glow px-1.5 py-0.5 rounded border border-primary/20">.SYS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-card/45 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/50">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors font-sans rounded-full ${
                  isActive ? "text-primary-hover" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-card-elevated border border-border rounded-full z-[-1]"
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
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Link
            href="/contact"
            className="relative overflow-hidden group px-5 py-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all cursor-pointer shadow-[0_0_15px_var(--primary-glow)] hover:shadow-[0_0_20px_rgba(79,124,255,0.3)] text-sm font-semibold tracking-wide text-foreground"
          >
            <span className="relative z-10 flex items-center gap-1">Launch Portal <span className="group-hover:translate-x-1 transition-transform">→</span></span>
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

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-lg flex flex-col px-6 py-8 md:hidden border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={`text-xl font-medium tracking-tight block py-2 ${
                        isActive ? "text-primary border-l-2 border-primary pl-3" : "text-muted pl-0"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto mb-10 flex flex-col gap-4"
            >
              <div className="h-px bg-border w-full" />
              <div className="flex items-center justify-between text-sm text-muted">
                <span>System Status</span>
                <span className="flex items-center gap-1.5 text-success">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-status-blink" />
                  Operational
                </span>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all font-semibold tracking-wide text-foreground shadow-[0_0_15px_var(--primary-glow)]"
              >
                Launch Portal
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
