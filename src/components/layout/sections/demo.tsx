"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ModalImage from '@/components/ui/modal-image';

export function DemoSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');
  
  const demoImages = [
    {
      src: "/demo-1.png",
      alt: "Dashboard Analytics Overview",
      title: "Comprehensive Analytics Dashboard",
      description: "Track keywords, search volume, and performance metrics all in one place."
    },
    {
      src: "/demo-2.png",
      alt: "Keyword Segmentation Framework",
      title: "Advanced Keyword Segmentation",
      description: "Prioritize keywords by search intent, volume, and conversion potential."
    },
    {
      src: "/demo-3.png",
      alt: "Product Analysis Report",
      title: "Detailed Market Analysis",
      description: "Generate insights on target audience segments and use cases for your products."
    }
  ];

  const openModal = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="demo" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Most training bots fail for one reason: the knowledge base isn’t governed. <br/> Here’s how we fix it.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
            Explore our powerful AI-driven analytics platform that helps e-commerce businesses 
            identify trends, optimize campaigns, and outperform competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div 
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border shadow-lg cursor-pointer group"
                onClick={() => openModal(image.src, image.alt)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-xl">{image.title}</h3>
              <p className="text-muted-foreground text-center">
                {image.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Request a Demo
          </a>
        </div>
      </div>
      
      {selectedImage && (
        <ModalImage
          isOpen={!!selectedImage}
          imageSrc={selectedImage}
          imageAlt={selectedAlt}
          onClose={closeModal}
        />
      )}
    </section>
  );
} 