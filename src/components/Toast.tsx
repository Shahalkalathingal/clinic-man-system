"use client";

import { CheckCircle2, X } from "lucide-react";
import { useClinic } from "@/context/clinic-context";

export function Toast() {
  const { toast, dismissToast } = useClinic();
  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 sm:justify-end sm:pr-8">
      <div
        className="pointer-events-auto flex max-w-md items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-lg ring-1 ring-slate-900/5"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        <p className="text-sm leading-relaxed text-slate-800">{toast.message}</p>
        <button
          type="button"
          onClick={dismissToast}
          className="-m-1 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
