"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Send, ShieldCheck, Mail, CheckCircle2, RefreshCw, ServerCrash } from "lucide-react";

// Form Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  reason: z.enum(["Hiring Opportunity", "Collaboration", "Consulting", "General Inquiry"]),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    ticketId?: string;
    timestamp?: string;
    error?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "Hiring Opportunity",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit request.");
      }

      setSubmitResult({
        success: true,
        ticketId: resData.ticketId,
        timestamp: resData.timestamp,
      });
      reset();
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Network socket error. Please try again.";
      setSubmitResult({
        success: false,
        error: errorMsg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background radial visual effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary-glow blur-[150px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        {/* Title panel */}
        <div className="text-left mb-10">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-glow text-xs text-primary font-semibold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Portal Ingress</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
              Connect With Me
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-muted font-sans mt-3 leading-relaxed">
              Have an open role, collaboration idea, or complex engineering problem? Submit a secure portal ticket below. I will respond to your request within 24 hours.
            </p>
          </FadeIn>
        </div>

        {/* Dynamic Display: Form vs Success Card vs Error */}
        <FadeIn direction="none" delay={0.4} duration={0.6}>
          {submitResult?.success ? (
            /* Gorgeous Ingress Success Ticket Card */
            <Card className="border border-success/40 bg-card p-8 shadow-[0_0_20px_var(--success-glow)] text-center flex flex-col items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-success/15 border-2 border-success flex items-center justify-center text-success animate-bounce">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] text-success font-bold tracking-widest uppercase">
                  TICKET ENQUEUED SUCCESSFULLY
                </span>
                <CardTitle className="text-2xl font-extrabold text-foreground font-sans">
                  Support Request Logged
                </CardTitle>
              </div>

              {/* Support ticket credentials details */}
              <div className="w-full bg-card-elevated/75 border border-border rounded-xl p-5 text-left font-mono text-xs flex flex-col gap-3">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-muted">TICKET REFERENCE:</span>
                  <span className="text-success font-bold">{submitResult.ticketId}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-muted">TIMESTAMP:</span>
                  <span className="text-foreground">{new Date(submitResult.timestamp!).toLocaleTimeString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">DISPATCH QUEUE:</span>
                  <span className="text-primary font-bold">BULL-MQ-CONTACTS</span>
                </div>
                
                <p className="text-[10px] text-muted leading-relaxed font-sans mt-2 pt-2 border-t border-border/40">
                  Your request has been successfully buffered in my backend event streams. A secure webhook notification has been dispatched to my inbox. Thank you!
                </p>
              </div>

              <Button
                variant="outline"
                onClick={() => setSubmitResult(null)}
                className="w-full mt-2 font-mono text-xs"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Create Another Ticket
              </Button>
            </Card>
          ) : (
            /* Operational Support Form */
            <Card className="border border-border p-6 sm:p-8 bg-card/20 backdrop-blur-sm relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-left">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-foreground font-sans">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className={`px-4 py-3 rounded-xl bg-card-elevated border text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${
                      errors.name ? "border-red-500/60" : "border-border/120"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-mono font-semibold">
                      * {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-foreground font-sans">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email")}
                    className={`px-4 py-3 rounded-xl bg-card-elevated border text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${
                      errors.email ? "border-red-500/60" : "border-border/120"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-mono font-semibold">
                      * {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Reason Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="reason" className="text-xs font-bold text-foreground font-sans">
                    INQUIRY REASON
                  </label>
                  <select
                    id="reason"
                    {...register("reason")}
                    className={`px-4 py-3 rounded-xl bg-card-elevated border text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer ${
                      errors.reason ? "border-red-500/60" : "border-border/120"
                    }`}
                  >
                    <option value="Hiring Opportunity">Hiring Opportunity (Full-Time / Contract)</option>
                    <option value="Collaboration">Collaboration (Open Source / Startup)</option>
                    <option value="Consulting">Consulting (Architecture Audit / Scaling)</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.reason && (
                    <span className="text-[10px] text-red-500 font-mono font-semibold">
                      * {errors.reason.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground font-sans">
                    INSTRUCTIONS / DETAILS
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Detail your requirements, project scope, or opportunity..."
                    {...register("message")}
                    className={`px-4 py-3 rounded-xl bg-card-elevated border text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none ${
                      errors.message ? "border-red-500/60" : "border-border/120"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-mono font-semibold">
                      * {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Error warning bar */}
                {submitResult?.success === false && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 text-xs font-mono font-semibold">
                    <ServerCrash className="w-4 h-4 flex-shrink-0" />
                    <span>ERROR: {submitResult.error}</span>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  isLoading={submitting}
                  className="w-full mt-2 py-3 rounded-xl flex items-center justify-center gap-2 font-sans font-semibold tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Portal Ticket</span>
                </Button>
              </form>
            </Card>
          )}
        </FadeIn>

        {/* Compliancy disclaimer footer */}
        <div className="mt-8 flex items-center justify-center gap-1.5 font-mono text-[10px] text-muted">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span>Secured Ingress | TLS Encrypted Connection</span>
        </div>
      </div>
    </div>
  );
}
