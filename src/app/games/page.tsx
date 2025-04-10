import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import Games from "@/components/games/Games";

function page() {
  return (
    <MainLayout>
      <Games />
    </MainLayout>
  );
}

export default page;
