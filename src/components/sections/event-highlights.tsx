"use client";

import { HyperText } from "@/components/ui/hyper-text";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const eventPhotos = [
  { id: 1, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/v1762577510/_MG_0436_lmtywh.jpg", alt: "BruteForce Event Photo 1" },
  { id: 2, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577504/IMG_8292_zpro1c.heic", alt: "Event Photo 2" },
  { id: 3, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577503/IMG_8279_mowaef.heic", alt: "Event Photo 3" },
  { id: 4, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577501/IMG_8248_lsal7v.heic", alt: "Event Photo 4" },
  { id: 5, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577499/IMG_8265_mjhhiv.heic", alt: "Event Photo 5" },
  { id: 6, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577494/IMG_8254_r3je5u.heic", alt: "Event Photo 6" },
  { id: 7, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/v1762577492/GMC28102025_133932_xfuyqh.jpg", alt: "Event Photo 7" },
  { id: 8, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/v1762577491/_MG_0517_mzvdju.jpg", alt: "Event Photo 8" },
  { id: 9, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/v1762577490/_MG_0448_dy0een.jpg", alt: "Event Photo 9" },
  { id: 10, src: "https://res.cloudinary.com/dzgh8f0lj/image/upload/f_jpg,q_auto/v1762577480/IMG_9825_m9zwny.heic", alt: "Event Photo 10" },

];

const PhotoMarquee = ({
  photos,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  onPhotoClick,
}: {
  photos: typeof eventPhotos;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onPhotoClick?: (photo: typeof eventPhotos[0]) => void;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  // Handle click delegation for all photos (original and cloned)
  const handleMarqueeClick = (e: React.MouseEvent) => {
    const clickableElement = (e.target as HTMLElement).closest('[data-photo-clickable]');
    if (clickableElement && onPhotoClick) {
      const photoId = clickableElement.getAttribute('data-photo-id');
      const photo = photos.find(p => p.id.toString() === photoId);
      if (photo) {
        e.preventDefault();
        e.stopPropagation();
        onPhotoClick(photo);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      onClick={handleMarqueeClick}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {photos.map((photo) => (
          <li
            className="relative w-[500px] h-[350px] shrink-0 rounded-xl overflow-hidden"
            key={photo.id}
          >
            {photo.src.startsWith('http') ? (
              <div 
                className="w-full h-full cursor-pointer group relative z-10"
                data-photo-clickable="true"
                data-photo-id={photo.id}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  unoptimized
                  draggable={false}
                />
                {/* Click indicator overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-cyan-400/20 to-emerald-400/20 border border-foreground/10 flex items-center justify-center hover:border-foreground/20 transition-all duration-300">
                <div className="text-foreground/40 text-sm">
                  Photo {photo.id}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Photo Modal Component
const PhotoModal = ({ 
  photo, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  photo: typeof eventPhotos[0] | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                unoptimized
                priority
              />
            </div>

            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function EventHighlightsSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof eventPhotos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = (photo: typeof eventPhotos[0]) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = eventPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % eventPhotos.length;
    setSelectedPhoto(eventPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = eventPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + eventPhotos.length) % eventPhotos.length;
    setSelectedPhoto(eventPhotos[prevIndex]);
  };

  return (
    <>
      <section className="relative w-full px-6 py-24 flex items-center justify-center overflow-hidden">
        <motion.div className="mx-auto w-full max-w-7xl text-foreground/90">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl sm:text-4xl md:text-4xl font-semibold">
              Event {"  "}
              <HyperText
                as="span"
                startOnView 
                hoverScope="parent"
                className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl"
                aurora
              >
                Highlights
              </HyperText>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-foreground/80">
              Relive the excitement and innovation from BruteForce
            </p>
          </div>

          {/* Photo Marquee */}
          <div className="relative">
            <PhotoMarquee
              photos={eventPhotos}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-8"
              onPhotoClick={handlePhotoClick}
            />
          </div>
        </motion.div>
      </section>

      {/* Photo Modal */}
      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </>
  );
}