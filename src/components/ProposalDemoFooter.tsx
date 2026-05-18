"use client";

import { Info } from "lucide-react";

export function ProposalDemoFooter() {
  return (
    <footer className="shrink-0 border-t border-slate-200 bg-slate-50/80 px-4 py-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-900/5 md:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Info className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 space-y-2 text-sm leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-900">
              Demonstration preview (proposal only)
            </p>
            <p>
              You are viewing a <strong>sample demo</strong> we prepared for this
              proposal. Screens, numbers, and actions are illustrative so you can
              judge layout, flow, and overall experience.
            </p>
            <p>
              This is not a finished or production-ready build yet:
              there is no live backend, no real patient data, and features are
              scoped to the demo. The full implementation will include security,
              integrations, and your clinic&apos;s workflows.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
