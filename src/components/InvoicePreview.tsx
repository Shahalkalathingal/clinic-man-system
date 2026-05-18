"use client";

import type { Patient } from "@/lib/types";

type Props = {
  patient: Patient | null;
  fee: string;
  invoiceNo: string;
  dateStr: string;
};

function formatAed(amount: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function InvoicePreview({ patient, fee, invoiceNo, dateStr }: Props) {
  const amount = Number.parseFloat(fee);
  const valid = patient && !Number.isNaN(amount) && amount >= 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Receipt preview
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900">ClinicOS</h2>
          <p className="text-sm text-slate-500">Outpatient services</p>
        </div>
        <div className="text-right text-sm text-slate-600">
          <p className="font-medium text-slate-900">{invoiceNo}</p>
          <p>{dateStr}</p>
        </div>
      </div>

      <div className="py-6">
        <p className="text-xs font-medium uppercase text-slate-500">Bill to</p>
        {valid ? (
          <>
            <p className="mt-1 text-lg font-medium text-slate-900">
              {patient!.name}
            </p>
            <p className="text-sm text-slate-500">{patient!.phone}</p>
          </>
        ) : (
          <p className="mt-1 text-sm text-slate-400">Select a patient to preview</p>
        )}
      </div>

      <div className="rounded-lg border border-slate-100">
        <div className="flex justify-between border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs font-medium uppercase text-slate-500">
          <span>Description</span>
          <span>Amount (AED)</span>
        </div>
        <div className="flex justify-between px-4 py-3 text-sm text-slate-800">
          <span>Professional fee (consultation)</span>
          <span className="font-medium tabular-nums">
            {valid ? formatAed(amount) : "—"}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-medium text-slate-700">Total due</span>
        <span className="text-xl font-semibold tabular-nums text-slate-900">
          {valid ? formatAed(amount) : "—"}
        </span>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Thank you for your visit. This is a demo document.
      </p>
    </div>
  );
}
