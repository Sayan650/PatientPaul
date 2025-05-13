"use client";

import PatientDetailView from '@/components/patients/PatientDetailView';
import { usePatientStore } from '@/lib/store';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Patient } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PatientDetailPage() {
  const router = useRouter();
  const params = useParams();
  const patientId = params.patientId as string;
  
  const { getPatientById } = usePatientStore();
  const [patient, setPatient] = useState<Patient | null | undefined>(undefined); // undefined for loading state

  useEffect(() => {
    if (patientId) {
      const foundPatient = getPatientById(patientId);
      setPatient(foundPatient || null); // null if not found after trying
    }
  }, [patientId, getPatientById]);


  if (patient === undefined) {
    return <div className="container mx-auto py-8 text-center">Loading patient details...</div>;
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
