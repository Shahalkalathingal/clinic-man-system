"use client";

import { useEffect, useState } from "react";
import { WhatsAppMark } from "@/components/WhatsAppMark";
import { useClinic } from "@/context/clinic-context";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AppointmentModal({ open, onOpenChange }: Props) {
  const { addAppointment } = useClinic();
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [whatsapp, setWhatsapp] = useState(true);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      const first = document.querySelector<HTMLInputElement>(
        "[data-app-modal-first]"
      );
      first?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addAppointment({
      patientName: patientName.trim(),
      phone: phone.trim(),
      date,
      time,
      whatsapp,
    });
    setPatientName("");
    setPhone("");
    setDate("");
    setTime("");
    setWhatsapp(true);
    onOpenChange(false);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-lg rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-900/5"
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              New appointment
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Add a visit and optionally queue a WhatsApp reminder.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Patient name
              </label>
              <input
                data-app-modal-first
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
                placeholder="e.g. Jane Smith"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Phone number
              </label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
                placeholder="+971 50 123 4567"
                type="tel"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Date
              </label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Time
              </label>
              <input
                required
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
              />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-sm">
                <WhatsAppMark className="h-5 w-5 text-white" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mt-1 text-xs text-slate-500">
                  Patients receive a friendly nudge before their visit.
                </p>
                <label className="mt-3 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#25D366] focus:ring-[#25D366]"
                  />
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-900">
                      Send Automated WhatsApp Reminder
                      <span className="rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#128C7E]">
                        WhatsApp
                      </span>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Save appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
