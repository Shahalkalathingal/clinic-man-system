"use client";

import { useClinic } from "@/context/clinic-context";

export default function PatientsPage() {
  const { filteredPatients, setSelectedPatientId } = useClinic();

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Patients
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Use the header search to filter this list in real time.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Age</th>
                <th className="hidden px-4 py-3 md:table-cell">Phone</th>
                <th className="px-4 py-3">Last visit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPatients.map((p) => (
                <tr
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPatientId(p.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedPatientId(p.id);
                    }
                  }}
                  className="cursor-pointer hover:bg-blue-50/60 focus-visible:bg-blue-50/60 focus-visible:outline-none"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                  <td className="px-4 py-3 text-slate-700 tabular-nums">{p.age}</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">
                    {p.phone}
                  </td>
                  <td className="px-4 py-3 text-slate-700 tabular-nums">
                    {p.lastVisit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredPatients.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-slate-500">
            No patients match your search.
          </p>
        ) : null}
      </div>
    </div>
  );
}
