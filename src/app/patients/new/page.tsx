
"use client";

import PatientForm, { type PatientFormData } from '@/components/patients/PatientForm';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { addPatientAction } from '@/lib/actions/patientActions';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewPatientPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: PatientFormData) => {
    try {
      console.log("Form submitted with data:", JSON.stringify(data));
      setIsSubmitting(true);
      
      // Ensure all required data is present
      const validationErrors = [];
      if (!data.name) validationErrors.push("Name is required");
      if (data.age === undefined || data.age === null) validationErrors.push("Age is required");
      if (!data.phone) validationErrors.push("Phone is required");
      if (!data.sex) validationErrors.push("Sex is required");
      if (!data.occu) validationErrors.push("Occupation is required");
      
      if (validationErrors.length > 0) {
        console.error("Client-side validation errors:", validationErrors);
        toast({
          title: "Form Validation Error",
          description: validationErrors.join(", "),
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Make sure age is a number
      const formData = {
        ...data,
        age: typeof data.age === 'string' ? parseInt(data.age, 10) : data.age,
      };
      
      console.log("Sending normalized data to server:", JSON.stringify(formData));
      const result = await addPatientAction(formData);
      
      console.log("Server response:", JSON.stringify(result));
      
      if (result.success && result.patient) {
        toast({
          title: "Patient Added",
          description: `${result.patient.name} has been successfully registered.`,
        });
        router.push(`/patients/${result.patient.id}`);
      } else {
        toast({
          title: "Error Adding Patient",
          description: result.message || "An unexpected error occurred.",
          variant: "destructive",
        });
        // Display validation errors if present
        if (result.errors) {
          console.error("Validation errors:", result.errors);
          Object.entries(result.errors).forEach(([field, messages]) => {
            console.error(`Field ${field} errors:`, messages);
          });
        }
      }
    } catch (error) {
      console.error("Exception during patient submission:", error);
      toast({
        title: "Submission Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [showDebug, setShowDebug] = useState(false);
  
  return (
    <div className="container mx-auto py-8">
      <PatientForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      
      <div className="mt-8">
        <Button 
          variant="outline" 
          onClick={() => setShowDebug(!showDebug)}
          className="mb-4"
        >
          {showDebug ? "Hide Debug Info" : "Show Debug Info"}
        </Button>
        
        {showDebug && (
          <Card>
            <CardHeader>
              <CardTitle>Debug Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={async () => {
                  try {
                    const testData = {
                      name: "Test Patient " + Date.now(),
                      age: 30,
                      phone: "1234567890",
                      sex: "Not specified",
                      occu: "Test",
                      medicalHistory: "Created via test button"
                    };
                    
                    console.log("Submitting test data:", testData);
                    const result = await addPatientAction(testData);
                    setDebugInfo(result);
                    
                    if (result.success) {
                      toast({
                        title: "Test Patient Added",
                        description: `Test patient has been successfully created.`,
                      });
                    }
                  } catch (e) {
                    console.error("Test submission error:", e);
                    setDebugInfo(e instanceof Error ? { message: e.message, stack: e.stack } : e);
                  }
                }}
                className="mb-4"
              >
                Create Test Patient
              </Button>
              
              {debugInfo && (
                <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
                  {JSON.stringify(debugInfo, null, 2)}
                </pre>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
