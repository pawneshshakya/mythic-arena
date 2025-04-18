"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/authContext";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar, { DashboardSidebarMobile } from "./DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!user) {
    // Optionally redirect to login page:
    // router.push("/login");
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] space-y-4">
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p className="text-gray-500">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <DashboardHeader onMenuClick={() => setMobileSidebarOpen(true)} />
      <div className="flex-1 flex min-h-0">
        <DashboardSidebar />
        {/* Mobile sidebar overlay */}
        <DashboardSidebarMobile
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <main className="flex-1 p-4 md:p-8 md:ml-0">{children}</main>
      </div>
    </div>
  );
}
