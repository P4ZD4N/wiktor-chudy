"use client"
import { useEffect, useRef, useState } from "react";

export default function SlideBlur({ children, duration = "0.8s", delay = "0s", threshold = 0.5 }) {
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
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        filter: visible ? "blur(0)" : "blur(4px)",
        transition: `opacity ${duration} ease ${delay}, transform ${duration} ease ${delay}, filter ${duration} ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}