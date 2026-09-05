"use client";

import { useEffect, useMemo, useState } from "react";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/lib/projectTypes";
import type { AvailableSlot } from "@/app/api/availability/route";

type Step = "project" | "time" | "contact" | "done";

const STEP_ORDER: Step[] = ["project", "time", "contact", "done"];

function formatSlot(iso: string) {
  const date = new Date(iso);
  return {
    day: date.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
    }),
    time: date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }),
  };
}

const fieldClass =
  "mt-1 w-full border-2 border-black bg-white p-3 text-black outline-none focus:border-wine";
const labelClass = "text-sm font-semibold uppercase tracking-wide text-black/70";
const primaryButtonClass =
  "border-2 border-black bg-wine px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[4px_4px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[2px_2px_0_#0d0a0a] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none";
const secondaryButtonClass =
  "border-2 border-black px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-black hover:text-white";

export default function BookingForm() {
  const [step, setStep] = useState<Step>("project");

  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].id);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);

  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedType = useMemo(
    () => PROJECT_TYPES.find((p) => p.id === projectType) ?? PROJECT_TYPES[0],
    [projectType]
  );

  useEffect(() => {
    if (step !== "time") return;
    setSlotsLoading(true);
    fetch(`/api/availability?duration=${selectedType.durationMinutes}`)
      .then((res) => res.json())
      .then((data) => setSlots(data.slots ?? []))
      .finally(() => setSlotsLoading(false));
  }, [step, selectedType.durationMinutes]);

  const slotsByDay = useMemo(() => {
    const groups = new Map<string, AvailableSlot[]>();
    for (const slot of slots) {
      const { day } = formatSlot(slot.start);
      if (!groups.has(day)) groups.set(day, []);
      groups.get(day)!.push(slot);
    }
    return groups;
  }, [slots]);

  async function handleSubmit() {
    if (!selectedSlot) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType,
          description,
          address,
          budget,
          name,
          email,
          phone,
          slotStart: selectedSlot.start,
          slotEnd: selectedSlot.end,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStep("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  const currentIndex = STEP_ORDER.indexOf(step);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      {step !== "done" && (
        <div className="mb-10 flex items-center gap-2">
          {STEP_ORDER.slice(0, 3).map((s, i) => (
            <div
              key={s}
              className={`h-2 flex-1 border-2 border-black ${
                i <= currentIndex ? "bg-wine" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}

      {step === "project" && (
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            Step 1 of 3
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-black">
            TELL US ABOUT THE PROJECT
          </h1>
          <p className="mt-2 text-black/70">
            This helps us block the right amount of time on the calendar.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                className={`border-2 p-4 text-left transition ${
                  projectType === type.id
                    ? "border-wine bg-wine/10"
                    : "border-black/30 hover:border-black"
                }`}
              >
                <p className="font-display text-lg tracking-wide text-black">{type.label}</p>
                <p className="mt-1 text-sm text-black/70">{type.description}</p>
              </button>
            ))}
          </div>

          <label className="mt-6 block">
            <span className={labelClass}>Describe the project</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={fieldClass}
              placeholder="What are you looking to do?"
            />
          </label>

          <label className="mt-4 block">
            <span className={labelClass}>Property address</span>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={fieldClass}
              placeholder="Street, city — Northeast Ohio / Akron area"
            />
          </label>

          <label className="mt-4 block">
            <span className={labelClass}>Approximate budget (optional)</span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={fieldClass}
            >
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            disabled={!description || !address}
            onClick={() => setStep("time")}
            className={`${primaryButtonClass} mt-8 w-full`}
          >
            Continue to Available Times
          </button>
        </div>
      )}

      {step === "time" && (
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            Step 2 of 3
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-black">PICK A TIME</h1>
          <p className="mt-2 text-black/70">
            Pulled from CMM&apos;s real availability — a{" "}
            {selectedType.durationMinutes}-minute {selectedType.label.toLowerCase()}{" "}
            consultation.
          </p>

          {slotsLoading && (
            <p className="mt-8 text-black/60">Loading available times…</p>
          )}

          {!slotsLoading && (
            <div className="mt-8 space-y-6">
              {Array.from(slotsByDay.entries()).map(([day, daySlots]) => (
                <div key={day}>
                  <p className="font-display text-lg tracking-wide text-black">{day}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {daySlots.map((slot) => {
                      const { time } = formatSlot(slot.start);
                      const isSelected = selectedSlot?.start === slot.start;
                      return (
                        <button
                          key={slot.start}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`border-2 px-4 py-2 font-mono text-sm transition ${
                            isSelected
                              ? "border-wine bg-wine text-white"
                              : "border-black/30 text-black hover:border-black"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <button type="button" onClick={() => setStep("project")} className={secondaryButtonClass}>
              Back
            </button>
            <button
              type="button"
              disabled={!selectedSlot}
              onClick={() => setStep("contact")}
              className={`${primaryButtonClass} flex-1`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === "contact" && (
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            Step 3 of 3
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-black">ALMOST THERE</h1>
          <p className="mt-2 text-black/70">How should CMM reach you to confirm?</p>

          <label className="mt-8 block">
            <span className={labelClass}>Full name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
          </label>

          <label className="mt-4 block">
            <span className={labelClass}>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </label>

          <label className="mt-4 block">
            <span className={labelClass}>Phone</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
            />
          </label>

          {error && <p className="mt-4 text-sm font-semibold text-chilli">{error}</p>}

          <div className="mt-8 flex gap-3">
            <button type="button" onClick={() => setStep("time")} className={secondaryButtonClass}>
              Back
            </button>
            <button
              type="button"
              disabled={!name || !email || !phone || submitting}
              onClick={handleSubmit}
              className={`${primaryButtonClass} flex-1`}
            >
              {submitting ? "Sending…" : "Request This Time"}
            </button>
          </div>
        </div>
      )}

      {step === "done" && selectedSlot && (
        <div className="text-center">
          <h1 className="font-display text-4xl tracking-wide text-black">REQUEST SENT</h1>
          <p className="mx-auto mt-4 max-w-md text-black/75">
            Thanks, {name.split(" ")[0] || "there"} — CMM will confirm your{" "}
            {formatSlot(selectedSlot.start).day.toLowerCase()} at{" "}
            {formatSlot(selectedSlot.start).time} consultation shortly.{" "}
            You&apos;ll get an email once it&apos;s on the calendar.
          </p>
        </div>
      )}
    </div>
  );
}
