"use client";

import React from "react";
import UserDashboard from "@/components/user/UserDashboard";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Page = () => {
  return (
    <DashboardLayout>
      <UserDashboard />
    </DashboardLayout>
  );
};

export default Page;

