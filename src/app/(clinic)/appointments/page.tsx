"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AppointmentModal } from "@/components/AppointmentModal";
import { StatusBadge } from "@/components/StatusBadge";
import { useClinic } from "@/context/clinic-context";

export default function AppointmentsPage() {
  const { appointments } = useClinic();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Appointments
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Manage the schedule with live demo state.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          New Appointment
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">Patient</th>
                <th className="hidden px-4 py-3 sm:table-cell">Phone</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appointments.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/80">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {a.patientName}
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 sm:table-cell">
                    {a.phone}
                  </td>
                  <td className="px-4 py-3 text-slate-700 tabular-nums">{a.date}</td>
                  <td className="px-4 py-3 text-slate-700 tabular-nums">{a.time}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
