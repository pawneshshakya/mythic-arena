import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Contact Info Section */}
        <div className="bg-gray-900 md:col-span-4 p-5 text-white rounded-xl">
          <h3 className="text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-orange-500">Touch</span>
          </h3>

          <h3 className="text-center mt-4 mb-4 text-lg font-medium leading-7 text-gray-200">
            We love to here for you
          </h3>

          {/* Address */}
          <div className="h-2/5 mb-7 pr-6">
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className=" text-lg font-medium leading-6 text-white-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="text-white-600 dark:text-slate-400">
                    Noida Sector 44, Uttar Pradesh, India
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className=" text-lg font-medium leading-6 text-white-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-white-600 dark:text-slate-400">
                    mythicarena@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className=" text-lg font-medium leading-6 text-white-900 dark:text-white">
                    Working hours
                  </h3>
                  <p className="text-white-600 dark:text-slate-400">24*7</p>
                </div>
              </li>
            </ul>
          </div>
          <h3 className="mb-5 text-center text-lg font-medium leading-6 text-white-900 dark:text-white">
            Social Links
          </h3>
          <div className="h-2/7 pr-6 ">
            <div className="flex mt-2 gap-[10px] justify-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm8 5a1 1 0 110 2 1 1 0 010-2zm-5 2a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15.8c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 3h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37c-.83.5-1.75.85-2.72 1.04a4.27 4.27 0 00-7.28 3.9 12.13 12.13 0 01-8.8-4.46 4.28 4.28 0 001.33 5.7A4.23 4.23 0 012 9.71v.05a4.27 4.27 0 003.42 4.18c-.4.1-.82.15-1.25.15-.31 0-.6-.03-.89-.08a4.28 4.28 0 003.99 2.96 8.56 8.56 0 01-6.3 1.76 12.09 12.09 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.38-.01-.57A8.74 8.74 0 0024 4.56a8.4 8.4 0 01-2.54.7z" />
                </svg>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 15l5.19-3L10 9v6z" />
                  <path
                    fillRule="evenodd"
                    d="M21.8 8s-.2-1.4-.8-2a3.3 3.3 0 00-2.3-.8C16.1 5 12 5 12 5s-4.1 0-6.7.2c-.9 0-1.8.3-2.4.8-.5.5-.8 2-.8 2S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2a3.3 3.3 0 002.3.8C7.9 19 12 19 12 19s4.1 0 6.7-.2c.9 0 1.8-.3 2.4-.8.5-.5.8-2 .8-2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.3h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.6c0-1.8-.1-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4.1V24h-4V8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form Section */}
        <div className="md:col-span-8 p-6">
          <h3 className="mb-10 text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Lets <span className="text-orange-500">Talk</span>
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     description: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add form submission logic here (API call, validation, toast, etc.)
//   };
//   return (
//     <div className="relative bg-gray-900 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-75" />

//       <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//         {/* Contact Form Section */}
//         <div className="mt-5 bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-gray-300 mb-2">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-300 mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-300 mb-2">Description</label>
//               <textarea
//                 name="description"
//                 rows={4}
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg"
//             >
//               Submit
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
