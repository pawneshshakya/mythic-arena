"use client";
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import AdminDashboard from "@/components/admin/AdminDashboard";

const page = () => {
  return (
    <MainLayout>
      <AdminDashboard />
    </MainLayout>
  );
};

export default page;
