
"use client";

import type { Patient } from '@/lib/types';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const patientSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.coerce.number().int().nonnegative("Age must be a non-negative number.").max(150, "Age seems too high."),
  contactDetails: z.object({
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
  }),
  medicalHistory: z.string().optional(),
});

export type PatientFormData = z.infer<typeof patientSchema>;

interface PatientFormProps {
  patient?: Patient;
  onSubmit: (data: PatientFormData) => void;
  isSubmitting?: boolean;
}

export default function PatientForm({ patient, onSubmit, isSubmitting }: PatientFormProps) {
  const form = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: patient ? {
      ...patient,
      age: patient.age,
    } : {
      name: '',
      age: 0,
      contactDetails: { phone: '', email: '' },
      medicalHistory: '',
    },
  });

  const handleFormSubmit: SubmitHandler<PatientFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle>{patient ? 'Edit Patient' : 'Add New Patient'}</CardTitle>
        <CardDescription>
          {patient ? 'Update the details of the patient.' : 'Fill in the form to register a new patient.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 35" {...field} 
                      onChange={event => field.onChange(+event.target.value)} // Ensure value is number
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactDetails.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="e.g. (123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactDetails.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g. john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="medicalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical History (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Relevant medical conditions, allergies, etc." {...field} className="min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
              {isSubmitting ? (patient ? 'Updating...' : 'Adding...' ): (patient ? 'Update Patient' : 'Add Patient')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

