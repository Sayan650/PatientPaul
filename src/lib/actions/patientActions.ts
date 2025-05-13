"use server";

import { prisma } from "@/lib/prisma";
import type { Patient, Prescription, Appointment } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { PatientFormData } from "@/components/patients/PatientForm";
import type { PrescriptionFormData } from "@/components/prescriptions/PrescriptionForm";
import type { AppointmentFormData } from "@/components/appointments/AppointmentForm";
import * as patientData from "@/lib/data/patientData";

// Patient Actions
export async function getPatients(searchTerm?: string): Promise<Patient[]> {
  return patientData.getPatientsList(searchTerm);
}

export async function getPatientById(id: string): Promise<Patient | null> {
  const patient = await patientData.getPatientDetails(id);
  if (!patient) {
    throw new Error("Failed to fetch patient details.");
  }
  return patient;
}

const addPatientFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.coerce
    .number()
    .int()
    .nonnegative("Age must be a non-negative number.")
    .max(150, "Age seems too high."),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  sex: z.string().min(1, "Sex is required"),
  occu: z.string().min(1, "Occupation is required"),
  medicalHistory: z.string().optional(),
});

export async function addPatientAction(data: PatientFormData) {
  console.log("addPatientAction received data:", JSON.stringify(data));
  
  try {
    // Validate data
    const validation = addPatientFormSchema.safeParse(data);
    if (!validation.success) {
      console.error("Validation failed:", validation.error.flatten().fieldErrors);
      return {
        success: false,
        message: "Validation failed.",
        errors: validation.error.flatten().fieldErrors,
      };
    }
    
    console.log("Validation passed, creating patient directly");
    
    // Create patient directly with prisma instead of using the data layer
    const newPatient = await prisma.patient.create({
      data: {
        name: validation.data.name,
        age: validation.data.age,
        phone: validation.data.phone,
        sex: validation.data.sex,
        occu: validation.data.occu,
        medicalHistory: validation.data.medicalHistory || "",
      },
    });
    
    console.log("Patient created successfully with ID:", newPatient.id);
    
    revalidatePath("/patients");
    revalidatePath("/"); // For upcoming appointments widget
    
    return {
      success: true,
      message: "Patient added successfully.",
      patient: newPatient,
    };
  } catch (error) {
    console.error("Unexpected error in addPatientAction:", error);
    
    // Log detailed error information for debugging
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Stack trace:", error.stack);
    }
    
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "An unexpected error occurred." 
    };
  }
}

export async function deletePatientAction(patientId: string) {
  const result = await patientData.deletePatient(patientId);
  
  if (result.success) {
    revalidatePath("/patients");
    revalidatePath("/"); // For upcoming appointments widget
    return { success: true, message: "Patient deleted successfully." };
  } else {
    return { success: false, message: "Failed to delete patient." };
  }
}

// Prescription Actions
const prescriptionFormSchema = z.object({
  medicationName: z.string().min(2, "Medication name is required"),
  dosage: z.string().min(1, "Dosage is required"),
  instructions: z.string().min(5, "Instructions are required"),
  datePrescribed: z.date({ required_error: "Date prescribed is required." }),
});

export async function addPrescriptionAction(
  patientId: string,
  data: PrescriptionFormData,
) {
  const validation = prescriptionFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validation.error.flatten().fieldErrors,
    };
  }
  try {
    const newPrescription = await prisma.prescription.create({
      data: {
        ...validation.data,
        patientId: patientId,
      },
    });
    revalidatePath(`/patients/${patientId}`);
    return {
      success: true,
      message: "Prescription added successfully.",
      prescription: newPrescription,
    };
  } catch (error) {
    console.error("Error adding prescription:", error);
    return { success: false, message: "Failed to add prescription." };
  }
}

export async function deletePrescriptionAction(
  patientId: string,
  prescriptionId: string,
) {
  try {
    await prisma.prescription.delete({
      where: { id: prescriptionId, patientId: patientId },
    });
    revalidatePath(`/patients/${patientId}`);
    return { success: true, message: "Prescription deleted successfully." };
  } catch (error) {
    console.error("Error deleting prescription:", error);
    return { success: false, message: "Failed to delete prescription." };
  }
}

// Appointment Actions
const appointmentFormSchema = z.object({
  date: z.date({ required_error: "Appointment date is required." }),
  time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  reason: z.string().min(3, "Reason is required"),
  status: z.enum(["upcoming", "completed", "cancelled"]).default("upcoming"),
});

export async function addAppointmentAction(
  patientId: string,
  data: AppointmentFormData,
) {
  const validation = appointmentFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validation.error.flatten().fieldErrors,
    };
  }
  try {
    const newAppointment = await prisma.appointment.create({
      data: {
        ...validation.data,
        patientId: patientId,
      },
    });
    revalidatePath(`/patients/${patientId}`);
    revalidatePath("/"); // For upcoming appointments widget
    return {
      success: true,
      message: "Appointment scheduled successfully.",
      appointment: newAppointment,
    };
  } catch (error) {
    console.error("Error scheduling appointment:", error);
    return { success: false, message: "Failed to schedule appointment." };
  }
}

export async function deleteAppointmentAction(
  patientId: string,
  appointmentId: string,
) {
  try {
    await prisma.appointment.delete({
      where: { id: appointmentId, patientId: patientId },
    });
    revalidatePath(`/patients/${patientId}`);
    revalidatePath("/"); // For upcoming appointments widget
    return { success: true, message: "Appointment deleted successfully." };
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return { success: false, message: "Failed to schedule appointment." };
  }
}

export async function getUpcomingAppointmentsForWidget() {
  return patientData.getUpcomingAppointments();
}
