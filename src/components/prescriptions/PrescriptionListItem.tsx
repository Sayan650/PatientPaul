"use client";

import type { Prescription } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill, CalendarDays, Edit, Trash2 } from 'lucide-react';
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

interface PrescriptionListItemProps {
  prescription: Prescription;
  onDelete: (prescriptionId: string) => void;
  // onEdit: (prescription: Prescription) => void; // For future edit functionality
}

export default function PrescriptionListItem({ prescription, onDelete }: PrescriptionListItemProps) {
  return (
    <Card className="mb-4 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
            <CardTitle className="text-lg flex items-center gap-2">
            <Pill className="h-5 w-5 text-accent" />
            {prescription.medicationName}
            </CardTitle>
            <div className="flex gap-1">
                {/* <Button variant="ghost" size="icon" onClick={() => onEdit(prescription)} className="text-blue-600 hover:text-blue-500">
                    <Edit className="h-4 w-4" />
                </Button> */}
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
                        This action cannot be undone. This will permanently delete the prescription for {prescription.medicationName}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(prescription.id)} className="bg-destructive hover:bg-destructive/90">
                        Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
          <CalendarDays className="h-3 w-3" /> Prescribed on: {format(new Date(prescription.datePrescribed), 'MMMM d, yyyy')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm"><strong className="font-medium">Dosage:</strong> {prescription.dosage}</p>
        <p className="text-sm mt-1"><strong className="font-medium">Instructions:</strong> {prescription.instructions}</p>
      </CardContent>
    </Card>
  );
}
