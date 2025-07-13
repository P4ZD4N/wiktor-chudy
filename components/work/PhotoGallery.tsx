"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              fill
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center">
          <ChevronLeft className="text-black" />
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center">
          <ChevronRight className="text-black" />
        </div>
      </button>
    </div>
  );
}
