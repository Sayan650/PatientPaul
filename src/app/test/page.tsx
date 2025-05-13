"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testPatientCreate, testDatabaseConnection, getErrorDetails } from "@/lib/actions/testActions";

export default function TestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function testConnection() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/test", {
        method: "GET",
      });
      const data = await response.json();
      setTestResult(data);
    } catch (err) {
      console.error("Test connection error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }

  async function testCreatePatient() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // The endpoint creates a test patient with default values
      });
      const data = await response.json();
      setTestResult(data);
    } catch (err) {
      console.error("Test create patient error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Prisma Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Test Database Connection</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testConnection} 
              disabled={isLoading}
              className="w-full mb-2"
            >
              {isLoading ? "Testing..." : "Test Connection (API)"}
            </Button>
            <Button 
              onClick={async () => {
                setIsLoading(true);
                try {
                  const result = await testDatabaseConnection();
                  setTestResult(result);
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Unknown server action error");
                } finally {
                  setIsLoading(false);
                }
              }} 
              disabled={isLoading}
              className="w-full"
              variant="outline"
            >
              Test Connection (Server Action)
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Create Patient</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testCreatePatient} 
              disabled={isLoading}
              className="w-full mb-2"
            >
              {isLoading ? "Creating..." : "Create Test Patient (API)"}
            </Button>
            <Button 
              onClick={async () => {
                setIsLoading(true);
                try {
                  const result = await testPatientCreate();
                  setTestResult(result);
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Unknown server action error");
                } finally {
                  setIsLoading(false);
                }
              }} 
              disabled={isLoading}
              className="w-full"
              variant="outline"
            >
              Create Test Patient (Server Action)
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Environment Info</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={async () => {
              setIsLoading(true);
              try {
                const result = await getErrorDetails();
                setTestResult(result);
              } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown server action error");
              } finally {
                setIsLoading(false);
              }
            }} 
            disabled={isLoading}
            className="w-full"
            variant="secondary"
          >
            Get Environment Details
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-8 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-500">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-red-50 p-4 rounded text-red-600 overflow-auto max-h-48">
              {error}
            </pre>
          </CardContent>
        </Card>
      )}

      {testResult && (
        <Card>
          <CardHeader>
            <CardTitle>Test Result</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
              {JSON.stringify(testResult, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}