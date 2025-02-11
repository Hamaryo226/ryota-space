import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithAltProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ImageWithAlt({ src, alt, className }: ImageWithAltProps) {
  return (
    <div className={cn("relative w-full aspect-video", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover rounded-2xl w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <span className="absolute sm:bottom-3 sm:left-3 bottom-1.5 left-1.5 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded rounded-tr-md max-w-[90%] break-words">
        {alt}
      </span>
    </div>
  );
}
