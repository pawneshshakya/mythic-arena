"use client";

import React from "react";
import BattleCard from "../battlecard/BattleCard";

const Games = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen py-8">
      <div className="px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 w-full space-y-4">
            <div className="w-full h-[620px] bg-gray-800 relative">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/4r3YSOor0g4?si=xFmy5wuDAO8JMuND"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Contrary to popular belief, Lorem Ipsum (2019) is not.
              </h1>
              <p className="text-gray-400 text-sm">2,729,347 views</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-700 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div>
                  <p className="font-semibold text-gray-100">Pavi Gaming</p>
                </div>
              </div>
              <button className="bg-orange-500 px-4 py-1 text-white font-semibold rounded hover:bg-orange-700">
                Subscribe <span className="text-white font-bold">1.4M</span>
              </button>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">Cast:</h2>
              <p className="text-gray-300 text-sm">
                Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">Category :</h2>
              <p className="text-gray-300 text-sm">
                Gaming , PS4 Exclusive , Gameplay , 1080p
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">About :</h2>
              <p className="text-gray-400 text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text...
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">Tags :</h2>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Uncharted 4",
                  "Playstation 4",
                  "Gameplay",
                  "1080P",
                  "ps4Share",
                  "+ 6",
                ].map((tag, i) => (
                  <span key={i} className="bg-gray-700 px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Up Next */}
          <div className="lg:w-1/4 w-full space-y-4">
            <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm rounded-2xl">
              Google AdSense <br /> 336 × 280
            </div>

            <div>
              <h2 className="font-bold text-lg">Up Next</h2>
            </div>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 text-sm border-gray-700 pb-4"
              >
                <BattleCard
                  team1={{
                    name: "Team Phoenix",
                    logoUrl:
                      "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
                  }}
                  team2={{
                    name: "Team Dragon",
                    logoUrl:
                      "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
                  }}
                  startTime={new Date(
                    Date.now() + (i + 1) * 3600 * 1000
                  ).toISOString()}
                />
              </div>
            ))}
            <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm rounded-2xl">
              Google AdSense <br /> 336 × 280
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;

// "use client";

// import React from "react";
// import BattleCard from "../battlecard/BattleCard";

// const Games = () => {
//   return (
//     <div className="bg-gray-800 text-white min-h-screen py-8">
//       {/* Full-screen padding container */}
//       <div className="px-6 lg:px-28">
//         {/* Main Layout */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Video & Details */}
//           <div className="lg:w-3/4 w-full space-y-4">
//             {/* Video */}
//             <div className="w-full h-[620px] bg-gray-800 relative">
//               <iframe
//                 className="w-full h-full rounded-2xl"
//                 src="https://www.youtube.com/embed/4r3YSOor0g4?si=xFmy5wuDAO8JMuND"
//                 allowFullScreen
//               ></iframe>
//             </div>

//             {/* Title & Views */}
//             <div>
//               <h1 className="text-xl font-semibold py-6">
//                 Contrary to popular belief, Lorem Ipsum (2019) is not.
//               </h1>
//             </div>

//             {/* Battle Cards */}
//             <div className="flex flex-col lg:flex-row gap-6">
//               {[...Array(2)].map((_, i) => (
//                 <div key={i} className="flex flex-col lg:flex-row gap-6">
//                   <BattleCard
//                     team1={{
//                       name: "Team Phoenix",
//                       logoUrl:
//                         "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//                     }}
//                     team2={{
//                       name: "Team Dragon",
//                       logoUrl:
//                         "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//                     }}
//                     startTime={new Date(
//                       Date.now() + (i + 1) * 3600 * 1000
//                     ).toISOString()}
//                   />
//                 </div>
//               ))}
//               {/* <BattleCard
//                 team1={{
//                   name: "Team Phoenix",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//                 }}
//                 team2={{
//                   name: "Team Dragon",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//                 }}
//                 startTime={new Date(Date.now() + 3600 * 1000).toISOString()}
//               />
//               <BattleCard
//                 team1={{
//                   name: "Team Phoenix",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//                 }}
//                 team2={{
//                   name: "Team Dragon",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//                 }}
//                 startTime={new Date(Date.now() + 3600 * 1000).toISOString()}
//               /> */}
//             </div>
//           </div>

//           {/* Sidebar: Up Next */}
//           <div className="lg:w-1/4 w-full space-y-4">
//             {/* Ad Placeholder */}
//             <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm rounded-2xl">
//               Google AdSense <br /> 336 × 280
//             </div>

