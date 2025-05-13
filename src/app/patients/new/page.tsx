
"use client";

import PatientForm, { type PatientFormData } from '@/components/patients/PatientForm';
import { usePatientStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import type { Patient } from '@/lib/types';
import { useState } from 'react';

export default function NewPatientPage() {
  const router = useRouter();
  const { addPatient } = usePatientStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: PatientFormData) => {
    setIsSubmitting(true);
    try {
      // Type PatientFormData already matches Omit<Patient, 'id' | 'prescriptions' | 'appointments'>
      // as 'age' is now part of Patient type and PatientFormData
      const newPatient = addPatient(data);
      toast({
        title: "Patient Added",
        description: `${newPatient.name} has been successfully registered.`,
      });
      router.push(`/patients/${newPatient.id}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add patient. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <PatientForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

