"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Appointment, Patient, ReminderLog } from "@/lib/types";
import {
  INITIAL_APPOINTMENTS,
  INITIAL_REMINDERS,
  MOCK_PATIENTS,
} from "@/lib/mock-data";

type ToastState = { message: string } | null;

type AddAppointmentInput = {
  patientName: string;
  phone: string;
  date: string;
  time: string;
  whatsapp: boolean;
};

type ClinicContextValue = {
  patients: Patient[];
  filteredPatients: Patient[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  appointments: Appointment[];
  addAppointment: (input: AddAppointmentInput) => void;
  reminders: ReminderLog[];
  toast: ToastState;
  showToast: (message: string) => void;
  dismissToast: () => void;
  selectedPatientId: string | null;
  setSelectedPatientId: (id: string | null) => void;
  getPatientById: (id: string) => Patient | undefined;
  patientNotes: Record<string, string>;
  setPatientNote: (patientId: string, note: string) => void;
};

const ClinicContext = createContext<ClinicContextValue | null>(null);

export function ClinicProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>(
    INITIAL_APPOINTMENTS
  );
  const [reminders, setReminders] =
    useState<ReminderLog[]>(INITIAL_REMINDERS);
  const [toast, setToast] = useState<ToastState>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );
  const [patientNotes, setPatientNotesState] = useState<Record<string, string>>(
    {}
  );

  const patients = MOCK_PATIENTS;

  const filteredPatients = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.phone.replace(/\s/g, "").toLowerCase().includes(q.replace(/\s/g, ""))
    );
  }, [patients, searchQuery]);

  const showToast = useCallback((message: string) => {
    setToast({ message });
    window.setTimeout(() => setToast(null), 4500);
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const addAppointment = useCallback(
    (input: AddAppointmentInput) => {
      const newAppt: Appointment = {
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `appt-${Date.now()}`,
        patientName: input.patientName,
        phone: input.phone,
        date: input.date,
        time: input.time,
        status: "Pending",
      };
      setAppointments((prev) => [newAppt, ...prev]);

      if (input.whatsapp) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        });
        const rid =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `rem-${Date.now()}`;
        setReminders((prev) => [
          {
            id: rid,
            text: `Reminder sent to ${input.patientName} at ${timeStr}`,
            delivered: true,
          },
          ...prev,
        ]);
        showToast(
          `Appointment Saved & WhatsApp Reminder queued for ${input.phone}`
        );
      } else {
        showToast("Appointment saved successfully.");
      }
    },
    [showToast]
  );

  const setPatientNote = useCallback((patientId: string, note: string) => {
    setPatientNotesState((prev) => ({ ...prev, [patientId]: note }));
  }, []);

  const getPatientById = useCallback(
    (id: string) => patients.find((p) => p.id === id),
    [patients]
  );

  const value = useMemo(
    () => ({
      patients,
      filteredPatients,
      searchQuery,
      setSearchQuery,
      appointments,
      addAppointment,
      reminders,
      toast,
      showToast,
      dismissToast,
      selectedPatientId,
      setSelectedPatientId,
      getPatientById,
      patientNotes,
      setPatientNote,
    }),
    [
      patients,
      filteredPatients,
      searchQuery,
      appointments,
      addAppointment,
      reminders,
      toast,
      showToast,
      dismissToast,
      selectedPatientId,
      getPatientById,
      patientNotes,
      setPatientNote,
    ]
  );

  return (
    <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>
  );
}

export function useClinic() {
  const ctx = useContext(ClinicContext);
  if (!ctx) throw new Error("useClinic must be used within ClinicProvider");
  return ctx;
}
