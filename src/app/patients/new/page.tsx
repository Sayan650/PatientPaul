
"use client";

import PatientForm, { type PatientFormData } from '@/components/patients/PatientForm';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { addPatientAction } from '@/lib/actions/patientActions';
import { useState } from 'react';

export default function NewPatientPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: PatientFormData) => {
    setIsSubmitting(true);
    const result = await addPatientAction(data);
    setIsSubmitting(false);

    if (result.success && result.patient) {
      toast({
        title: "Patient Added",
        description: `${result.patient.name} has been successfully registered.`,
      });
      router.push(`/patients/${result.patient.id}`);
    } else {
      toast({
        title: "Error Adding Patient",
        description: result.message || "An unexpected error occurred.",
        variant: "destructive",
      });
      // Optionally display validation errors if `result.errors` is populated
      if (result.errors) {
        console.error("Validation errors:", result.errors);
        // You could map over errors and display them, or update form state
      }
    }
  };

  return (
    <div className="container mx-auto py-8">
      <PatientForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}
