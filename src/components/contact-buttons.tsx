"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { DATA } from "@/data/resume";

export function ContactButtons() {
  const handleSendEmail = (e: React.MouseEvent) => {
    // Copy to clipboard
    navigator.clipboard.writeText(DATA.contact.email);
    // Show toast
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="mx-auto w-full max-w-2xl flex flex-wrap gap-4">
      <Link
        href="https://cal.com/temple-ajuzie-3k0lc1/30min"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="rounded-lg px-4 py-4 text-sm font-base shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-2">
          <Calendar className="size-5" />
          Book Meeting
        </Button>
      </Link>
      <Link href="/cv.pdf" target="_blank" rel="noreferrer">
        <Button
          variant="outline"
          className="rounded-lg px-4 py-4 text-sm font-base shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Download className="size-5" />
          Download CV
        </Button>
      </Link>

      <Link href={`mailto:${DATA.contact.email}`} onClick={handleSendEmail}>
        <Button
          variant="outline"
          className="rounded-lg px-4 py-4 text-sm font-base shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Mail className="size-5" />
          Send Email
        </Button>
      </Link>
    </div>
  );
}
