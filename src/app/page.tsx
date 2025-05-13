
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PlusCircle, Users, AlertTriangle } from 'lucide-react';
import UpcomingAppointmentsWidget from '@/components/appointments/UpcomingAppointmentsWidget';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';


function UpcomingAppointmentsWidgetSkeleton() {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-48 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-8 w-24" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to PatientPaul</h1>
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
            <Suspense fallback={<UpcomingAppointmentsWidgetSkeleton />}>
              <UpcomingAppointmentsWidget />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
