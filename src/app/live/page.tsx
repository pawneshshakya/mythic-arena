import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import Live from "@/components/live/Live";

function page() {
  return (
    <MainLayout>
      <Live />
    </MainLayout>
  );
}

export default page;
