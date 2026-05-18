import type { Appointment, Patient, ReminderLog } from "./types";

/** UAE (+971) numbers in common Dubai mobile format for demo data */
export const MOCK_PATIENTS: Patient[] = [
  {
    id: "p1",
    name: "Sarah Mitchell",
    age: 34,
    lastVisit: "2026-05-12",
    phone: "+971 50 201 8891",
    medicalHistory:
      "Seasonal allergies (pollen). Mild asthma—uses rescue inhaler PRN. Last lipid panel within range (Apr 2026). No chronic medications.",
  },
  {
    id: "p2",
    name: "James Okonkwo",
    age: 52,
    lastVisit: "2026-05-10",
    phone: "+971 55 310 4420",
    medicalHistory:
      "Type 2 diabetes—metformin 500mg BID. Hypertension—lisinopril 10mg daily. Regular foot exams documented.",
  },
  {
    id: "p3",
    name: "Elena Vasquez",
    age: 28,
    lastVisit: "2026-04-28",
    phone: "+971 52 774 0092",
    medicalHistory:
      "Anxiety disorder—CBT + SSRI (stable). No surgical history. Up to date on routine immunizations.",
  },
  {
    id: "p4",
    name: "David Chen",
    age: 41,
    lastVisit: "2026-05-15",
    phone: "+971 54 902 1188",
    medicalHistory:
      "GERD—PPI as needed. Vitamin D deficiency corrected 2025. Family history of CAD (father).",
  },
  {
    id: "p5",
    name: "Amira Hassan",
    age: 63,
    lastVisit: "2026-05-02",
    phone: "+971 56 661 3344",
    medicalHistory:
      "Osteoarthritis bilateral knees. Thyroidectomy 2019—levothyroxine 88mcg daily. TSH monitored q6mo.",
  },
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    patientName: "Sarah Mitchell",
    phone: "+971 50 201 8891",
    date: "2026-05-19",
    time: "09:00",
    status: "Confirmed",
  },
  {
    id: "a2",
    patientName: "James Okonkwo",
    phone: "+971 55 310 4420",
    date: "2026-05-19",
    time: "10:30",
    status: "Pending",
  },
  {
    id: "a3",
    patientName: "Elena Vasquez",
    phone: "+971 52 774 0092",
    date: "2026-05-20",
    time: "14:15",
    status: "Cancelled",
  },
];

export const INITIAL_REMINDERS: ReminderLog[] = [
  {
    id: "r1",
    text: "Reminder sent to John Doe at 10:30 AM",
    delivered: true,
  },
  {
    id: "r2",
    text: "Reminder sent to Sarah Mitchell at 8:45 AM",
    delivered: true,
  },
  {
    id: "r3",
    text: "Reminder sent to David Chen at 4:15 PM",
    delivered: true,
  },
];
