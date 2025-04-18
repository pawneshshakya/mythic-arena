import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import HlsPlayer from "@/components/stream/HlsPlayer";

const Page = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Live Game Stream</h1>
      <HlsPlayer />
    </MainLayout>
  );
};

export default Page;
