"use client";

import { usePatientStore } from '@/lib/store';
import type { Patient, Appointment } from '@/lib/types';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarClock, User } from 'lucide-react';
import { format, isWithinInterval, addDays, startOfDay } from 'date-fns';
import { useEffect, useState } from 'react';

interface UpcomingAppointmentInfo {
  patientId: string;
  patientName: string;
  appointment: Appointment;
}

export default function UpcomingAppointmentsWidget() {
  const { patients, getPatients } = usePatientStore();
  const [upcomingAppointments, setUpcomingAppointments] = useState<UpcomingAppointmentInfo[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure latest patient list is fetched or store is initialized
    getPatients();
  }, [getPatients]);

  useEffect(() => {
    if (patients.length > 0) {
      const today = startOfDay(new Date());
      const sevenDaysFromNow = addDays(today, 7);
      
      const allUpcoming: UpcomingAppointmentInfo[] = [];
      patients.forEach(patient => {
        patient.appointments.forEach(appointment => {
          const appointmentDate = startOfDay(new Date(appointment.date));
          if (appointment.status === 'upcoming' && isWithinInterval(appointmentDate, { start: today, end: sevenDaysFromNow })) {
            allUpcoming.push({
              patientId: patient.id,
              patientName: patient.name,
              appointment,
            });
          }
        });
      });
      
      // Sort by appointment date, then time
      allUpcoming.sort((a, b) => {
        const dateA = new Date(a.appointment.date).getTime();
        const dateB = new Date(b.appointment.date).getTime();
        if (dateA !== dateB) return dateA - dateB;
        // Basic time sort (HH:MM)
        return a.appointment.time.localeCompare(b.appointment.time);
      });

      setUpcomingAppointments(allUpcoming);
    }
  }, [patients]);

  if (!mounted) {
    return <p className="text-muted-foreground">Loading upcoming appointments...</p>;
  }

  if (upcomingAppointments.length === 0) {
    return <p className="text-muted-foreground">No upcoming appointments in the next 7 days.</p>;
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {upcomingAppointments.map(info => (
        <Card key={info.appointment.id} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-1">
                  <User className="h-4 w-4 text-primary"/> {info.patientName}
                </h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <CalendarClock className="h-4 w-4 text-primary"/> 
                  {format(new Date(info.appointment.date), 'EEE, MMM d')} at {info.appointment.time}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Reason: {info.appointment.reason}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href={`/patients/${info.patientId}`}>View Patient</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
