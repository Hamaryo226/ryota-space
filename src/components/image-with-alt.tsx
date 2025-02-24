import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithAltProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ImageWithAlt({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithAltProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
        className="object-cover rounded-2xl w-full shadow-lg dark:shadow-zinc-600"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
      <span className="absolute sm:bottom-3 sm:left-3 bottom-1.5 left-1.5 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded rounded-tr-md max-w-[90%] break-words">
        {alt}
      </span>
    </div>
  );
}
