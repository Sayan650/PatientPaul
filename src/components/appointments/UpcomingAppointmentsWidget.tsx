
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarClock, User, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import { getUpcomingAppointmentsForWidget } from '@/lib/actions/patientActions';
import type { Appointment, Patient } from '@prisma/client';

interface UpcomingAppointmentInfo {
  patientId: string;
  patientName: string;
  appointment: Appointment; // Prisma Appointment type
}

export default async function UpcomingAppointmentsWidget() {
  let upcomingAppointmentsInfo: UpcomingAppointmentInfo[] = [];
  let error: string | null = null;

  try {
    const rawAppointments = await getUpcomingAppointmentsForWidget();
    // Transform rawAppointments to UpcomingAppointmentInfo structure
    upcomingAppointmentsInfo = rawAppointments.map(app => ({
      patientId: app.patient.id,
      patientName: app.patient.name,
      appointment: app,
    }));
  } catch (e: any) {
    console.error("Error fetching upcoming appointments:", e);
    error = e.message || "Failed to load upcoming appointments.";
  }

  if (error) {
    return (
      <div className="text-destructive-foreground bg-destructive/80 p-4 rounded-md flex items-center gap-3">
        <AlertTriangle className="h-6 w-6" />
        <div>
            <p className="font-semibold">Could not load appointments</p>
            <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (upcomingAppointmentsInfo.length === 0) {
    return <p className="text-muted-foreground">No upcoming appointments in the next 7 days.</p>;
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {upcomingAppointmentsInfo.map(info => (
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
