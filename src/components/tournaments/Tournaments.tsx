"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const tournaments = [
  {
    id: 1,
    game: "BGMI",
    image: "https://svgshare.com/i/16D0.svg",
    startTime: "April 20, 2025 - 6:00 PM",
    rules: [
      "Solo mode only",
      "No emulators allowed",
      "Team-up is strictly prohibited",
    ],
    joiningFee: "₹50",
    winnerCriteria: "Top 3 with highest kills + survival",
    prize: "₹5,000",
    slots: "50/100",
  },
  {
    id: 2,
    game: "Call Of Duty",
    image: "https://svgshare.com/i/16D0.svg",
    startTime: "April 21, 2025 - 7:30 PM",
    rules: [
      "Sniper mode disabled",
      "No external communication allowed",
      "Use only default loadout",
    ],
    joiningFee: "₹100",
    winnerCriteria: "Top scorer of the match wins",
    prize: "₹10,000",
    slots: "85/100",
  },
  {
    id: 3,
    game: "Free Fire Max",
    image: "https://svgshare.com/i/16D0.svg",
    startTime: "April 22, 2025 - 5:00 PM",
    rules: [
      "Classic mode only",
      "No teaming up",
      "No third-party apps or hacks",
    ],
    joiningFee: "₹30",
    winnerCriteria: "Last man standing",
    prize: "₹3,000",
    slots: "32/50",
  },
];

const Tournaments = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Upcoming <span className="text-orange-500">Tournaments</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our competitive tournaments and showcase your skills against
            top players. Compete for exciting cash prizes and recognition in the
            gaming community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {tournament.game}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      {tournament.startTime}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                    <img
                      src={tournament.image}
                      alt={tournament.game}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="mt-4 bg-orange-500 rounded-md px-3 py-1 inline-block">
                  <p className="text-white font-semibold text-sm">
                    Prize: {tournament.prize}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Tournament Rules
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tournament.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Entry Fee</p>
                    <p className="font-bold text-gray-900">
                      {tournament.joiningFee}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Slots</p>
                    <p className="font-bold text-gray-900">
                      {tournament.slots}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-semibold text-gray-700">
                      Winner Selection:
                    </span>{" "}
                    {tournament.winnerCriteria}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-600 hover:bg-gray-100 flex-1"
                    >
                      Details
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md">
            View All Tournaments
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Tournaments;

// "use client";

// const tournaments = [
//   {
//     id: 1,
//     game: "BGMI",
//     image: "https://svgshare.com/i/16D0.svg",
//     startTime: "April 20, 2025 - 6:00 PM",
//     rules: [
//       "Solo mode only",
//       "No emulators allowed",
//       "Team-up is strictly prohibited",
//     ],
//     joiningFee: "₹50",
//     winnerCriteria: "Top 3 with highest kills + survival",
//   },
//   {
//     id: 2,
//     game: "Call Of Duty",
//     image: "https://svgshare.com/i/16D0.svg",
//     startTime: "April 21, 2025 - 7:30 PM",
//     rules: [
//       "Sniper mode disabled",
//       "No external communication allowed",
//       "Use only default loadout",
//     ],
//     joiningFee: "₹100",
//     winnerCriteria: "Top scorer of the match wins",
//   },
//   {
//     id: 3,
//     game: "Free Fire Max",
//     image: "https://svgshare.com/i/16D0.svg",
//     startTime: "April 22, 2025 - 5:00 PM",
//     rules: [
//       "Classic mode only",
//       "No teaming up",
//       "No third-party apps or hacks",
//     ],
//     joiningFee: "₹30",
//     winnerCriteria: "Last man standing",
//   },
// ];

// const Tournaments = () => {
//   return (
//     <div className="min-h-screen bg-[#f0feff] py-10 px-4 flex flex-col items-center gap-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800">
//         Upcoming Tournaments
//       </h1>

//       {tournaments.map((tournament) => (
//         <div
//           key={tournament.id}
//           className="max-w-[490px] w-full rounded-lg overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)]"
//         >
//           <div className="grid grid-cols-5">
//             <div className="col-span-2 p-3 flex items-center justify-center">
//               <img
//                 src={tournament.image}
//                 alt={tournament.game}
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="col-span-3 p-3">
//               <div className="font-bold text-lg text-blue-600">
//                 {tournament.game}
//               </div>
//               <div className="mb-3 text-sm text-gray-600">
//                 <span className="font-semibold">Start Time:</span>{" "}
//                 {tournament.startTime}
//               </div>

//               <div className="bg-gray-200 rounded-lg p-2 text-sm text-gray-700 space-y-1 mb-3">
//                 <p className="font-semibold text-gray-800">Rules:</p>
//                 <ul className="list-disc list-inside text-xs">
//                   {tournament.rules.map((rule, index) => (
//                     <li key={index}>{rule}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="grid grid-cols-2 gap-2 text-sm mb-3">
//                 <div>
//                   <p className="text-gray-500">Joining Fee</p>
//                   <p className="font-bold text-gray-800">
//                     {tournament.joiningFee}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Winner</p>
//                   <p className="font-bold text-gray-800">
//                     {tournament.winnerCriteria}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-2">
//                 <button className="bg-white text-gray-500 py-2 px-4 rounded-lg border-2 hover:bg-gray-400 flex-1">
//                   Share
//                 </button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex-1">
//                   Join Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tournaments;

// "use client";

// const tournaments = [
//   {
//     id: 1,
//     game: "BGMI",
//     startTime: "April 20, 2025 - 6:00 PM",
//     rules: [
//       "Solo mode only",
//       "No emulators allowed",
//       "Team-up is strictly prohibited",
//     ],
//     joiningFee: "₹50",
//     winnerCriteria: "Top 3 with highest kills + survival",
//   },
//   {
//     id: 2,
//     game: "Call Of Duty",
//     startTime: "April 21, 2025 - 7:30 PM",
//     rules: [
//       "Sniper mode disabled",
//       "No external communication allowed",
//       "Use only default loadout",
//     ],
//     joiningFee: "₹100",
//     winnerCriteria: "Top scorer of the match wins",
//   },
//   {
//     id: 3,
//     game: "Free Fire Max",
//     startTime: "April 22, 2025 - 5:00 PM",
//     rules: [
//       "Classic mode only",
//       "No teaming up",
//       "No third-party apps or hacks",
//     ],
//     joiningFee: "₹30",
//     winnerCriteria: "Last man standing",
//   },
// ];

// const Tournaments = () => {
//   return (
//     <div className="min-h-screen bg-white py-10 px-4">
//       <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
//         Upcoming Tournaments
//       </h1>
//       <div className="space-y-6 max-w-4xl mx-auto">
//         {tournaments.map((tournament) => (
//           <div
//             key={tournament.id}
//             className="border border-gray-200 rounded-2xl shadow-md p-6 bg-gray-50"
//           >
//             <h2 className="text-2xl font-bold mb-2 text-blue-700">
//               {tournament.game}
//             </h2>
//             <p className="mb-2">
//               <strong>Start Time:</strong> {tournament.startTime}
//             </p>
//             <div className="mb-2">
//               <p className="font-semibold">Rules & Regulations:</p>
//               <ul className="list-disc list-inside text-sm text-gray-700">
//                 {tournament.rules.map((rule, i) => (
//                   <li key={i}>{rule}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className="mb-1">
//               <strong>Joining Fee:</strong> {tournament.joiningFee}
//             </p>
//             <p>
//               <strong>Winner Criteria:</strong> {tournament.winnerCriteria}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tournaments;
