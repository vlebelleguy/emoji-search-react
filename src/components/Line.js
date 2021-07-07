// PACKAGES IMPORT //
import React, { useState } from "react";

const Line = ({ emoji }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div className="line-container">
      <div
        onMouseEnter={() => setHoverLine(true)}
        onMouseLeave={() => setHoverLine(false)}
        onClick={() => {
          navigator.clipboard.writeText(emoji.symbol);
        }}
        className="line"
      >
        <span>
          {emoji.symbol} {emoji.title}
        </span>
        {hoverLine && <span className="copy-span">Click to copy!</span>}
      </div>
    </div>
  );
};

export default Line;
