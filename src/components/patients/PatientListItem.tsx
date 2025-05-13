
"use client";

import type { Patient } from '@prisma/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Trash2 } from 'lucide-react'; // Mail icon removed
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
import { useToast } from '@/hooks/use-toast';
import { deletePatientAction } from '@/lib/actions/patientActions';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';


interface PatientListItemProps {
  patient: Patient;
}

export default function PatientListItem({ patient }: PatientListItemProps) {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    const result = await deletePatientAction(patient.id);
    if (result.success) {
      toast({
        title: "Patient Deleted",
        description: `${patient.name} has been removed.`,
      });
      // Revalidation is handled by the server action, Next.js should refresh the data.
      // Forcing a client-side refresh might be needed if revalidation is not immediate or for UX.
      startTransition(() => {
        router.refresh(); 
      });
    } else {
      toast({
        title: "Error",
        description: result.message || "Failed to delete patient.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
              <User className="text-accent" /> {patient.name}
            </CardTitle>
            <CardDescription>{patient.age} years old</CardDescription>
          </div>
           <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                <Trash2 className="h-5 w-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the patient {patient.name} and all their associated data.
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
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Email display removed as it's not in the Prisma schema */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{patient.phone}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Link href={`/patients/${patient.id}`} passHref>
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
