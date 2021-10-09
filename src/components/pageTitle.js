import React, { useRef, useEffect } from "react";
import { sr, srConfig } from "../utils/sr";

export const PageTitle = ({ title }) => {
  const revealTitle = useRef(null);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig(50));
  }, []);

  return (
    <div ref={revealTitle} className="text-5xl text-text-primary">
      {title}
    </div>
  );
};
