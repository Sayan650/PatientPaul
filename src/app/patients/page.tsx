"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PatientListItem from '@/components/patients/PatientListItem';
import { usePatientStore } from '@/lib/store';
import type { Patient } from '@/lib/types';
import { PlusCircle, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function PatientsListPage() {
  const { patients, getPatients, deletePatient } = usePatientStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    // Ensure latest patient list is fetched or store is initialized
    getPatients(); 
  }, [getPatients]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDeletePatient = (patientId: string) => {
    const patientToDelete = patients.find(p => p.id === patientId);
    deletePatient(patientId);
    toast({
      title: "Patient Deleted",
      description: `${patientToDelete?.name || 'Patient'} has been removed.`,
    });
  };


  if (!mounted) {
    // Prevents hydration mismatch by not rendering list until client-side mount
    return (
       <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" /> Patient Records
          </h1>
        </div>
        <p className="text-muted-foreground">Loading patient data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Users className="h-8 w-8 text-primary" /> Patient Records
        </h1>
        <Link href="/patients/new" passHref>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-5 w-5" /> Add New Patient
          </Button>
        </Link>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search patients by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filteredPatients.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <PatientListItem key={patient.id} patient={patient} onDelete={handleDeletePatient} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">No patients found.</p>
          {searchTerm && <p className="text-sm text-muted-foreground">Try adjusting your search term.</p>}
        </div>
      )}
    </div>
  );
}
