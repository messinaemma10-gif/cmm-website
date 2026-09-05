import { NextRequest, NextResponse } from "next/server";

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

// TEMPORARY STUB.
// In production this route should:
//   1. Validate + persist the request (e.g. Supabase table `booking_requests`,
//      status = "pending") so it becomes lead-gen data, not just a calendar write
//   2. Create a Google Calendar event on Conner's calendar via the Calendar API
//      (or leave it "pending" until he approves, per the request-to-book flow)
//   3. Send a confirmation email to the client (e.g. via Resend) and a
//      notification to Conner
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

  console.log("New booking request (not yet persisted):", body);

  return NextResponse.json({ ok: true, status: "pending" });
}
