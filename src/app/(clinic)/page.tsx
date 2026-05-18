import { CalendarDays, Users } from "lucide-react";
import { RecentRemindersCard } from "@/components/RecentRemindersCard";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          High-level view of clinic activity and communications.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/appointments"
          className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:border-blue-200 hover:ring-blue-600/10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <CalendarDays className="h-5 w-5" />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">Appointments</p>
          <p className="mt-1 text-sm text-slate-500">
            Book visits and send WhatsApp reminders.
          </p>
          <span className="mt-3 inline-block text-xs font-medium text-blue-600 group-hover:underline">
            Open schedule →
          </span>
        </Link>

        <Link
          href="/patients"
          className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:border-blue-200 hover:ring-blue-600/10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Users className="h-5 w-5" />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">Patients</p>
          <p className="mt-1 text-sm text-slate-500">
            Records, history, and quick clinical notes.
          </p>
          <span className="mt-3 inline-block text-xs font-medium text-blue-600 group-hover:underline">
            View registry →
          </span>
        </Link>

        <div className="md:col-span-2 lg:col-span-1">
          <RecentRemindersCard />
        </div>
      </div>
    </div>
  );
}
