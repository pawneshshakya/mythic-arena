"use client";

import { useEffect } from "react";
import { AuthProvider } from "@/lib/authContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <AuthProvider>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </AuthProvider>
  );
}
