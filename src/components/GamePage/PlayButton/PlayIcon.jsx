import React from "react";
import { IoPlayOutline } from "react-icons/io5";

function PlayIcon() {
  return (
    <svg viewBox="0 0 25 25" className="play-icon">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcff9e" />
          <stop offset="100%" stopColor="#c67700" />
        </linearGradient>
      </defs>
      <IoPlayOutline
        style={{ width: "100%", height: "100%", fontSize: "var(--fs-500)" }}
        stroke="url(#goldGradient)"
        aria-hidden="true"
      />
    </svg>
  );
}

export default PlayIcon;
