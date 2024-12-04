import React, {useRef, useEffect, useState} from "react";

const Marquee = ({children, speed = "normal"}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      setContentWidth(contentWidth);
    }
  }, [children]);

  const speedClass = {
    slow: "marquee-slow",
    normal: "marquee-normal",
    fast: "marquee-fast",
  }[speed];

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      <div
        className={`flex ${speedClass}`}
        style={{width: `${contentWidth * 2}px`}}
      >
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
        <div aria-hidden="true" className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
