'use client'
import React,{useState} from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
  } from "@/components/ui/sidebar";  // Assuming you're using shadcn/ui
  import { HomeIcon } from "lucide-react";
  import { CalendarIcon } from "lucide-react";
  import { UsersIcon } from "lucide-react";
  import { ChartBarIcon } from "lucide-react";
  
  // Wrap your sidebar in the SidebarProvider
  export default function AppSidebar() {


    return (
        <SidebarProvider>
        <Sidebar className={`w-64 h-full bg-primary `}>
          <SidebarHeader className="px-4 py-2 text-2xl font-bold">
            Hospital Manager
          </SidebarHeader>
  
          <SidebarContent className="space-y-6">
            {/* First Group - Main Navigation */}
            <SidebarGroup>
              <SidebarItem link="/dashboard" icon={<HomeIcon className="w-6 h-6 mr-3" />}>
                Dashboard
              </SidebarItem>
              <SidebarItem link="/appointments" icon={<CalendarIcon className="w-6 h-6 mr-3" />}>
                Appointments
              </SidebarItem>
              <SidebarItem link="/doctors" icon={<UsersIcon className="w-6 h-6 mr-3" />}>
                Doctors
              </SidebarItem>
            </SidebarGroup>
  
            {/* Second Group - Analytics */}
            <SidebarGroup>
              <SidebarItem link="/analytics" icon={<ChartBarIcon className="w-6 h-6 mr-3" />}>
                Analytics
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
  
          <SidebarFooter className="px-4 py-2 mt-auto text-sm">
            <p>© 2024 Hospital Manager</p>
          </SidebarFooter>
        </Sidebar>
        </SidebarProvider>
      
    
    );
  }
  
  // Sidebar Item component
  const SidebarItem = ({ link, icon, children }) => {
    return (
      <a href={link} className="flex items-center px-4 py-2 rounded-md hover:bg-secondary transition duration-300">
        {icon}
        <span className="ml-3">{children}</span>
      </a>
    );
  };
  