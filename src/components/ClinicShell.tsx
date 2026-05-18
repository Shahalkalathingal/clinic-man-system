"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Toast } from "@/components/Toast";
import { PatientDrawer } from "@/components/PatientDrawer";
import { ProposalDemoFooter } from "@/components/ProposalDemoFooter";

export function ClinicShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar
        mobileOpen={mobileNavOpen}
        onMobileOpenChange={setMobileNavOpen}
      />
      <div className="flex min-h-screen flex-1 flex-col md:min-h-0">
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main className="flex-1 px-4 py-6 md:px-6">{children}</main>
        <ProposalDemoFooter />
      </div>
      <Toast />
      <PatientDrawer />
    </div>
  );
}
