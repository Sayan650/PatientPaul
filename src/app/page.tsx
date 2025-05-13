import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PlusCircle, Users } from 'lucide-react';
import UpcomingAppointmentsWidget from '@/components/appointments/UpcomingAppointmentsWidget';

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to PatientPal</h1>
        <p className="text-muted-foreground">Your centralized hub for patient management.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-accent" />
              Manage Patients
            </CardTitle>
            <CardDescription>View, add, or edit patient records.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/patients" passHref>
              <Button variant="outline" className="w-full">View All Patients</Button>
            </Link>
            <Link href="/patients/new" passHref>
              <Button variant="default" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Patient
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2">
           <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Patients with appointments in the next 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingAppointmentsWidget />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
