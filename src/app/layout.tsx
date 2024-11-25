// src/app/layout.tsx
"use client"; // Ensures this component is rendered on the client side
import "../../src/app/globals.css";
import { SessionProvider } from "next-auth/react";

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
