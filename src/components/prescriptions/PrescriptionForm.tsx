"use client";

import type { Prescription } from '@/lib/types';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const prescriptionSchema = z.object({
  medicationName: z.string().min(2, "Medication name is required"),
  dosage: z.string().min(1, "Dosage is required"),
  instructions: z.string().min(5, "Instructions are required"),
  datePrescribed: z.date({ required_error: "Date prescribed is required." }),
});

export type PrescriptionFormData = z.infer<typeof prescriptionSchema>;

interface PrescriptionFormProps {
  prescription?: Prescription;
  onSubmit: (data: PrescriptionFormData) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export default function PrescriptionForm({ prescription, onSubmit, onCancel, isSubmitting }: PrescriptionFormProps) {
  const form = useForm<PrescriptionFormData>({
    resolver: zodResolver(prescriptionSchema),
    defaultValues: prescription ? {
        ...prescription,
        datePrescribed: new Date(prescription.datePrescribed),
    } : {
      medicationName: '',
      dosage: '',
      instructions: '',
      datePrescribed: new Date(),
    },
  });

  const handleFormSubmit: SubmitHandler<PrescriptionFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="medicationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medication Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Amoxicillin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dosage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dosage</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 500mg, 1 tablet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea placeholder="e.g. Take one tablet twice a day for 7 days." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
            control={form.control}
            name="datePrescribed"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date Prescribed</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                       disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        <div className="flex justify-end gap-2 pt-2">
          {onCancel && <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>}
          <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
            {isSubmitting ? (prescription ? 'Updating...' : 'Adding...') : (prescription ? 'Update Prescription' : 'Add Prescription')}
          </Button>
        </div>
      </form>
    </Form>
  );
}
