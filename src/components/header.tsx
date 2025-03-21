import Link from "next/link";
import type React from "react"; // Import React
import { StarHalf } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-center p-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <StarHalf />
        <p className="font-bold">ryota-space</p>
      </Link>
    </header>
  );
}
