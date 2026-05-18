"use client";

import { useClinic } from "@/context/clinic-context";
import { X } from "lucide-react";
import { useEffect } from "react";

export function PatientDrawer() {
  const {
    selectedPatientId,
    setSelectedPatientId,
    getPatientById,
    patientNotes,
    setPatientNote,
  } = useClinic();

  const patient = selectedPatientId
    ? getPatientById(selectedPatientId)
    : undefined;
  const open = Boolean(patient);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPatientId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setSelectedPatientId]);

  if (!patient) return null;

  const note = patientNotes[patient.id] ?? "";

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40"
        aria-label="Close drawer"
        onClick={() => setSelectedPatientId(null)}
      />
      <aside className="relative flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{patient.name}</h2>
            <p className="text-sm text-slate-500">
              Age {patient.age} · Last visit {patient.lastVisit}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedPatientId(null)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Medical history
            </h3>
            <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-800">
              {patient.medicalHistory}
            </p>
          </section>

          <section>
            <label
              htmlFor="quick-note"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Quick note (doctor)
            </label>
            <textarea
              id="quick-note"
              rows={5}
              value={note}
              onChange={(e) => setPatientNote(patient.id, e.target.value)}
              placeholder="Session notes, follow-ups, or reminders…"
              className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
            />
          </section>
        </div>
      </aside>
    </div>
  );
}
