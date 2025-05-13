
"use client";

import type { Patient } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Trash2 } from 'lucide-react';
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

interface PatientListItemProps {
  patient: Patient;
  onDelete: (patientId: string) => void;
}

export default function PatientListItem({ patient, onDelete }: PatientListItemProps) {
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
                <AlertDialogAction onClick={() => onDelete(patient.id)} className="bg-destructive hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{patient.contactDetails.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{patient.contactDetails.phone}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
         {/* Edit button could navigate to an edit page or open a modal form */}
         {/* <Link href={`/patients/${patient.id}/edit`} passHref>
          <Button variant="outline" size="sm"><Edit3 className="mr-2 h-4 w-4" /> Edit</Button>
        </Link> */}
        <Link href={`/patients/${patient.id}`} passHref>
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

