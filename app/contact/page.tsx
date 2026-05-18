"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Send, Mail, CheckCircle2, RefreshCw, ServerCrash } from "lucide-react";

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
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center py-6 sm:py-10 relative overflow-hidden">
      {/* Background radial visual effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow blur-[160px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center animate-fade-in">
          
          {/* Left Column: Rich Info Panel */}
          <div className="md:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary-glow text-[10px] font-bold text-primary tracking-widest uppercase w-fit mb-1 rounded-sm">
                  <Mail className="w-3 h-3" />
                  <span>Get In Touch</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-normal text-foreground leading-[1.05]">
                  Connect <br className="hidden md:inline" />
                  With Me
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed max-w-sm mt-1">
                  Have an open role, collaboration idea, or complex engineering problem? Drop a message. I will respond to your request within 24 hours.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Dynamic Form Card with Header */}
          <div className="md:col-span-7 w-full max-w-2xl mx-auto">
            <FadeIn direction="none" delay={0.4} duration={0.6}>
              {submitResult?.success ? (
                /* Gorgeous Human Success Card */
                <div className="card-blueprint p-6 sm:p-8 text-center flex flex-col items-center gap-5 rounded-lg border border-success/40 bg-card/45 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-sm bg-success/15 border-2 border-success flex items-center justify-center text-success animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-success font-bold tracking-widest uppercase">
                      MESSAGE SENT SUCCESSFULLY
                    </span>
                    <h2 className="text-2xl font-serif font-medium text-foreground">
                      Message Delivered
                    </h2>
                  </div>

                  {/* Message credentials details */}
                  <div className="w-full bg-card-elevated/75 border border-border/80 rounded-sm p-4 text-left font-mono text-[11px] flex flex-col gap-2">
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted">MESSAGE ID:</span>
                      <span className="text-success font-bold">{submitResult.ticketId}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted">TIMESTAMP:</span>
                      <span className="text-foreground">{new Date(submitResult.timestamp!).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">DELIVERY STATUS:</span>
                      <span className="text-success font-bold">RECEIVED DIRECTLY</span>
                    </div>
                    
                    <p className="text-[10px] text-muted leading-relaxed font-sans mt-1.5 pt-1.5 border-t border-border/40">
                      Your message has been successfully received. A secure notification has been sent directly to my primary inbox. I will read it and reply back soon.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitResult(null)}
                    className="btn-bespoke w-full mt-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5 mr-2" />
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Operational Support Form Card with Header */
                <div className="card-blueprint p-6 sm:p-8 bg-card-elevated/20 backdrop-blur-md relative overflow-hidden rounded-lg">
                  {/* Card Internal Header to avoid being "bald" */}
                  <div className="mb-5 pb-4 border-b border-border/30">
                    <h2 className="text-xl font-serif font-medium text-foreground tracking-normal">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-muted font-sans mt-0.5 leading-relaxed">
                      Fill out the form below and I will get back to you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
                    {/* 2-Column Row for Name & Email on Desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[9px] font-bold text-foreground/80 tracking-widest font-mono uppercase">
                          YOUR NAME
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          {...register("name")}
                          className={`px-3.5 py-2.5 rounded-md bg-card border text-xs sm:text-sm text-foreground placeholder:text-muted/40 focus:border-primary focus:bg-card-elevated outline-none transition-all duration-300 ${
                            errors.name ? "border-red-500/50" : "border-border/60"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[9px] text-red-500 font-mono font-semibold">
                            * {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[9px] font-bold text-foreground/80 tracking-widest font-mono uppercase">
                          EMAIL ADDRESS
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          {...register("email")}
                          className={`px-3.5 py-2.5 rounded-md bg-card border text-xs sm:text-sm text-foreground placeholder:text-muted/40 focus:border-primary focus:bg-card-elevated outline-none transition-all duration-300 ${
                            errors.email ? "border-red-500/50" : "border-border/60"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[9px] text-red-500 font-mono font-semibold">
                            * {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Reason Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="reason" className="text-[9px] font-bold text-foreground/80 tracking-widest font-mono uppercase">
                        REASON FOR CONTACT
                      </label>
                      <select
                        id="reason"
                        {...register("reason")}
                        className={`px-3.5 py-2.5 rounded-md bg-card border text-xs sm:text-sm text-foreground focus:border-primary focus:bg-card-elevated outline-none transition-all duration-300 cursor-pointer ${
                          errors.reason ? "border-red-500/50" : "border-border/60"
                        }`}
                      >
                        <option value="Hiring Opportunity">Hiring Opportunity (Full-Time / Contract)</option>
                        <option value="Collaboration">Collaboration (Open Source / Startup)</option>
                        <option value="Consulting">Consulting (Architecture Audit / Scaling)</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      {errors.reason && (
                        <span className="text-[9px] text-red-500 font-mono font-semibold">
                          * {errors.reason.message}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[9px] font-bold text-foreground/80 tracking-widest font-mono uppercase">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Detail your requirements, project scope, or opportunity..."
                        {...register("message")}
                        className={`px-3.5 py-2.5 rounded-md bg-card border text-xs sm:text-sm text-foreground placeholder:text-muted/40 focus:border-primary focus:bg-card-elevated outline-none transition-all duration-300 resize-none ${
                          errors.message ? "border-red-500/50" : "border-border/60"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[9px] text-red-500 font-mono font-semibold">
                          * {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Error warning bar */}
                    {submitResult?.success === false && (
                      <div className="flex items-center gap-2 p-3 rounded-md border border-red-500/20 bg-red-500/10 text-red-500 text-xs font-mono font-semibold">
                        <ServerCrash className="w-4 h-4 flex-shrink-0" />
                        <span>ERROR: {submitResult.error}</span>
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-bespoke-solid w-full mt-1.5 py-2.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {submitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
