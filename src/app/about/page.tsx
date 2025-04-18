"use client";

import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import HeroSection from "../../components/about/HeroSection";
import StateSection from "../../components/about/StateSection";

const Page = () => {
  return (
    <MainLayout>
      <HeroSection />
      <StateSection />
    </MainLayout>
  );
};

export default Page;