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
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded">
        {alt}
      </span>
    </div>
  );
}
