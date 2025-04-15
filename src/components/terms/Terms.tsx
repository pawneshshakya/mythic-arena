"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  const [showTerms, setShowTerms] = useState(false);

  const handleReadMore = () => {
    setShowTerms(true);

    // Optional: Scroll smoothly to the bottom where terms are shown
    setTimeout(() => {
      document
        .getElementById("terms-content")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="flex flex-col items-center justify-center bg-black px-4 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            Terms & <br className="hidden sm:block" /> Conditions
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut.
          </p>
          {!showTerms && (
            <button
              onClick={handleReadMore}
              className="inline-block text-orange-500 border border-blue-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
            >
              Read more...
            </button>
          )}
        </div>

        {/* Right Side: Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/TandC.avif"
            alt="Terms Illustration"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Terms Content */}
      {showTerms && (
        <div
          id="terms-content"
          className="mt-12 max-w-4xl w-full text-gray-700 text-sm sm:text-base leading-7"
        >
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Full Terms and Conditions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You agree to use our platform in accordance with all applicable
              laws and regulations.
            </li>
            <li>
              Your data will be handled as per our privacy policy and won't be
              shared with third parties without consent.
            </li>
            <li>
              We reserve the right to suspend accounts that violate community
              standards or abuse system functionalities.
            </li>
            <li>
              Payments made are non-refundable unless explicitly stated in our
              refund policy.
            </li>
            <li>
              The content and resources are subject to change without prior
              notice.
            </li>
            <li>
              By continuing to use the site, you acknowledge and agree to be
              bound by these terms.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

// // app/terms/page.tsx or components/Terms.tsx

// import Image from "next/image";
// import Link from "next/link";

// export default function TermsPage() {
//   return (
//     <section className="flex items-center justify-center bg-white px-4 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Side: Text Content */}
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
//             Terms & <br className="hidden sm:block" /> Conditions
//           </h1>
//           <p className="text-gray-500 text-base sm:text-lg mb-6">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
//             nonummy nibh euismod tincidunt ut.
//           </p>
//           <Link
//             href="#"
//             className="inline-block text-orange-500 border border-blue-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
//           >
//             Read more...
//           </Link>
//         </div>

//         {/* Right Side: Illustration */}
//         <div className="flex justify-center md:justify-end">
//           <Image
//             src="/images/TandC.avif"
//             alt="Terms Illustration"
//             width={600}
//             height={600}
//             className="w-full h-auto object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
