import Link from "next/link";
import Card from "@/components/top-card";
import FCSdata from "public/Article/fcs.json";
import SDSdata from "public/Article/sds.json";

export default function top() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-start mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <Link href="/Project/Frailty-Check-System">
          <Card
            //thumbnail={FCSdata.thumbnail}
            thumbnail="/fcs.png"
            title={FCSdata.title}
            description={FCSdata.description}
            date={FCSdata.date}
          />
        </Link>
        <Link href="/Project/Supplemental-Documentation-System">
          <Card
            //thumbnail={SDSdata.thumbnail}
            thumbnail="/TheLost.png"
            title={SDSdata.title}
            description={SDSdata.description}
            date={SDSdata.date}
          />
        </Link>
      </div>
    </div>
  );
}
