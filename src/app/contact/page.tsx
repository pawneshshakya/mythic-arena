import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContactHead } from "@/components/contact/ContactHead";

const page = () => {
  return (
    <MainLayout>
      <ContactHead />
      <ContactForm />
    </MainLayout>
  );
};

export default page;
