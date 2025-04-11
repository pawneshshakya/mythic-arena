"use client";

import React from "react";
import BattleCard from "../battlecard/BattleCard";

const Live = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen py-8">
      <div className="px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 w-full space-y-4">
            <div className="w-full max-w-full bg-gray-800 relative rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4r3YSOor0g4?si=xFmy5wuDAO8JMuND"
                  allowFullScreen
                ></iframe>
              </div>
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
            {[...Array(4)].map((_, i) => (
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

export default Live;