//             <div>
//               <h2 className="font-bold text-lg">Up Next</h2>
//             </div>

//             {/* List of Videos */}
//             {[...Array(3)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col gap-3 text-sm border-gray-700 pb-4"
//               >
//                 <BattleCard
//                   team1={{
//                     name: "Team Phoenix",
//                     logoUrl:
//                       "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//                   }}
//                   team2={{
//                     name: "Team Dragon",
//                     logoUrl:
//                       "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//                   }}
//                   startTime={new Date(
//                     Date.now() + (i + 1) * 3600 * 1000
//                   ).toISOString()}
//                 />

//                 {/* <div className="flex gap-3">
//                   <div className="w-24 h-16 bg-gray-600 flex items-center justify-center text-white">
//                     3:50
//                   </div>
//                   <div className="flex flex-col justify-between">
//                     <p className="text-white font-medium leading-tight">
//                       Here are many variat of passages of Lorem
//                     </p>
//                     <div className="text-xs text-gray-400">
//                       <p>
//                         Education <span className="text-green-400">✔</span>
//                       </p>
//                       <p>1.8M views • 11 Months ago</p>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             ))}

//             {/* Ad Placeholder */}
//             <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm rounded-2xl">
//               Google AdSense <br /> 336 × 280
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Games;

// // app/components/Games.tsx (or wherever you place your components)
// "use client";

// import React from "react";
// import BattleCard from "../battlecard/BattleCard";

// const Games = () => {
//   return (
//     <div className="bg-gray-800 text-white min-h-screen px-4 py-6">
//       {/* Main Layout */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Video & Details */}
//         <div className="lg:w-3/4 w-full space-y-4">
//           {/* Video */}
//           <div className="w-full h-[620px] bg-gray-800 relative px-12">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/4r3YSOor0g4?si=xFmy5wuDAO8JMuND"
//               allowFullScreen
//             ></iframe>
//           </div>

//           {/* Title & Views */}
//           <div>
//             <h1 className="text-xl font-semibold px-12 py-6">
//               Contrary to popular belief, Lorem Ipsum (2019) is not.
//             </h1>
//           </div>
//           <div className="flex flex-col lg:flex-row gap-6">
//             <BattleCard
//               team1={{
//                 name: "Team Phoenix",
//                 logoUrl:
//                   "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//               }}
//               team2={{
//                 name: "Team Dragon",
//                 logoUrl:
//                   "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//               }}
//               startTime={new Date(Date.now() + 3600 * 1000).toISOString()} // 1 hour later
//             />
//             <BattleCard
//               team1={{
//                 name: "Team Phoenix",
//                 logoUrl:
//                   "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//               }}
//               team2={{
//                 name: "Team Dragon",
//                 logoUrl:
//                   "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//               }}
//               startTime={new Date(Date.now() + 3600 * 1000).toISOString()} // 1 hour later
//             />
//           </div>
//         </div>

//         {/* Sidebar: Up Next */}
//         <div className="lg:w-1/4 w-full space-y-4">
//           {/* Ad Placeholder */}
//           <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm mt-6">
//             Google AdSense <br /> 336 × 280
//           </div>
//           <div className="">
//             <h2 className="font-bold text-lg">Up Next</h2>
//           </div>

//           {/* List of Videos */}
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="flex flex-col gap-3 text-sm border-b border-gray-700 pb-4"
//             >
//               {/* Battle Card */}
//               <BattleCard
//                 team1={{
//                   name: "Team Phoenix",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
//                 }}
//                 team2={{
//                   name: "Team Dragon",
//                   logoUrl:
//                     "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
//                 }}
//                 startTime={new Date(
//                   Date.now() + (i + 1) * 3600 * 1000
//                 ).toISOString()} // different time for each card
//               />

//               {/* Optional Extra Info (below the card) */}
//               <div className="flex gap-3">
//                 <div className="w-24 h-16 bg-gray-600 flex items-center justify-center text-white">
//                   3:50
//                 </div>
//                 <div className="flex flex-col justify-between">
//                   <p className="text-white font-medium leading-tight">
//                     Here are many variat of passages of Lorem
//                   </p>
//                   <div className="text-xs text-gray-400">
//                     <p>
//                       Education <span className="text-green-400">✔</span>
//                     </p>
//                     <p>1.8M views • 11 Months ago</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Ad Placeholder */}
//           <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm mt-6">
//             Google AdSense <br /> 336 × 280
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Games;
