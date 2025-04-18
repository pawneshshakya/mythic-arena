"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { topTenMovies } from "@/data/mockData";

interface TopTenRowProps {
  title: string;
  movies: {
    id: string;
    title: string;
    imageUrl: string;
    rank: number;
  }[];
}

const TopTenRow = ({ title, movies }: TopTenRowProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  return (
    <div className="netflix-container mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>

      <div className="relative group">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 p-1 md:p-2 hidden group-hover:flex items-center justify-center h-full"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
          {topTenMovies.map((movie) => (
            <div
              key={movie.id}
              className="netflix-card flex-none w-[240px] md:w-[280px] relative pl-10 md:pl-12"
            >
              <div className="absolute left-0 top-0 bottom-0 flex items-center">
                <span className="text-[#8c8c8c] font-bold text-8xl">
                  {movie.rank}
                </span>
              </div>
              <div className="relative aspect-[9/10]">
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-md"
                />
                <div className="recently-added-badge">Recently added</div>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 p-1 md:p-2 hidden group-hover:flex items-center justify-center h-full"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopTenRow;
