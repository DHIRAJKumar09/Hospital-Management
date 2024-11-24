// src/app/layout.tsx
"use client"; // Ensures this component is rendered on the client side
import "../../src/app/globals.css";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import AppSidebar from "@/app/sidebar/page"; // Sidebar import
import Navbar from "@/app/navbar/page"; // Navbar import

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
    
      
        {/* SidebarProvider wrapping the whole layout */}
        <html>
          <body>
              <main>
              
                {children}
              </main>
           
          </body>
        </html>
      
    </SessionProvider>
  );
}
