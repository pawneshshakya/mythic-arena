"use client";

import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 py-6 px-8">
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mt-2">
              Last Updated: April 15, 2025
            </p>
          </div>

          <div className="p-8 space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                1. Introduction
              </h2>
              <p className="ml-8">
                At{" "}
                <span className="font-medium text-gray-800">Mythic Arena</span>,
                we value your privacy. This Privacy Policy explains how we
                collect, use, and protect your personal information when you
                register, log in, participate in events, and make payments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                2. Information We Collect
              </h2>
              <ul className="ml-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-800">
                      Personal Information:
                    </strong>{" "}
                    Name, email address, mobile number, and date of birth.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-800">Account Data:</strong>{" "}
                    Login credentials and activity on our platform.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-800">Payment Details:</strong>{" "}
                    Payment method, transaction data (Note: we use third-party
                    payment gateways and do not store card information).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-800">
                      Device Information:
                    </strong>{" "}
                    IP address, browser type, and device data for security and
                    analytics.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                3. How We Use Your Information
              </h2>
              <ul className="ml-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>To create and manage user accounts.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>To facilitate event participation and transactions.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>To process payments and distribute winnings.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    To ensure security and monitor for fraudulent activity.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>To improve website performance and user experience.</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </span>
                4. Sharing of Information
              </h2>
              <ul className="ml-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>We do not sell your information.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    We may share data with trusted payment gateways and service
                    providers for functionality and legal compliance.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                5. Data Security
              </h2>
              <p className="ml-8">
                We implement industry-standard security measures to protect your
                data against unauthorized access. These include encryption of
                sensitive information, regular security assessments, and secure
                hosting environments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                6. User Rights
              </h2>
              <p className="ml-8">
                You can request access, update, or delete your personal
                information by contacting us. You have the right to:
              </p>
              <ul className="ml-8 mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>Access all personal data we have about you</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>Correct any inaccurate information</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    Request deletion of your data (subject to legal
                    requirements)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>Withdraw consent for data processing</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="text-orange-500 mr-2">
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
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </span>
                7. Changes to This Policy
              </h2>
              <p className="ml-8">
                We may update this Privacy Policy. Changes will be posted on
                this page with a revised effective date. Significant changes
                will be notified to users via email or through our platform.
              </p>
            </section>

            <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-orange-800">
                    Contact Us
                  </h3>
                  <div className="mt-2 text-orange-700">
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us at:
                    </p>
                    <p className="mt-1">
                      <strong>Email:</strong> privacy@mythicarena.com
                    </p>
                    <p>
                      <strong>Address:</strong> Mythic Arena Gaming Ltd., 123
                      Game Street, Tech City, 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
