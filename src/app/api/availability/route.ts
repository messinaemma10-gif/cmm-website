import { NextRequest, NextResponse } from "next/server";

export type AvailableSlot = {
  start: string; // ISO
  end: string; // ISO
};

// TEMPORARY MOCK DATA.
// In production this route should call the Google Calendar API
// (freebusy.query against Conner's connected calendar), subtract
// existing events, and return only genuinely open slots. Requires:
//   1. A Google Cloud project with the Calendar API enabled
//   2. OAuth consent + a refresh token stored server-side for Conner's account
//   3. Business hours / buffer rules (e.g. no same-day booking, drive time between jobs)
export async function GET(request: NextRequest) {
  const durationMinutes = Number(
    request.nextUrl.searchParams.get("duration") ?? 60
  );

  const slots: AvailableSlot[] = [];
  const now = new Date();
  const workHours = [9, 11, 13, 15]; // mock start hours (24h)

  for (let dayOffset = 1; dayOffset <= 10 && slots.length < 12; dayOffset++) {
    const day = new Date(now);
    day.setDate(day.getDate() + dayOffset);
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    if (isWeekend) continue;

    for (const hour of workHours) {
      const start = new Date(day);
      start.setHours(hour, 0, 0, 0);
      const end = new Date(start.getTime() + durationMinutes * 60_000);
      slots.push({ start: start.toISOString(), end: end.toISOString() });
    }
  }

  return NextResponse.json({ slots });
}
