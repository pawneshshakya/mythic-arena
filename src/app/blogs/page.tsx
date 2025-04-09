import React from "react";
import Blogs from "@/components/blogs/Blogs";
import { MainLayout } from "@/components/layout/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <Blogs />
    </MainLayout>
  );
};

export default page;
