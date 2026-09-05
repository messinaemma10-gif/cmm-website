import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book a Consultation | CMM Contracting Solutions",
  description:
    "Request a free consultation with CMM Contracting Solutions, synced to real availability in Hudson, Ohio and the Akron area.",
};

export default function BookPage() {
  return <BookingForm />;
}
