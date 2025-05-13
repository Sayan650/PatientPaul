
// These types can be used for form data or specific component props.
// For actual data objects from the database, prefer Prisma-generated types.
// import type { Patient as PrismaPatient, Prescription as PrismaPrescription, Appointment as PrismaAppointment } from '@prisma/client';


export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  instructions: string;
  datePrescribed: string; // ISO string from Prisma, Date object in forms
  patientId: string;
}

export interface Appointment {
  id: string;
  date: string; // ISO string from Prisma, Date object in forms
  time: string;
  reason: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  patientId: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  sex: string;
  occu: string;
  phone: string;
  medicalHistory: string | null; // Prisma: String?
  prescriptions: Prescription[];
  appointments: Appointment[];
}
