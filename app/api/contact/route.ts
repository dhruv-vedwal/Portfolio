import { NextResponse } from "next/server";
import { z } from "zod";

// Re-declare contact validation schema on the server side for maximum safety
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  reason: z.enum(["Hiring Opportunity", "Collaboration", "Consulting", "General Inquiry"]),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function POST(req: Request) {
  try {
    const rawData = await req.json();
    
    // 1. Strict server-side Zod validation
    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, reason, message } = result.data;
    
    // Generate a unique message ID
    const ticketId = `MSG-${Math.floor(10000 + Math.random() * 90000)}`;

    // 2. Server console logging (Contact Telemetry)
    console.log("==========================================");
    console.log(`[CONTACT PORTAL] MESSAGE RECEIVED: ${ticketId}`);
    console.log(`FROM: ${name} (${email})`);
    console.log(`REASON: ${reason}`);
    console.log(`MESSAGE: ${message}`);
    console.log("==========================================");

    // 3. Active Resend Email Dispatch
    let emailSent = false;
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (apiKey && apiKey !== "re_your_free_key_here") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        
        await resend.emails.send({
          from: `Portfolio Contact <${fromEmail}>`,
          to: "vedwaldhruv12@gmail.com", // Your personal destination inbox
          replyTo: email, // Allows you to hit "Reply" in your inbox to email the visitor directly!
          subject: `[Portfolio Contact] New message from ${name} - ${reason}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; color: #1f2937;">
              <h2 style="color: #4f46e5; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Contact Message</h2>
              <p><strong>Message ID:</strong> <span style="font-family: monospace; background-color: #f3f4f6; padding: 2px 6px; border-radius: 4px;">${ticketId}</span></p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
              <p><strong>Reason for Contact:</strong> ${reason}</p>
              
              <div style="margin-top: 25px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #4f46e5; border-radius: 4px;">
                <p style="margin-top: 0; font-weight: bold; color: #374151;">Message Details:</p>
                <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6; color: #4b5563;">${message}</p>
              </div>
            </div>
          `
        });
        emailSent = true;
        console.log(`[RESEND] Contact email successfully dispatched for ${ticketId}`);
      } catch (emailErr) {
        console.error("[RESEND ERROR] Failed to dispatch email", emailErr);
      }
    } else {
      console.log(`[RESEND SANDBOX] Skipped real dispatch (API Key missing or placeholder). Message ID: ${ticketId}`);
    }

    // Simulate mild network latency for a highly realistic and satisfying loader transition
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      {
        success: true,
        message: emailSent ? "Message successfully sent." : "Message enqueued in sandbox mode.",
        ticketId,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT ERROR] Exception handler", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
