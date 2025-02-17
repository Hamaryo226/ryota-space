import Link from "next/link";
import Card from "@/components/top-card";
import FCSdata from "public/Article/fcs.json";
import SDSdata from "public/Article/sds.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パブリックプロジェクト｜ryota-space",
  description: "パブリックプロジェクトの一覧ページ",
  appleWebApp: true,
};

export default function pj() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pb-5">
        <div className="text-3xl font-bold mb-8">
          <h1 className="text-3xl font-bold text-start">Public Project</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Project/Frailty-Check-System">
            <Card
              //thumbnail={TRSdata.thumbnail}
              thumbnail="/fcs.webp"
              title={FCSdata.title}
              date={FCSdata.date}
              tags={["Python", "django", "javascript"]}
            />
          </Link>
          <Link href="/Project/Supplemental-Documentation-System">
            <Card
              //thumbnail={TRSNdata.thumbnail}
              thumbnail="/TheLost.webp"
              title={SDSdata.title}
              date={SDSdata.date}
              tags={["PHP", "Python"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
