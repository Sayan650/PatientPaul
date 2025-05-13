
export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  instructions: string;
  datePrescribed: string; // Store as ISO string
}

export interface Appointment {
  id: string;
  date: string; // Store as ISO string
  time: string;
  reason: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Patient {
  id: string;
  name: string;
  age: number; 
  sex: string;
  occu: string;
  contactDetails: {
    phone: string;
    // email: string;
  };
  medicalHistory: string;
  prescriptions: Prescription[];
  appointments: Appointment[];
}

