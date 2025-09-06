// components/shared/MarqueeCarousel.tsx
"use client";

import Image, { type StaticImageData } from "next/image";
import React from "react";

export interface CarouselItem {
  id: number | string;
  text: string;
  name: string;
  // accept either a URL (string) OR a StaticImageData import
  avatar: string | StaticImageData;
}

interface MarqueeCarouselProps {
  items: CarouselItem[];
  speed?: number; // seconds per loop (default 20)
  visibleCards?: number; // e.g. 3.5
  pauseOnHover?: boolean;
  className?: string;
}

export default function MarqueeCarousel({
  items,
  speed = 20,
  visibleCards = 3.5,
  pauseOnHover = true,
  className = "",
}: MarqueeCarouselProps) {
  // duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex animate-marquee space-x-6 ${pauseOnHover ? "pause-marquee" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between text-left flex-shrink-0"
            style={{ width: `calc(100%/${visibleCards})` }}
          >
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {item.text}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800 text-sm">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
