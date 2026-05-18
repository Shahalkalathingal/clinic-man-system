"use client";

import { CheckCircle2 } from "lucide-react";
import { useClinic } from "@/context/clinic-context";
import { WhatsAppMark } from "@/components/WhatsAppMark";

export function RecentRemindersCard() {
  const { reminders } = useClinic();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C7E]">
          <WhatsAppMark className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Recent reminders
          </h2>
          <p className="text-xs text-slate-500">WhatsApp delivery log (demo)</p>
        </div>
      </div>

      <ul className="mt-4 divide-y divide-slate-100">
        {reminders.slice(0, 6).map((r) => (
          <li
            key={r.id}
            className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-800">{r.text}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Delivered
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
