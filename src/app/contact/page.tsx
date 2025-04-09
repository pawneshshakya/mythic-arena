import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { MainLayout } from "@/components/layout/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <ContactForm />
    </MainLayout>
  );
};

export default page;
