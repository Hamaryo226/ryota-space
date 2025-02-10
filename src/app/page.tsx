import Link from "next/link";
import Card from "@/components/top-card";
import FCSdata from "public/Article/fcs.json";
import SDSdata from "public/Article/sds.json";
import TRSdata from "public/Article/trs.json";
import TRSNdata from "public/Article/trsn.json";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "トップ｜ryota-space",
  description: "ryota-spaceは、個人のポートフォリオサイトです。",
  appleWebApp: true,
};

export default function top() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            className="w-20 h-20 rounded-sm row-span-3"
            src="/hamaryo.jpg"
            alt="Large avatar"
            width={80}
            height={80}
          />
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              Hamaguchi-Ryota
            </p>
            <p className="text-xl text-gray-500 max-w-2xl">
              System Engineer, Programmer
            </p>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <div className="grid grid-cols-2 text-3xl font-bold mb-8">
          <h1 className="text-3xl font-bold text-start">Public Project</h1>
          <div className="justify-self-end">
            <Link href="/Project">
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Project/Frailty-Check-System">
            <Card
              //thumbnail={FCSdata.thumbnail}
              thumbnail="/fcs.png"
              title={FCSdata.title}
              date={FCSdata.date}
            />
          </Link>
          <Link href="/Project/Supplemental-Documentation-System">
            <Card
              //thumbnail={SDSdata.thumbnail}
              thumbnail="/TheLost.png"
              title={SDSdata.title}
              date={SDSdata.date}
            />
          </Link>
        </div>
      </div>

      <div className="pb-5">
        <div className="grid grid-cols-2 text-3xl font-bold mb-8">
          <h1 className="text-3xl font-bold text-start">Private Project</h1>
          <div className="justify-self-end">
            <Link href="/Private">
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Private/Taiko-Re-Strap">
            <Card
              //thumbnail={TRSdata.thumbnail}
              thumbnail="/NotFound.png"
              title={TRSdata.title}
              date={TRSdata.date}
            />
          </Link>
          <Link href="/Private/Taiko-Re-Strap-Next">
            <Card
              //thumbnail={TRSNdata.thumbnail}
              thumbnail="/NotFound.png"
              title={TRSNdata.title}
              date={TRSNdata.date}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
