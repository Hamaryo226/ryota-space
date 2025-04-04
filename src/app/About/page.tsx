import type { Metadata } from "next";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ImageWithAlt } from "@/components/image-with-alt";

export const metadata: Metadata = {
  title: "About｜ryota-space",
  description: "本サイトの技術要件",
  appleWebApp: true,
};

export default function about() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pb-5">
        <ImageWithAlt
          className=""
          src="/base.webp"
          alt={`© ${new Date().getFullYear()} Ryota Hamaguchi. All rights reserved.`}
          width={3840}
          height={1523}
        />
        <h1 className="text-3xl font-bold text-start mt-7 mb-8 pb-3 border-b-2 border-zinc-700/10 dark:border-zinc-700">
          本サイトについて
        </h1>
        <p className="text-lg mb-8">
          本サイトは、個人のポートフォリオサイトです。
          <br />
        </p>
        <div className="flex items-center justify-center space-x-4 mb-8 p-8">
          <BackendIcon />
        </div>

        <p className="text-lg">
          このサイトは、Next.jsとshadcnを使用して構築され、Vercelでホスティングされています。
        </p>
      </div>
    </div>
  );
}

function BackendIcon() {
  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Link
            href="https://nextjs.org/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <TooltipTrigger>
              <Image
                src="/nextjs-icon-light-background.svg"
                alt="Large avatar"
                width={180}
                height={180}
                className="dark:hidden"
              />
              <Image
                src="/nextjs-icon-dark-background.svg"
                alt="Large avatar"
                width={180}
                height={180}
                className="dark:block hidden"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next.js</p>
            </TooltipContent>
          </Link>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Link
            href="https://ui.shadcn.com/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <TooltipTrigger>
              <Image
                src="/shadcn-ui-seeklogo.svg"
                alt="Large avatar"
                width={180}
                height={180}
                className="dark:invert"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>shadcn</p>
            </TooltipContent>
          </Link>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Link
            href="https://vercel.com/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <TooltipTrigger>
              <Image
                src="/vercel-icon-dark.svg"
                alt="Large avatar"
                width={190}
                height={190}
                className="dark:invert"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Vercel</p>
            </TooltipContent>
          </Link>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
