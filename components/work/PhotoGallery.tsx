"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';
import { motion } from "framer-motion";

interface PhotoGalleryProps {
  images: string[];
}
export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
              className="w-full h-full object-cover cursor-pointer"
              fill
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
          >
            <Image
              src={images[currentIndex]} 
              alt={`Fullscreen Image ${currentIndex + 1}`}
              className="object-contain"
              fill
              priority
            />

            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-orange-500 cursor-pointer transition-all duration-200"
              onClick={closeModal}
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-orange-500 cursor-pointer rounded-full p-2 transition-all duration-200"
            >
              <ChevronLeft className="text-black" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-orange-500 cursor-pointer rounded-full p-2 transition-all duration-200"
            >
              <ChevronRight className="text-black" />
            </button>
          </motion.div>
        </div>
      )}

      {!isOpen && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center transition-all duration-200">
              <ChevronLeft className="text-black" />
            </div>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center transition-all duration-200">
              <ChevronRight className="text-black" />
            </div>
          </button>
        </>
      )}
    </div>
  );
}
