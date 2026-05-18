"use client";

import { useMemo, useState } from "react";
import { InvoicePreview } from "@/components/InvoicePreview";
import { useClinic } from "@/context/clinic-context";

export default function BillingPage() {
  const { patients } = useClinic();
  const [patientId, setPatientId] = useState(patients[0]?.id ?? "");
  const [fee, setFee] = useState("150");

  const patient = useMemo(
    () => patients.find((p) => p.id === patientId) ?? null,
    [patients, patientId]
  );

  const [invoiceNo] = useState(
    () => `INV-${Math.floor(1000 + Math.random() * 9000)}`
  );

  const dateStr = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    []
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Generate invoice
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Select a patient, enter a fee, and review a clean receipt preview.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
          <div>
            <label
              htmlFor="bill-patient"
              className="mb-1 block text-xs font-medium text-slate-600"
            >
              Patient
            </label>
            <select
              id="bill-patient"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="bill-fee"
              className="mb-1 block text-xs font-medium text-slate-600"
            >
              Fee (AED)
            </label>
            <input
              id="bill-fee"
              type="number"
              min={0}
              step="0.01"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-blue-600/20 focus:border-blue-600 focus:ring-2"
            />
          </div>

          <p className="text-xs text-slate-500">
            Amounts are in United Arab Emirates Dirhams (AED). Preview updates as
            you type. This MVP does not persist invoices.
          </p>
        </div>

        <InvoicePreview
          patient={patient}
          fee={fee}
          invoiceNo={invoiceNo}
          dateStr={dateStr}
        />
      </div>
    </div>
  );
}
