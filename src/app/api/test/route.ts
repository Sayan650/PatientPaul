import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Test database connection by doing a simple query
    const patients = await prisma.patient.findMany({
      take: 1,  // Just get one record to minimize data transfer
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Database connection successful", 
      patientCount: patients.length,
      prismaClientInitialized: !!prisma
    });
  } catch (error) {
    console.error('Database connection error:', error);
    
    let errorDetails = 'Unknown error';
    if (error instanceof Error) {
      errorDetails = {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    
    return NextResponse.json({
      success: false,
      message: "Database connection failed",
      error: errorDetails
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Test creating a patient
    const newPatient = await prisma.patient.create({
      data: {
        name: "Test Patient " + Date.now(),
        age: 30,
        phone: "1234567890",
        sex: "Not specified",
        occu: "Test",
        medicalHistory: "Created via test API"
      }
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Test patient created successfully", 
      patient: newPatient 
    });
  } catch (error) {
    console.error('Error creating test patient:', error);
    
    let errorDetails = 'Unknown error';
    if (error instanceof Error) {
      errorDetails = {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    
    return NextResponse.json({
      success: false,
      message: "Failed to create test patient",
      error: errorDetails
    }, { status: 500 });
  }
}