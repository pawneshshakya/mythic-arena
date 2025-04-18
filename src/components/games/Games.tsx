"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Info,
  Plus,
  ThumbsUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  gameCategories,
  recommendedGames,
  featuredGame,
} from "@/data/mockData";

// Game card with hover preview
const GameCard = ({ game, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const hoverDelay = 800;
  const hoverTimer = useRef(null);

  // Start video after a delay when hovering
  useEffect(() => {
    if (isHovered && game.hoverVideoUrl) {
      hoverTimer.current = setTimeout(() => {
        setShowVideo(true);
      }, hoverDelay);
    } else {
      clearTimeout(hoverTimer.current);
      setShowVideo(false);
    }

    return () => {
      clearTimeout(hoverTimer.current);
    };
  }, [isHovered, game.hoverVideoUrl]);

  return (
    <motion.div
      className="game-card flex-shrink-0 relative rounded-md overflow-hidden transition-all duration-200 cursor-pointer"
      style={{ width: "17rem" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: index * 0.05,
          duration: 0.3,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <div
        className={`relative w-full ${
          isHovered ? "rounded-t-md" : "rounded-md"
        }`}
        style={{ aspectRatio: "16/9" }}
      >
        {/* Thumbnail image */}
        <Image
          src={game.thumbnailUrl}
          alt={game.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            showVideo ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video preview (only load when hovered) */}
        {isHovered && game.hoverVideoUrl && (
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <iframe
              src={showVideo ? game.hoverVideoUrl : ""}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={game.title}
            ></iframe>
          </div>
        )}

        {/* Game badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {game.isNew && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {game.isHot && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              HOT
            </span>
          )}
          {game.isPremium && (
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              PREMIUM
            </span>
          )}
        </div>

        {/* Rank badge for top 10 */}
        {game.rank && (
          <div className="absolute -right-10 -bottom-10 w-32 h-32 flex items-center justify-center">
            <span className="text-[8rem] font-bold text-white opacity-50 leading-none">
              {game.rank}
            </span>
          </div>
        )}
      </div>

      {/* Game info on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="bg-gray-900 text-white p-4 rounded-b-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex gap-2 mb-3">
              <button className="bg-white text-black rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-gray-300">
                <Play size={16} />
              </button>
              <button className="border border-gray-400 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:border-white">
                <Plus size={16} />
              </button>
              <button className="border border-gray-400 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:border-white">
                <ThumbsUp size={16} />
              </button>
              <button className="border border-gray-400 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center ml-auto hover:border-white">
                <Info size={16} />
              </button>
            </div>

            <h3 className="font-bold text-sm mb-1 truncate">{game.title}</h3>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-500 font-bold text-xs">
                {game.releaseYear}
              </span>
              <span className="border text-xs px-1 border-gray-500">
                {game.rating}
              </span>
              <span className="text-xs">{game.playerCount}</span>
            </div>

            <div className="flex flex-wrap gap-1 mb-2">
              {game.genre.map((g, i) => (
                <span
                  key={`${game.id}-genre-${i}`}
                  className="text-xs text-gray-400"
                >
                  {i > 0 ? " • " : ""}
                  {g}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-300 line-clamp-2">
              {game.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Scrollable row of games
const GameRow = ({ title, games }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!rowRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const currentRowRef = rowRef.current;
    if (currentRowRef) {
      currentRowRef.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (currentRowRef) {
        currentRowRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (!rowRef.current) return;

    const container = rowRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 px-4 md:px-12">
        {title}
      </h2>

      <div className="relative group">
        {showLeftArrow && (
          <button
            className="absolute left-1 md:left-2 top-0 bottom-0 z-10 bg-black/60 p-1 md:p-2 opacity-0 group-hover:opacity-100 flex items-center justify-center h-full transition-opacity"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div
          ref={rowRef}
          className="flex items-center gap-2 overflow-x-auto scrollbar-hide pl-4 md:pl-12 pr-4 md:pr-12 py-4"
        >
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-1 md:right-2 top-0 bottom-0 z-10 bg-black/60 p-1 md:p-2 opacity-0 group-hover:opacity-100 flex items-center justify-center h-full transition-opacity"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

// Hero Banner with featured game
const HeroBanner = ({ game }) => {
  return (
    <div className="relative h-[80vh] w-full mb-6">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={game.thumbnailUrl}
          alt={game.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-12 max-w-screen-xl mx-auto">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Game Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {game.title}
          </h1>

          {/* Player Count Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
              HOT
            </div>
            <span className="text-white text-lg font-bold">
              {game.playCount?.toLocaleString()} Players
            </span>
          </div>

          {/* Description */}
          <p className="text-white text-lg mb-6 max-w-2xl drop-shadow-md">
            {game.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded flex items-center">
              <Play className="h-5 w-5 mr-2" />
              Play
            </button>
            <button className="bg-gray-800/80 hover:bg-gray-700/80 text-white font-bold py-3 px-8 rounded flex items-center">
              <Info className="h-5 w-5 mr-2" />
              More Info
            </button>
          </div>
        </div>

        {/* Age Rating */}
        <div className="absolute bottom-20 right-12 hidden md:flex items-center gap-2">
          <div className="border border-white/40 bg-black/30 px-2 py-1 text-white text-sm">
            {game.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Games Component
const Games = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeroBanner game={featuredGame} />

      <GameRow title="Games Recommended For You" games={recommendedGames} />

      {gameCategories.map((category) => (
        <GameRow
          key={category.id}
          title={category.title}
          games={category.games}
        />
      ))}
    </div>
  );
};

export default Games;

// "use client";
// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Games = () => {
//   const section1Ref = useRef(null);

//   const scroll = (ref, direction) => {
//     const container = ref.current;
//     const scrollAmount = container.offsetWidth;
//     if (direction === "next") {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-black text-white p-6 min-h-screen">
//       {/* <h1 className="text-4xl font-bold mb-8 text-center">NETFLIX</h1> */}

//       <div className="flex flex-col gap-4">
//         <h2 className="text-white text-2xl font-bold">Top Played Games</h2>
//         <section className="relative group mb-6">
//           <button
//             className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 p-1 md:p-2 hidden group-hover:flex items-center justify-center h-full"
//             onClick={() => scroll(section1Ref, "prev")}
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>
//           <div
//             ref={section1Ref}
//             className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
//           >
//             {[
//               "https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg",
//               "https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg",
//               "https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg",
//               "https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg",
//             ].map((src, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0"
//                 style={{ width: "17.3rem" }}
//               >
//                 <img
//                   src={src}
//                   alt="Game"
//                   className="rounded-lg w-full h-auto"
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 p-1 md:p-2 hidden group-hover:flex items-center justify-center h-full"
//             onClick={() => scroll(section1Ref, "next")}
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </section>

//         {/* Section 2
//         <h2 className="text-white text-2xl font-bold">
//           Top 10 TV Shows in India Today
//         </h2>
//         <section className="relative mb-6">
//           <button
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-3 text-5xl text-white hover:text-red-600"
//             onClick={() => scroll(section2Ref, "prev")}
//           >
//             ‹
//           </button>
//           <div
//             ref={section2Ref}
//             className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
//           >
//             {[...Array(20)].map((_, i) => (
//               <div key={i} className="flex-shrink-0 w-64">
//                 <img
//                   src="https://cdn.pixabay.com/photo/2023/07/24/08/28/ai-generated-8146559_1280.png"
//                   alt="Game preview"
//                   className="rounded-lg w-full h-auto"
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-3 text-5xl text-white hover:text-red-600"
//             onClick={() => scroll(section2Ref, "next")}
//           >
//             ›
//           </button>
//         </section> */}
//       </div>
//     </div>
//   );
// };

// export default Games;
