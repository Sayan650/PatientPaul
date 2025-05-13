"use client";

import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="left" collapsible="icon">
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
