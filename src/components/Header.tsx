"use client";

import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useClinic } from "@/context/clinic-context";

type HeaderProps = {
  onOpenMobileNav?: () => void;
};

export function Header({ onOpenMobileNav }: HeaderProps) {
  const { searchQuery, setSearchQuery, filteredPatients } = useClinic();
  const showResults = searchQuery.trim().length > 0;
  const preview = filteredPatients.slice(0, 5);

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 bg-white/90 px-3 backdrop-blur md:gap-3 md:px-6">
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
        onClick={() => onOpenMobileNav?.()}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="relative min-w-0 flex-1">
        <label className="sr-only" htmlFor="global-search">
          Global search patients
        </label>
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search className="h-4 w-4" />
        </div>
        <input
          id="global-search"
          type="search"
          autoComplete="off"
          placeholder="Search patients by name or phone…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/20 transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2"
        />
        {showResults ? (
          <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-slate-900/5">
            {preview.length === 0 ? (
              <p className="px-3 py-2 text-sm text-slate-500">No matches</p>
            ) : (
              preview.map((p) => (
                <Link
                  key={p.id}
                  href="/patients"
                  onClick={() => setSearchQuery(p.name)}
                  className="block px-3 py-2 text-left text-sm text-slate-800 hover:bg-slate-50"
                >
                  <span className="font-medium">{p.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {p.phone}
                  </span>
                </Link>
              ))
            )}
            <div className="border-t border-slate-100 px-3 py-2">
              <Link
                href="/patients"
                className="text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                Open Patients
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
