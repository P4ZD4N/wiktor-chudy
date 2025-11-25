"use client";
import { useEffect, useRef, useState } from "react";

export default function GentlePop({
  children,
  duration = "0.5s",
  delay = "0s",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 10); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0)"
          : "scale(0.9) translateY(10px)",
        transition: `opacity ${duration} ease ${delay}, transform ${duration} ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}
