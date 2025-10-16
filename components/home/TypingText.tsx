"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "I am a Fullstack Software Engineer.",
        2000,
        "I deliver business value through software.",
        2000,
        "I build web applications.",
        2000,
        "I am passionate about best coding practices.",
        2000,
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={40}
      repeat={Infinity}
      className="text-white"
    />
  );
}
