
"use client";

import type { Patient, Prescription, Appointment } from '@/lib/types';
import { usePatientStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import PrescriptionForm, { type PrescriptionFormData } from '@/components/prescriptions/PrescriptionForm';
import PrescriptionListItem from '@/components/prescriptions/PrescriptionListItem';
import AppointmentForm, { type AppointmentFormData } from '@/components/appointments/AppointmentForm';
import AppointmentListItem from '@/components/appointments/AppointmentListItem';
import { User, Phone, Mail, ClipboardList, CalendarPlus, PlusCircle } from 'lucide-react';
import { format } from 'date-fns';

interface PatientDetailViewProps {
  patient: Patient;
}

export default function PatientDetailView({ patient: initialPatient }: PatientDetailViewProps) {
  const { getPatientById, addPrescription, addAppointment, deletePrescription, deleteAppointment } = usePatientStore();
  const patient = getPatientById(initialPatient.id) || initialPatient;
  
  const { toast } = useToast();
  const [isPrescriptionFormOpen, setIsPrescriptionFormOpen] = useState(false);
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isSubmittingPrescription, setIsSubmittingPrescription] = useState(false);
  const [isSubmittingAppointment, setIsSubmittingAppointment] = useState(false);

  const handleAddPrescription = (data: PrescriptionFormData) => {
    setIsSubmittingPrescription(true);
    const prescriptionDataForStore = {
        ...data,
        datePrescribed: data.datePrescribed.toISOString(),
    };
    addPrescription(patient.id, prescriptionDataForStore);
    toast({
      title: 'Prescription Added',
      description: `${data.medicationName} has been added to ${patient.name}'s prescriptions.`,
    });
    setIsPrescriptionFormOpen(false);
    setIsSubmittingPrescription(false);
  };

  const handleAddAppointment = (data: AppointmentFormData) => {
    setIsSubmittingAppointment(true);
    const appointmentDataForStore = {
        ...data,
        date: data.date.toISOString(),
    };
    addAppointment(patient.id, appointmentDataForStore);
    toast({
      title: 'Appointment Scheduled',
      description: `Appointment for ${patient.name} on ${format(data.date, 'MMMM d, yyyy')} has been scheduled.`,
    });
    setIsAppointmentFormOpen(false);
    setIsSubmittingAppointment(false);
  };
  
  const handleDeletePrescription = (prescriptionId: string) => {
    const prescription = patient.prescriptions.find(p => p.id === prescriptionId);
    deletePrescription(patient.id, prescriptionId);
    toast({
      title: "Prescription Deleted",
      description: `Prescription for ${prescription?.medicationName || 'medication'} has been removed.`,
    });
  };

  const handleDeleteAppointment = (appointmentId: string) => {
    deleteAppointment(patient.id, appointmentId);
    toast({
      title: "Appointment Deleted",
      description: `The appointment has been removed.`,
    });
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl flex items-center gap-3">
              <User className="h-8 w-8 text-primary" />
              {patient.name}
            </CardTitle>
            {/* Edit Patient Button - Placeholder for future functionality */}
            {/* <Link href={`/patients/${patient.id}/edit`} passHref>
              <Button variant="outline" size="icon"><Edit className="h-5 w-5" /></Button>
            </Link> */}
          </div>
          <CardDescription className="text-md">
            {patient.age} years old
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <span>{patient.contactDetails.email}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-5 w-5" />
            <span>{patient.contactDetails.phone}</span>
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
              <PrescriptionListItem key={p.id} prescription={p} onDelete={handleDeletePrescription} />
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

