"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Stethoscope } from 'lucide-react'; // Changed Stethoscope icon
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/patients', label: 'Patients', icon: Users },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="border-b">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-xl p-2">
          <Stethoscope className="h-7 w-7 text-primary" />
          <span className="group-data-[collapsible=icon]:hidden">PatientPal</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  className={cn(
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                  tooltip={item.label}
                  isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
