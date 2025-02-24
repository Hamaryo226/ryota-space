import Link from "next/link";
import Card from "@/components/top-card";
import TRSdata from "public/Article/trs.json";
import TRSNdata from "public/Article/trsn.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Project｜ryota-space",
  description: "プライベートプロジェクトの一覧ページ",
  appleWebApp: true,
};

export default function pj() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pb-5">
        <div className="text-3xl font-bold mb-8">
          <h1 className="text-3xl font-bold text-start">Private Project</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Private/Taiko-Re-Strap">
            <Card
              //thumbnail={TRSdata.thumbnail}
              thumbnail="/Taiko-Re-Strap.webp"
              title={TRSdata.title}
              date={TRSdata.date}
              tags={["C#", ".NET Framework"]}
            />
          </Link>
          <Link href="/Private/Taiko-Re-Strap-Next">
            <Card
              //thumbnail={TRSNdata.thumbnail}
              thumbnail="/Taiko-Re-Strap-Next.webp"
              title={TRSNdata.title}
              date={TRSNdata.date}
              tags={["C#", "DxLib"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
