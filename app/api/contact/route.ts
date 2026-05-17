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
    
    // Generate a unique administrative ticket ID
    const ticketId = `SYS-TKT-${Math.floor(10000 + Math.random() * 90000)}`;

    // 2. Server console logging (Ingress Telemetry)
    console.log("==========================================");
    console.log(`[CONTACT INGRESS] TICKET CREATED: ${ticketId}`);
    console.log(`FROM: ${name} (${email})`);
    console.log(`REASON: ${reason}`);
    console.log(`MESSAGE: ${message}`);
    console.log("==========================================");

    /* 
      ======================================================
      RESEND INTEGRATION TEMPLATE (Ready for Production)
      ======================================================
      To activate active email dispatches, run:
      `npm install resend`
      
      And uncomment the following block:
      
      if (process.env.RESEND_API_KEY) {
        try {
          const { Resend } = await import("resend");
          const resend = new Resend(process.env.RESEND_API_KEY);
          
          await resend.emails.send({
            from: "Dhruv Systems Portal <portal@dhruv.systems>",
            to: "vedwal.dhruv@gmail.com", // Your personal destination inbox
            subject: `[SYSTEMS PORTAL] New Request: ${reason} (${ticketId})`,
            html: `
              <h3>New Support Portal Ticket</h3>
              <p><strong>Ticket ID:</strong> ${ticketId}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Reason:</strong> ${reason}</p>
              <p><strong>Message:</strong></p>
              <p style="padding: 10px; background: #f3f4f6; border-radius: 6px;">${message}</p>
            `
          });
          console.log(`[RESEND] Active email successfully dispatched for ${ticketId}`);
        } catch (emailErr) {
          console.error("[RESEND ERROR] Failed to dispatch active email", emailErr);
        }
      }
    */

    // Simulate mild network latency for a highly realistic and satisfying loader transition
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      {
        success: true,
        message: "Portal request successfully enqueued.",
        ticketId,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT ERROR] Ingress exception", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
