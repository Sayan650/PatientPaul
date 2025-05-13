import { prisma } from "@/lib/prisma";
import type { Patient } from "@prisma/client";
import type { PatientFormData } from "@/components/patients/PatientForm";

// Data access layer for patient operations
// This isolates Prisma operations from server actions

export async function getPatientsList(searchTerm?: string): Promise<Patient[]> {
  try {
    const patients = await prisma.patient.findMany({
      where: searchTerm
        ? {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          }
        : {},
      orderBy: {
        updatedAt: "desc",
      },
    });
    return patients;
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
}

export async function getPatientDetails(id: string) {
  try {
    return await prisma.patient.findUnique({
      where: { id },
      include: {
        prescriptions: { orderBy: { createdAt: "desc" } },
        appointments: { orderBy: { date: "desc" } },
      },
    });
  } catch (error) {
    console.error(`Error fetching patient by ID (${id}):`, error);
    return null;
  }
}

export async function createPatient(data: PatientFormData) {
  try {
    console.log("Creating patient with data:", JSON.stringify(data));
    
    // Verify all required fields are present and valid
    if (!data.name || typeof data.name !== 'string') {
      console.error("Invalid name:", data.name);
      return { success: false, error: "Invalid name provided" };
    }
    
    if (data.age === undefined || typeof data.age !== 'number') {
      console.error("Invalid age:", data.age);
      return { success: false, error: "Invalid age provided" };
    }
    
    if (!data.phone || typeof data.phone !== 'string') {
      console.error("Invalid phone:", data.phone);
      return { success: false, error: "Invalid phone provided" };
    }
    
    if (!data.sex || typeof data.sex !== 'string') {
      console.error("Invalid sex:", data.sex);
      return { success: false, error: "Invalid sex provided" };
    }
    
    if (!data.occu || typeof data.occu !== 'string') {
      console.error("Invalid occupation:", data.occu);
      return { success: false, error: "Invalid occupation provided" };
    }
    
    console.log("All validation passed, creating patient in database");
    
    const newPatient = await prisma.patient.create({
      data: {
        name: data.name,
        age: data.age,
        phone: data.phone,
        sex: data.sex,
        occu: data.occu,
        medicalHistory: data.medicalHistory || "",
      },
    });
    
    console.log("Patient created successfully:", newPatient);
    return { success: true, patient: newPatient };
  } catch (error) {
    console.error("Error creating patient:", error);
    // Log the full error with stack trace for better debugging
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Stack trace:", error.stack);
    }
    return { success: false, error: "Failed to create patient" };
  }
}

export async function updatePatient(id: string, data: PatientFormData) {
  try {
    const updatedPatient = await prisma.patient.update({
      where: { id },
      data: {
        name: data.name,
        age: data.age,
        phone: data.phone,
        sex: data.sex,
        occu: data.occu,
        medicalHistory: data.medicalHistory,
      },
    });
    return { success: true, patient: updatedPatient };
  } catch (error) {
    console.error(`Error updating patient by ID (${id}):`, error);
    return { success: false, error: "Failed to update patient" };
  }
}

export async function deletePatient(id: string) {
  try {
    await prisma.patient.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error(`Error deleting patient by ID (${id}):`, error);
    return { success: false, error: "Failed to delete patient" };
  }
}

export async function getUpcomingAppointments() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysFromNow = new Date(today);
    sevenDaysFromNow.setDate(today.getDate() + 7);
    sevenDaysFromNow.setHours(23, 59, 59, 999);

    const appointments = await prisma.appointment.findMany({
      where: {
        status: "upcoming",
        date: {
          gte: today,
          lte: sevenDaysFromNow,
        },
      },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: [{ date: "asc" }, { time: "asc" }],
    });
    return appointments;
  } catch (error) {
    console.error("Error fetching upcoming appointments:", error);
    return [];
  }
}