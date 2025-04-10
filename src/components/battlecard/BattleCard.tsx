"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Team {
  name: string;
  logoUrl: string;
}

interface BattleCardProps {
  team1: Team;
  team2: Team;
  startTime: string; // ISO format string
}

const BattleCard: React.FC<BattleCardProps> = ({ team1, team2, startTime }) => {
  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    const updateRemainingTime = () => {
      const start = new Date(startTime).getTime();
      const now = new Date().getTime();
      const diff = start - now;

      if (diff <= 0) {
        setRemainingTime("Battle Started");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      {/* Team 1 */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={team1.logoUrl}
          alt={team1.name}
          width={200}
          height={200}
          className="rounded-full object-contain"
          unoptimized
        />
        <p className="mt-2 font-semibold text-lg">{team1.name}</p>
      </div>

      {/* V/S and Timer */}
      <div className="flex flex-col items-center text-center">
        <p className="text-2xl font-bold text-gray-700">V/S</p>
        <p className="text-sm text-gray-500 mt-1">Starts in</p>
        <p className="text-sm font-medium text-blue-600">{remainingTime}</p>
      </div>

      {/* Team 2 */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={team2.logoUrl}
          alt={team2.name}
          width={200}
          height={200}
          className="rounded-full object-contain"
          unoptimized
        />
        <p className="mt-2 font-semibold text-lg">{team2.name}</p>
      </div>
    </div>
  );
};

export default BattleCard;

// import Image from "next/image";

// const BattleCard = () => {
//   return (
//     <div className="bg-[#0B0F1C] text-white p-4 rounded-lg w-full max-w-4xl mx-auto shadow-xl border-t-4 border-b-4 border-cyan-400">
//       <div className="flex items-center justify-between px-6 py-4">
//         {/* Left Side - Team 1 */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/fauget-logo.png"
//             alt="Fauget Team Logo"
//             width={60}
//             height={60}
//           />
//           <h2 className="text-lg font-bold mt-2 text-center">
//             FAUGET
//             <br />
//             TEAM
//           </h2>
//         </div>

//         {/* VS Box */}
//         <div className="relative bg-cyan-400 text-black px-6 py-2 rounded-md">
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-cyan-400"></div>
//           <div className="text-3xl font-extrabold">VS</div>
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-cyan-400"></div>
//         </div>

//         {/* Right Side - Team 2 */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/borcelle-logo.png"
//             alt="Borcelle Team Logo"
//             width={60}
//             height={60}
//           />
//           <h2 className="text-lg font-bold mt-2 text-center">
//             BORCELLE
//             <br />
//             TEAM
//           </h2>
//         </div>
//       </div>

//       {/* Score Section */}
//       <div className="flex justify-between items-center mt-4 bg-cyan-400 text-black px-6 py-2 font-bold text-xl rounded-md">
//         <div>01</div>
//         <div>02</div>
//       </div>

//       {/* Bottom Section */}
//       <div className="text-center text-sm mt-3 tracking-widest text-gray-400">
//         WWW.REALLYGREATSITE.COM
//       </div>
//     </div>
//   );
// };

// export default BattleCard;
