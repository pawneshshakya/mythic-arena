"use client";

import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7883719162318197"
      data-ad-slot="2571633490"
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
    ></ins>
  );
};

export default AdBanner;
