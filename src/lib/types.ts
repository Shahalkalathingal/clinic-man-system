export type AppointmentStatus = "Confirmed" | "Pending" | "Cancelled";

export type Appointment = {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  status: AppointmentStatus;
};

export type Patient = {
  id: string;
  name: string;
  age: number;
  lastVisit: string;
  medicalHistory: string;
  phone: string;
};

export type ReminderLog = {
  id: string;
  text: string;
  delivered: boolean;
};
