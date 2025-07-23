import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface ProjectFeaturesProps {
  projectTitle: string;
  features: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectFeatures({ projectTitle, features, isOpen, onClose }: ProjectFeaturesProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-xl z-50 flex items-center justify-center custom-scrollbar"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-4 relative w-full h-full max-w-5xl max-h-[90vh] overflow-y-auto outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white text-4xl font-bold hover:text-orange-500 cursor-pointer transition-all duration-200"
              onClick={onClose}
            >
              &times;
            </button>

            <div className="text-center bg-orange-500 px-2 py-1 rounded mt-4 text-white text-2xl text-bold">Features of {projectTitle}</div>

            <ul className="flex flex-col gap-2 text-lg mt-4">
              {features.map((feat) => (
                <li key={feat} className="rounded text-white">
                  🟠 {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            display: block;
            width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f97316
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 transparent;
        }
      `}</style>
    </>
  );
}
