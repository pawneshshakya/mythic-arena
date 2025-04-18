"use client";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";

const HlsPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls({
        startLevel: 3,
      });

      // Set a sample stream URL (replace with your actual stream URL)
      hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        videoRef.current
          ?.play()
          .catch((e) => console.log("Auto play failed:", e));
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS error:", data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              // Cannot recover
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    }
  }, []);

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-orange-500 font-medium">Loading stream...</p>
              </div>
            </div>
          )}

          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 pointer-events-none z-[1]"></div>
            <video
              ref={videoRef}
              controls
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md text-sm transition-colors">
                  Share
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-md text-sm transition-colors">
                  Full Screen
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Live Tournament Stream</h2>
          <p className="text-gray-600">
            Watch professional players compete in real-time. Learn strategies
            and techniques from the best gamers in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HlsPlayer;

// "use client";
// import React, { useEffect, useRef } from "react";
// import Hls from "hls.js";

// const HlsPlayer = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (Hls.isSupported() && videoRef.current) {
//       const hls = new Hls();
//       hls.loadSource("http://192.168.233.210:8000/live/mystream/index.m3u8");
//       hls.attachMedia(videoRef.current);
//     }
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-black">
//       <video
//         ref={videoRef}
//         controls
//         autoPlay
//         className="max-w-full max-h-full"
//       ></video>
//     </div>
//   );
// };

// export default HlsPlayer;
