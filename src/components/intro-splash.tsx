"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setLeaving(true), 2000);
    const removeTimer = window.setTimeout(() => setVisible(false), 2800);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={leaving ? "intro-splash intro-splash-leaving" : "intro-splash"} aria-hidden="true">
      <Image
        src="/images/girisacertech.png"
        alt=""
        width={1672}
        height={941}
        priority
        className="intro-splash-image intro-splash-desktop"
      />
      <Image
        src="/images/girisacertech-mobile.png"
        alt=""
        width={1080}
        height={1920}
        priority
        className="intro-splash-image intro-splash-mobile"
      />
    </div>
  );
}
