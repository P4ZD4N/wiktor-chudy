"use client"
import { useEffect, useRef, useState } from "react";

export default function FadeScale({ children, duration = "0.6s", delay = "0s", threshold = 0.5 }) {
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
        transform: visible ? "scale(1)" : "scale(0.95)",
        transition: `opacity ${duration} ease ${delay}, transform ${duration} ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}