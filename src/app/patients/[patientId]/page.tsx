
import PatientDetailView from '@/components/patients/PatientDetailView';
import { getPatientById } from '@/lib/actions/patientActions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import type { Patient, Prescription as PrismaPrescription, Appointment as PrismaAppointment } from '@prisma/client';

// Define a more specific type for the patient prop passed to PatientDetailView, including relations
export type PatientWithRelations = Patient & {
  prescriptions: PrismaPrescription[];
  appointments: PrismaAppointment[];
};

interface PatientDetailPageProps {
  params: { patientId: string };
}

export default async function PatientDetailPage({ params }: PatientDetailPageProps) {
  const patientId = params.patientId;
  let patient: PatientWithRelations | null = null;
  let error: string | null = null;

  try {
    if (patientId) {
      // Type assertion is okay here if getPatientById is guaranteed to return this structure when successful
      patient = await getPatientById(patientId) as PatientWithRelations | null;
    }
  } catch (e: any) {
    console.error("Failed to fetch patient:", e);
    error = e.message || "Could not load patient data.";
  }
  
  if (error) {
     return (
      <div className="container mx-auto py-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-destructive">Error Loading Patient</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button asChild variant="outline">
          <Link href="/patients">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Patients List
          </Link>
        </Button>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Patient Not Found</h2>
        <p className="text-muted-foreground mb-6">The patient you are looking for does not exist or could not be loaded.</p>
        <Button asChild variant="outline">
          <Link href="/patients">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Patients List
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/patients">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Patients List
          </Link>
        </Button>
      </div>
      <PatientDetailView patient={patient} />
    </div>
  );
}
