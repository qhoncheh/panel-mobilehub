import { useEffect, useRef, type ReactNode } from "react";
import "./AnimatedBorder.css";

const AnimatedBorder = ({ children }: { children: ReactNode }) => {
  const refCard = useRef();
  useEffect(() => {
    const card = refCard?.current;
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  }, []);

  return (
    <div>
      <div className="animated-border" ref={refCard}>
        <div className="animated-border-inner">{children}</div>
      </div>
    </div>
  );
};

export default AnimatedBorder;
