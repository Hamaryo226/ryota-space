import React from "react";
import { Speech, ScanSearch, Joystick } from "lucide-react";
import { BentoItem } from "@/components/Bento";

export const projects: BentoItem[] = [
  {
    title: "Frailty-Check-System",
    meta: "From classroom management to measurement",
    description:
      "Developed a web system using Django and speech recognition to support frailty checks for the elderly.",
    icon: <Speech className="w-4 h-4 text-blue-500" />,
    status: "Closed",
    tags: ["Python", "Django", "JavaScript"],
    colSpan: 2,
    link: "/Project/Frailty-Check-System",
  },
  {
    title: "Supplemental-Documentation-System",
    meta: "Video to Documentation",
    description:
      "Developed a system to create note-taking materials by extracting audio and slides from lecture videos to support hearing-impaired individuals.",
    icon: <ScanSearch className="w-4 h-4 text-emerald-500" />,
    status: "Closed",
    tags: ["PHP", "Python"],
    colSpan: 2,
    link: "/Project/Supplemental-Documentation-System",
  },
  {
    title: "Taiko-Re-Strap-Next",
    meta: "FullHD image quality support",
    description: "A .tja file player.",
    icon: <Joystick className="w-4 h-4 text-purple-500" />,
    tags: ["C Sharp", "DxLib"],
    status: "In Progress",
    colSpan: 2,
    link: "/Private/Taiko-Re-Strap-Next",
  },
  {
    title: "Taiko-Re-Strap",
    meta: "TJAPlayer3 Derivative Software",
    description: "A .tja file player.(feat. DTXMania & TJAPlayer2 forPC)",
    icon: <Joystick className="w-4 h-4 text-sky-500" />,
    status: "Closed",
    tags: ["C Sharp", ".NET Framework"],
    colSpan: 2,
    link: "/Private/Taiko-Re-Strap",
  },
];
