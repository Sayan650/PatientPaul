"use client";

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Stethoscope } from 'lucide-react'; // Changed icon
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 shadow-sm sm:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-xl">
        <Stethoscope className="h-6 w-6 text-primary" /> 
        <span>PatientPaul</span>
      </Link>
      {/* Add UserMenu or other header items here if needed */}
    </header>
  );
}
