import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import Tournaments from "@/components/tournaments/Tournaments";

const page = () => {
  return (
    <MainLayout>
      <Tournaments />
    </MainLayout>
  );
};

export default page;
