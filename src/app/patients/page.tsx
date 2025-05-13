"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PatientListItem from "@/components/patients/PatientListItem";
import { PlusCircle, Users, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getPatients } from "@/lib/actions/patientActions";
import type { Patient } from "@prisma/client"; // Use Prisma generated type

async function PatientsList() {
  // This component will be streamed
  const initialPatients = await getPatients();

  // Client-side state for filtering
  // To make search fully server-side, you'd use URL searchParams and re-fetch
  // For simplicity, keeping client-side search for now based on initial full list
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] =
    useState<Patient[]>(initialPatients);
  const [patients, setPatients] = useState<Patient[]>(initialPatients); // To store the full list for re-filtering

  useEffect(() => {
    setPatients(initialPatients);
    setFilteredPatients(initialPatients);
  }, [initialPatients]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPatients(patients);
    } else {
      setFilteredPatients(
        patients.filter((patient) =>
          patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [searchTerm, patients]);

  // This effect is to re-fetch if underlying data might change outside client filtering (e.g. after navigation)
  // However, with server actions and revalidatePath, this might not be strictly necessary for updates
  // but can be useful for initial load or if store changes due to external factors.
  // For now, initialPatients from server component props is the source of truth on load.
  // Revalidation from server actions will refresh the server component.

  // Client-side filtering based on the initially fetched server data
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search patients by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="max-w-sm"
        />
      </div>

      {filteredPatients.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <PatientListItem key={patient.id} patient={patient} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">No patients found.</p>
          {searchTerm && (
            <p className="text-sm text-muted-foreground">
              Try adjusting your search term.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default function PatientsListPage() {
  // This outer component can set up layout and suspense boundaries
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Users className="h-8 w-8 text-primary" /> Patient Records
        </h1>
        <Link href="/patients/new" passHref>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-5 w-5" /> Add New Patient
          </Button>
        </Link>
      </div>
      <Suspense fallback={<PatientsListSkeleton />}>
        <PatientsListClientWrapper />
      </Suspense>
    </div>
  );
}

// Client Wrapper to handle state for search if needed, or just render the server component
function PatientsListClientWrapper() {
  const [searchTerm, setSearchTerm] = useState("");
  const [clientPatients, setClientPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        // Initial fetch or re-fetch based on searchTerm if server-side search is implemented
        // For now, this fetches all and filters client-side.
        const fetchedPatients = await getPatients(); // This is a server action
        setClientPatients(fetchedPatients);
      } catch (e) {
        setError("Failed to load patients.");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []); // Empty dependency: fetch once on mount. Revalidation will handle updates.

  const filteredPatients = clientPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (isLoading) {
    return <PatientsListSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-destructive flex flex-col items-center">
        <AlertTriangle className="h-12 w-12 mb-4" />
        <p className="text-lg font-semibold">Error loading patients</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search patients by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filteredPatients.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <PatientListItem key={patient.id} patient={patient} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">No patients found.</p>
          {searchTerm && (
            <p className="text-sm text-muted-foreground">
              Try adjusting your search term.
            </p>
          )}
        </div>
      )}
    </>
  );
}

function PatientsListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="shadow-md">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-9 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

// To satisfy Suspense, these skeleton related components would also be needed:
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
