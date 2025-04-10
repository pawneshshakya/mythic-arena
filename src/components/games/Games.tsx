// app/components/Games.tsx (or wherever you place your components)
"use client";

import React from "react";
import BattleCard from "../battlecard/BattleCard";

const Games = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-6">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video & Details */}
        <div className="lg:w-3/4 w-full space-y-4">
          {/* Video */}
          <div className="w-full h-[620px] bg-gray-800 relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4r3YSOor0g4?si=xFmy5wuDAO8JMuND"
              allowFullScreen
            ></iframe>
          </div>

          {/* Title & Views */}
          <div>
            <h1 className="text-xl font-semibold">
              Contrary to popular belief, Lorem Ipsum (2019) is not.
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
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
              startTime={new Date(Date.now() + 3600 * 1000).toISOString()} // 1 hour later
            />
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
              startTime={new Date(Date.now() + 3600 * 1000).toISOString()} // 1 hour later
            />
          </div>
        </div>

        {/* Sidebar: Up Next */}
        <div className="lg:w-1/4 w-full space-y-4">
          {/* Ad Placeholder */}
          <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm mt-6">
            Google AdSense <br /> 336 × 280
          </div>
          <div className="">
            <h2 className="font-bold text-lg">Up Next</h2>
          </div>

          {/* List of Videos */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 text-sm border-b border-gray-700 pb-4"
            >
              {/* Battle Card */}
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
                ).toISOString()} // different time for each card
              />

              {/* Optional Extra Info (below the card) */}
              <div className="flex gap-3">
                <div className="w-24 h-16 bg-gray-600 flex items-center justify-center text-white">
                  3:50
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-white font-medium leading-tight">
                    Here are many variat of passages of Lorem
                  </p>
                  <div className="text-xs text-gray-400">
                    <p>
                      Education <span className="text-green-400">✔</span>
                    </p>
                    <p>1.8M views • 11 Months ago</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Ad Placeholder */}
          <div className="bg-gray-700 h-[180px] w-full flex items-center justify-center text-gray-300 text-sm mt-6">
            Google AdSense <br /> 336 × 280
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
