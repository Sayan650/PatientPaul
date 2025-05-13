"use client";

import type { Patient, Prescription, Appointment } from './types';
import { useState, useEffect, useCallback } from 'react';

const STORE_KEY = 'patientPalData';

interface AppState {
  patients: Patient[];
}

const initialAppState: AppState = {
  patients: [],
};

let memoryState: AppState = { ...initialAppState };
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach(listener => listener());
}

function loadState(): AppState {
  if (typeof window === 'undefined') return initialAppState;
  try {
    const serializedState = localStorage.getItem(STORE_KEY);
    if (serializedState === null) {
      return initialAppState;
    }
    const storedState = JSON.parse(serializedState);
    // Basic validation to ensure structure matches
    if (storedState && Array.isArray(storedState.patients)) {
       return storedState;
    }
    return initialAppState;
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return initialAppState;
  }
}

function saveState(state: AppState) {
  if (typeof window === 'undefined') return;
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORE_KEY, serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
}

// Initialize memoryState from localStorage
if (typeof window !== 'undefined') {
  memoryState = loadState();
}


export function usePatientStore() {
  const [state, setState] = useState<AppState>(memoryState);

  useEffect(() => {
    // Sync with memoryState when component mounts or memoryState changes externally
    const handleStorageChange = () => {
        const newState = loadState();
        memoryState = newState;
        setState(newState);
        notifyListeners();
    }
    
    // Component specific listener
    const listener = () => setState({...memoryState});
    listeners.add(listener);

    // Listen for changes from other tabs/windows
    window.addEventListener('storage', handleStorageChange);
    
    // Initial sync
    setState(memoryState);

    return () => {
      listeners.delete(listener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateAndNotify = useCallback((newState: Partial<AppState>) => {
    memoryState = { ...memoryState, ...newState };
    saveState(memoryState);
    notifyListeners();
  }, []);

  const getPatients = useCallback(() => memoryState.patients, [state.patients]);

  const getPatientById = useCallback((id: string) => {
    return memoryState.patients.find(p => p.id === id);
  }, [state.patients]);

  const addPatient = useCallback((patientData: Omit<Patient, 'id' | 'prescriptions' | 'appointments'>) => {
    const newPatient: Patient = {
      ...patientData,
      id: Date.now().toString(),
      prescriptions: [],
      appointments: [],
    };
    updateAndNotify({ patients: [...memoryState.patients, newPatient] });
    return newPatient;
  }, [updateAndNotify]);

  const updatePatient = useCallback((patientId: string, updatedData: Partial<Patient>) => {
    const updatedPatients = memoryState.patients.map(p =>
      p.id === patientId ? { ...p, ...updatedData } : p
    );
    updateAndNotify({ patients: updatedPatients });
  }, [updateAndNotify, state.patients]);


  const addPrescription = useCallback((patientId: string, prescriptionData: Omit<Prescription, 'id'>) => {
    const patient = getPatientById(patientId);
    if (!patient) return;
    const newPrescription: Prescription = {
      ...prescriptionData,
      id: Date.now().toString(),
    };
    const updatedPrescriptions = [...patient.prescriptions, newPrescription];
    updatePatient(patientId, { prescriptions: updatedPrescriptions });
    return newPrescription;
  }, [getPatientById, updatePatient]);

  const addAppointment = useCallback((patientId: string, appointmentData: Omit<Appointment, 'id'>) => {
    const patient = getPatientById(patientId);
    if (!patient) return;
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
    };
    const updatedAppointments = [...patient.appointments, newAppointment];
    updatePatient(patientId, { appointments: updatedAppointments });
    return newAppointment;
  }, [getPatientById, updatePatient]);
  
  const deletePatient = useCallback((patientId: string) => {
    const updatedPatients = memoryState.patients.filter(p => p.id !== patientId);
    updateAndNotify({ patients: updatedPatients });
  }, [updateAndNotify, state.patients]);

  const deletePrescription = useCallback((patientId: string, prescriptionId: string) => {
    const patient = getPatientById(patientId);
    if (!patient) return;
    const updatedPrescriptions = patient.prescriptions.filter(p => p.id !== prescriptionId);
    updatePatient(patientId, { prescriptions: updatedPrescriptions });
  }, [getPatientById, updatePatient]);

  const deleteAppointment = useCallback((patientId: string, appointmentId: string) => {
    const patient = getPatientById(patientId);
    if (!patient) return;
    const updatedAppointments = patient.appointments.filter(a => a.id !== appointmentId);
    updatePatient(patientId, { appointments: updatedAppointments });
  }, [getPatientById, updatePatient]);


  return {
    patients: state.patients,
    getPatients,
    getPatientById,
    addPatient,
    updatePatient,
    addPrescription,
    addAppointment,
    deletePatient,
    deletePrescription,
    deleteAppointment,
  };
}
