"use client";

import { useEffect } from "react";

const AdSenseBanner = ({ width, height, adSlot, className }) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  const style = {
    display: "block",
    ...(width && { width }),
    ...(height && { height }),
  };

  // You can replace this with your actual AdSense publisher ID
  const adClient = "ca-pub-3940256099942544"; // Replace with your actual publisher ID when ready

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot || "6300978111"} // Default slot or custom slot
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseBanner;

// "use client";

// import { useEffect } from "react";

// const AdSenseBanner = () => {
//   useEffect(() => {
//     try {
//       if (typeof window !== "undefined") {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       }
//     } catch (e) {
//       console.error("Adsense error", e);
//     }
//   }, []);

//   return (
//     <ins
//       className="adsbygoogle"
//       style={{ display: "block" }}
//       data-ad-client="ca-pub-3940256099942544"
//       data-ad-slot="6300978111"
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     ></ins>
//   );
// };

// export default AdSenseBanner;

// "use client";
// import { useEffect } from "react";

// const AdsenseBanner = () => {
//   useEffect(() => {
//     try {
//       if (typeof window !== "undefined") {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       }
//     } catch (e) {
//       console.error("Adsense error:", e);
//     }
//   }, []);

//   return (
//     <ins
//       className="adsbygoogle"
//       style={{ display: "block", width: "100%", height: "90px" }}
//       data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Replace with your AdSense ID
//       data-ad-slot="1234567890" // Replace with your Ad Unit ID
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     ></ins>
//   );
// };

// export default AdsenseBanner;
