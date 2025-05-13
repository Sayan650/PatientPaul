
"use client";

import type { Appointment } from '@prisma/client'; // Use Prisma type
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarClock, Trash2 } from 'lucide-react'; // Edit icon removed for now
import { format } from 'date-fns';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AppointmentListItemProps {
  appointment: Appointment; // Prisma type
  onDelete: (appointmentId: string) => Promise<void>; // Expects to call a server action
}

export default function AppointmentListItem({ appointment, onDelete }: AppointmentListItemProps) {
  const getStatusVariant = (status: Appointment['status']): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'upcoming':
        return 'default';
      case 'completed':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };
  
  const handleDelete = async () => {
    await onDelete(appointment.id);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-accent" />
            Appointment
          </CardTitle>
          <div className="flex gap-1">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                    <Trash2 className="h-4 w-4" />
                </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the appointment scheduled for {format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                    Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <CardDescription className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span>{format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}</span>
          <Badge variant={getStatusVariant(appointment.status)} className="capitalize">{appointment.status}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm"><strong className="font-medium">Reason:</strong> {appointment.reason}</p>
      </CardContent>
    </Card>
  );
}
