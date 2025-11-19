"use client";
import { useEffect, useRef, useState } from "react";

export default function GentlePop({
  children,
  duration = "0.6s",
  delay = "0s",
  threshold = 0.5,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0)"
          : "scale(0.85) translateY(20px)",
        transition: `opacity ${duration} cubic-bezier(0.34, 1.56, 0.64, 1) ${delay},
                     transform ${duration} cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}`,
      }}
    >
      {children}
    </div>
  );
}
