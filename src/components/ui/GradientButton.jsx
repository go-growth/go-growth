import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function GradientButton({ children, onClick, className = "" }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const element = buttonRef.current;
    if (!element) return;

    let angle = 0;
    let animationFrameId;

    const rotate = () => {
      angle = (angle + 4) % 360;
      element.style.setProperty("--gradient-angle", `${angle}deg`);
      animationFrameId = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`text-xs sm:text-base px-4 sm:px-17 py-2 sm:py-3 rounded-full my-3 sm:my-[36px] bg-[#e0a695] text-black font-semibold border-gradient ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};