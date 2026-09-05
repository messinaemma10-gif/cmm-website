import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { PROJECT_TYPES } from "@/lib/projectTypes";

export type BookingRequest = {
  projectType: string;
  description: string;
  address: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  slotStart: string;
  slotEnd: string;
};

const NOTIFY_EMAIL = "cmamula@icloud.com";

function formatSlot(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

// TODO: persist requests to a database (e.g. Supabase) so they become
// durable lead-gen data, not just an email. TODO: create a Google Calendar
// event on Conner's calendar via the Calendar API once he connects it.
export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<BookingRequest>;

  const required: (keyof BookingRequest)[] = [
    "projectType",
    "description",
    "address",
    "name",
    "email",
    "phone",
    "slotStart",
    "slotEnd",
  ];
  const missing = required.filter((key) => !body[key]);

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const projectLabel =
    PROJECT_TYPES.find((p) => p.id === body.projectType)?.label ??
    body.projectType;

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "CMM Website <onboarding@resend.dev>",
        to: NOTIFY_EMAIL,
        replyTo: body.email,
        subject: `New consultation request — ${body.name} (${projectLabel})`,
        text: [
          `New booking request from the website:`,
          ``,
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone}`,
          `Project type: ${projectLabel}`,
          `Description: ${body.description}`,
          `Address: ${body.address}`,
          `Budget: ${body.budget ?? "Not provided"}`,
          `Requested time: ${formatSlot(body.slotStart!)}`,
        ].join("\n"),
      });
    } catch (error) {
      console.error("Failed to send booking notification email:", error);
    }
  } else {
    console.warn(
      "RESEND_API_KEY not set — skipping email, logging booking instead:",
      body
    );
  }

  return NextResponse.json({ ok: true, status: "pending" });
}
