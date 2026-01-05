"use client";

import { Wifi, Battery } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export function PhoneMockup() {
    const redChiliImage = PlaceHolderImages.find(p => p.id === 'red-chili');

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[450px] w-[220px] shadow-xl">
        <div className="w-[120px] h-[12px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[32px] w-[2px] bg-gray-800 absolute -left-[12px] top-[72px] rounded-l-lg"></div>
        <div className="h-[32px] w-[2px] bg-gray-800 absolute -left-[12px] top-[124px] rounded-l-lg"></div>
        <div className="h-[48px] w-[2px] bg-gray-800 absolute -right-[12px] top-[100px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
             {redChiliImage && (
                <Image
                  src={redChiliImage.imageUrl}
                  alt={redChiliImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={redChiliImage.imageHint}
                />
              )}
        </div>
    </div>
  );
}
