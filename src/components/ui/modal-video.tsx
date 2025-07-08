"use client";

import Image from "next/image";

interface ModalVideoProps {
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  return (
    <div className="relative">
      {/* Video thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-primary/20"
        aria-label="Watch the video"
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-primary/20 before:to-gray-900">
          <Image
            className="transition-transform duration-300 group-hover:scale-105"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        {/* Play icon */}
        <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-black/50 before:backdrop-blur-sm before:duration-300 group-hover:before:scale-110">
          {/* <span className="relative flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              className="text-white"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium leading-tight text-white">
              Watch Demo
              <span className="text-gray-300"> - </span>
              3:47
            </span>
          </span> */}
        </span>
      </button>
    </div>
  );
}
