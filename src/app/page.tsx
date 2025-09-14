import Image from "next/image";
import { TopCard } from "@/components/top-card";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen gap-8 sm:gap-16">
      <main className="row-start-2 flex flex-col items-center gap-6 sm:gap-8 w-full px-4 sm:px-8 md:px-20">
        <TopCard />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Blog
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Project
        </a>
      </footer>
    </div>
  );
}
