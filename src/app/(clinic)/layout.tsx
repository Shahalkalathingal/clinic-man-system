import { ClinicProvider } from "@/context/clinic-context";
import { ClinicShell } from "@/components/ClinicShell";

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClinicProvider>
      <ClinicShell>{children}</ClinicShell>
    </ClinicProvider>
  );
}
