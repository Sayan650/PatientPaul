
"use client";

import type { PatientWithRelations } from '@/app/patients/[patientId]/page'; // Use the specific type from the page
import { useToast } from '@/hooks/use-toast';
import { useState, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import PrescriptionForm, { type PrescriptionFormData } from '@/components/prescriptions/PrescriptionForm';
import PrescriptionListItem from '@/components/prescriptions/PrescriptionListItem';
import AppointmentForm, { type AppointmentFormData } from '@/components/appointments/AppointmentForm';
import AppointmentListItem from '@/components/appointments/AppointmentListItem';
import { User, Phone, BookDashed, ClipboardList, CalendarPlus, PlusCircle, Baby } from 'lucide-react';
import { format } from 'date-fns';
import { 
  addPrescriptionAction, 
  deletePrescriptionAction, 
  addAppointmentAction, 
  deleteAppointmentAction 
} from '@/lib/actions/patientActions';

interface PatientDetailViewProps {
  patient: PatientWithRelations;
}

export default function PatientDetailView({ patient: initialPatient }: PatientDetailViewProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  // Component state for patient data, initialized from props.
  // This allows UI to update optimistically or based on server action results if needed,
  // though primary refresh comes from revalidatePath.
  const [patient, setPatient] = useState(initialPatient);

  const [isPrescriptionFormOpen, setIsPrescriptionFormOpen] = useState(false);
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isSubmittingPrescription, setIsSubmittingPrescription] = useState(false);
  const [isSubmittingAppointment, setIsSubmittingAppointment] = useState(false);

  const handleAddPrescription = async (data: PrescriptionFormData) => {
    setIsSubmittingPrescription(true);
    const result = await addPrescriptionAction(patient.id, data);
    setIsSubmittingPrescription(false);

    if (result.success && result.prescription) {
      toast({
        title: 'Prescription Added',
        description: `${result.prescription.medicationName} has been added.`,
      });
      setIsPrescriptionFormOpen(false);
      // Optimistically update client state or rely on router.refresh() / revalidatePath
      // For simplicity, we rely on revalidatePath from the server action.
      // A manual refresh can ensure immediate UI update.
      startTransition(() => router.refresh());
    } else {
      toast({
        title: 'Error Adding Prescription',
        description: result.message || "Failed to add prescription.",
        variant: 'destructive',
      });
    }
  };

  const handleAddAppointment = async (data: AppointmentFormData) => {
    setIsSubmittingAppointment(true);
    const result = await addAppointmentAction(patient.id, data);
    setIsSubmittingAppointment(false);

    if (result.success && result.appointment) {
      toast({
        title: 'Appointment Scheduled',
        description: `Appointment for ${patient.name} on ${format(new Date(result.appointment.date), 'MMMM d, yyyy')} scheduled.`,
      });
      setIsAppointmentFormOpen(false);
      startTransition(() => router.refresh());
    } else {
      toast({
        title: 'Error Scheduling Appointment',
        description: result.message || "Failed to schedule appointment.",
        variant: 'destructive',
      });
    }
  };
  
  const handleDeletePrescription = async (prescriptionId: string) => {
    const prescription = patient.prescriptions.find(p => p.id === prescriptionId);
    const result = await deletePrescriptionAction(patient.id, prescriptionId);
    
    if (result.success) {
      toast({
        title: "Prescription Deleted",
        description: `Prescription for ${prescription?.medicationName || 'medication'} removed.`,
      });
      startTransition(() => router.refresh());
    } else {
       toast({
        title: "Error Deleting Prescription",
        description: result.message || "Failed to delete prescription.",
        variant: 'destructive',
      });
    }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    const result = await deleteAppointmentAction(patient.id, appointmentId);
    if (result.success) {
      toast({
        title: "Appointment Deleted",
        description: `The appointment has been removed.`,
      });
      startTransition(() => router.refresh());
    } else {
      toast({
        title: "Error Deleting Appointment",
        description: result.message || "Failed to delete appointment.",
        variant: 'destructive',
      });
    }
  };
  
  // If initialPatient data changes due to router.refresh(), update local state
  if (initialPatient.id !== patient.id || 
      initialPatient.updatedAt.getTime() !== new Date(patient.updatedAt).getTime() ) {
    setPatient(initialPatient);
  }


  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl flex items-center gap-3">
              <User className="h-8 w-8 text-primary" />
              {patient.name}
            </CardTitle>
          </div>
          <CardDescription className="text-md">
            {patient.age} years old
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-5 w-5" />
            <span>{patient.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Baby className="h-5 w-5" />
            <span>{patient.sex}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookDashed className="h-5 w-5" />
            <span>{patient.occu}</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mt-2 mb-1">Medical History:</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {patient.medicalHistory || 'No medical history provided.'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Prescriptions Section */}
      <Card className="shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Prescriptions</CardTitle>
          </div>
          <Dialog open={isPrescriptionFormOpen} onOpenChange={setIsPrescriptionFormOpen}>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Prescription
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Prescription</DialogTitle>
              </DialogHeader>
              <PrescriptionForm 
                onSubmit={handleAddPrescription} 
                onCancel={() => setIsPrescriptionFormOpen(false)}
                isSubmitting={isSubmittingPrescription}
              />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {patient.prescriptions.length > 0 ? (
            patient.prescriptions.map((p) => (
              <PrescriptionListItem 
                key={p.id} 
                prescription={p} 
                patientName={patient.name} 
                onDelete={handleDeletePrescription} 
              />
            ))
          ) : (
            <p className="text-muted-foreground">No prescriptions recorded for this patient.</p>
          )}
        </CardContent>
      </Card>

      {/* Appointments Section */}
      <Card className="shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarPlus className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Appointments</CardTitle>
          </div>
          <Dialog open={isAppointmentFormOpen} onOpenChange={setIsAppointmentFormOpen}>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <PlusCircle className="mr-2 h-4 w-4" /> Schedule Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Schedule New Appointment</DialogTitle>
              </DialogHeader>
              <AppointmentForm 
                onSubmit={handleAddAppointment}
                onCancel={() => setIsAppointmentFormOpen(false)}
                isSubmitting={isSubmittingAppointment}
              />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {patient.appointments.length > 0 ? (
            patient.appointments
                .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by most recent first
                .map((a) => (
                    <AppointmentListItem key={a.id} appointment={a} onDelete={handleDeleteAppointment}/>
            ))
          ) : (
            <p className="text-muted-foreground">No appointments scheduled for this patient.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
