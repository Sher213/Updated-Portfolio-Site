import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageExpand = ({ imgId, scrollOffset }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const updatePositionAndSize = () => {
    const img = document.getElementById(imgId);
    if (img) {
      const rect = img.getBoundingClientRect();
      setOriginalPosition({
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      });
      setDimensions({ width: rect.width, height: rect.height });
    }
  };

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
      updatePositionAndSize();
      window.addEventListener("resize", updatePositionAndSize);
      window.addEventListener("scroll", updatePositionAndSize);
    };

    const handleDOMContentLoaded = () => {
      handlePageLoad();
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    }

    return () => {
      window.removeEventListener("resize", updatePositionAndSize);
      window.removeEventListener("scroll", updatePositionAndSize);
    };
  }, [imgId]);

  return (
    <>
       <div
        style={{
          position: "absolute",
          top: originalPosition.y - scrollOffset,
          left: originalPosition.x,
          width: dimensions.width,
          height: dimensions.height,
          zIndex: 999,
          pointerEvents: "auto",
          background: "transparent",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      {/* Expandable Image */}
      <motion.div
        style={{
          position: "absolute", // Position fixed to viewport
          top: originalPosition.y,
          left: originalPosition.x,
          width: dimensions.width,
          height: dimensions.height,
          zIndex: 1000,
          pointerEvents: "none", // Disable pointer events while animating
        }}
        initial={{
          top: originalPosition.y,
          left: originalPosition.x,
          width: dimensions.width,
          height: dimensions.height,
        }}
        animate={
          isHovered
            ? {
                width: dimensions.width * 5,
                height: dimensions.height * 5,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                opacity: 1,
                
              }
            : {
                width: dimensions.width,
                height: dimensions.height,
                top: originalPosition.y,
                left: originalPosition.x,
                x: 0,
                y: 0,
                opacity: 0
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={document.getElementById(imgId)?.src}
          alt={document.getElementById(imgId)?.alt}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </>
  );
};

export default ImageExpand;
