import Image from "next/image";
import { ModeToggle } from "@/components/dark-toggle";

export default function ProjectPage() {
  return (
    <div className="">
      <div className="p-4">
        <div className="p-5">
          <div className="w-full max-w-4xl justify-center mx-auto">
            <Image
              className="rounded-2xl w-full"
              src="/NotFound.png"
              alt="Project Thumbnail"
              width={1920}
              height={1080}
              priority
            />
            <ModeToggle />
            <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
                テスト
              </h1>

              <div className="flex flex-row mt-1 gap-1 leading-7 text-slate-400/50">
                <Image
                  className="dark:invert text-slate-400/50"
                  src="/calendar-days.svg"
                  alt=""
                  priority
                  width={20}
                  height={20}
                />
                <p>2000年00月00日</p>
              </div>
            </article>

            <article>
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  参考リンク
                </h3>
              </div>
              <ul className="leading-8"></ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
