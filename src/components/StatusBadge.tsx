import type { AppointmentStatus } from "@/lib/types";

const styles: Record<AppointmentStatus, string> = {
  Confirmed:
    "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-600/20",
  Pending:
    "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/25",
  Cancelled: "bg-red-50 text-red-800 ring-1 ring-inset ring-red-600/20",
};

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
