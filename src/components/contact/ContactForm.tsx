"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (API call, validation, toast, etc.)
  };
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-75" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Contact Form Section */}
        <div className="mt-5 bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
