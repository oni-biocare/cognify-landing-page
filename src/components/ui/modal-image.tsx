"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ModalImageProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function ModalImage({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: ModalImageProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  // Animation effect
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen]);
  
  if (!isOpen && !isAnimating) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative max-w-4xl w-full max-h-[90vh] transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        
        <div className="bg-background rounded-lg shadow-xl overflow-hidden">
          <div className="relative aspect-auto max-h-[80vh]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 