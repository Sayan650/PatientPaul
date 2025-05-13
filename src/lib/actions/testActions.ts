"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function testPatientCreate() {
  try {
    console.log("Starting test patient creation from server action");
    
    const newPatient = await prisma.patient.create({
      data: {
        name: "Test Patient " + Date.now(),
        age: 30,
        phone: "1234567890",
        sex: "Not specified",
        occu: "Test Action",
        medicalHistory: "Created via test server action",
      }
    });
    
    console.log("Test patient created:", newPatient);
    revalidatePath("/patients");
    return {
      success: true,
      message: "Test patient created successfully",
      patient: newPatient
    };
  } catch (error) {
    console.error("Error in test patient creation:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error in test action"
    };
  }
}

export async function testDatabaseConnection() {
  try {
    console.log("Testing database connection from server action");
    
    // Simple query to test connection
    const count = await prisma.patient.count();
    
    return {
      success: true,
      message: "Database connection successful",
      patientCount: count
    };
  } catch (error) {
    console.error("Database connection error in server action:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown database error"
    };
  }
}

export async function getErrorDetails() {
  return { 
    node_env: process.env.NODE_ENV,
    database_url_prefix: process.env.DATABASE_URL?.substring(0, 20) + "..." // Only show prefix for security
  };
}