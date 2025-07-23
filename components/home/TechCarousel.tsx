"use client";

import Image from "next/image";
import allTechnologies from "@/lib/all-technologies";

const TechCarousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap my-8">
      <div className="inline-flex animate-scroll space-x-8">
        {allTechnologies.concat(allTechnologies).map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-24">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechCarousel;
