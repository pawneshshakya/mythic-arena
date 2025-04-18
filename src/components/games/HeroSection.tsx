"use client";

import { Play, Info } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/bgmi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-16 max-w-screen-xl mx-auto">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Title Logo */}
          <div className="w-full max-w-md mb-6">
            <Image
              src="https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202504103373345_202504.jpg"
              alt="Chhaava Title Logo"
              width={400}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Top 10 Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#e50914] text-white text-xs font-bold py-1 px-2 rounded-sm">
              TOP
              <br />
              10
            </div>
            <span className="text-white text-2xl font-bold">
              #1 in Movies Today
            </span>
          </div>

          {/* Description */}
          <p className="text-white text-lg mb-6 max-w-2xl">
            Sambhaji Maharaj fights for the Maratha Empire's existence in this
            historical drama starring Vicky Kaushal and Akshaye Khanna as rival
            rulers.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="play-button text-base">
              <Play className="h-5 w-5 mr-2" />
              Play
            </button>
            <button className="more-info-button text-base">
              <Info className="h-5 w-5 mr-2" />
              More Info
            </button>
          </div>
        </div>

        {/* Age Rating */}
        <div className="absolute bottom-20 right-16 hidden md:flex items-center gap-2">
          <div className="border border-white/40 bg-black/30 px-2 py-1 text-white text-sm">
            UA 16+
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// "use client";

// import { Play, Info } from "lucide-react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="relative h-[80vh] w-full">
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src="https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202504103373345_202504.jpg"
//           alt="Chhaava"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-16 max-w-screen-xl mx-auto">
//         <div className="w-full md:w-2/3 lg:w-1/2">
//           {/* Title Logo */}
//           <div className="w-full max-w-md mb-6">
//             <Image
//               src="https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202504103373345_202504.jpg"
//               alt="Chhaava Title Logo"
//               width={400}
//               height={150}
//               className="object-contain"
//             />
//           </div>

//           {/* Top 10 Badge */}
//           <div className="flex items-center gap-2 mb-4">
//             <div className="bg-[#e50914] text-white text-xs font-bold py-1 px-2 rounded-sm">
//               TOP
//               <br />
//               10
//             </div>
//             <span className="text-white text-2xl font-bold">
//               #1 in Movies Today
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-white text-lg mb-6 max-w-2xl">
//             Sambhaji Maharaj fights for the Maratha Empire's existence in this
//             historical drama starring Vicky Kaushal and Akshaye Khanna as rival
//             rulers.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-3">
//             <button className="play-button text-base">
//               <Play className="h-5 w-5 mr-2" />
//               Play
//             </button>
//             <button className="more-info-button text-base">
//               <Info className="h-5 w-5 mr-2" />
//               More Info
//             </button>
//           </div>
//         </div>

//         {/* Age Rating */}
//         <div className="absolute bottom-20 right-16 hidden md:flex items-center gap-2">
//           <div className="border border-white/40 bg-black/30 px-2 py-1 text-white text-sm">
//             UA 16+
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
