import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get('search') || undefined;
    
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
    
    return NextResponse.json({ patients });
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation would ideally happen here, but we're assuming it's already done
    // in the server action before reaching this endpoint
    
    const newPatient = await prisma.patient.create({
      data: {
        name: body.name,
        age: body.age,
        phone: body.phone,
        sex: body.sex,
        occu: body.occu,
        medicalHistory: body.medicalHistory || undefined,
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Patient added successfully.", 
      patient: newPatient 
    });
  } catch (error) {
    console.error('Error creating patient:', error);
    return NextResponse.json(
      { error: 'Failed to create patient' },
      { status: 500 }
    );
  }
}