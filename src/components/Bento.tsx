"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, TrendingUp, Video, Globe } from "lucide-react";
import { motion } from "framer-motion";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  link: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: false,
    link: "/projects/analytics-dashboard",
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    status: "Updated",
    tags: ["Productivity", "Automation"],
    colSpan: 2,
    link: "/projects/task-manager",
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    tags: ["Storage", "CDN"],
    colSpan: 2,
    link: "/projects/media-library",
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <Globe className="w-4 h-4 text-sky-500" />,
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
    colSpan: 2,
    link: "/projects/global-network",
  },
];

function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className={cn(
            "group relative p-5 rounded-2xl overflow-hidden transition-all duration-300",
            "border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)]",
            "hover:-translate-y-1 will-change-transform",
            item.colSpan || "col-span-1",
            item.colSpan === 2 ? "md:col-span-2" : "",
            {
              "shadow-[0_8px_30px_rgba(0,0,0,0.12)] -translate-y-1":
                item.hasPersistentHover,
              "dark:shadow-[0_8px_30px_rgba(255,255,255,0.06)]":
                item.hasPersistentHover,
            }
          )}
        >
          {/* 背景エフェクト */}
          <div className="absolute inset-0 -z-10 opacity-[0.03]">
            <div className="absolute -inset-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px] animate-[spin_80s_linear_infinite]" />
          </div>

          {/* ハイライトエフェクト */}
          <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-700/20 via-zinc-600/20 to-zinc-700/20 z-0" />

          <div className="relative z-10 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-800/80 backdrop-blur-md shadow-inner border border-zinc-700/50 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:animate-pulse">{item.icon}</div>
              </div>
              <span
                className={cn(
                  "text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md",
                  "bg-zinc-800/80 text-zinc-300 border border-zinc-700/50",
                  "transition-all duration-300 group-hover:bg-zinc-700/80 group-hover:border-zinc-600/50"
                )}
              >
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-zinc-100 tracking-tight text-base group-hover:text-white transition-colors">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-zinc-400 group-hover:text-zinc-300 font-normal transition-colors">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-lg bg-zinc-800/70 text-zinc-400 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-700 hover:text-zinc-300 border border-zinc-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-[-4px] flex items-center">
                {item.cta || "Explore"}
                <svg
                  className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* 下部ハイライト */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}

export { BentoGrid };
