"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Twitter, Instagram, Github, Youtube } from "lucide-react";
import Link from "next/link";
import { BentoGrid } from "@/components/Bento";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const SocialButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <Link href={href} passHref target="_blank" rel="noreferrer">
    <Button
      variant="outline"
      size="icon"
      className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
    >
      <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
      <span className="sr-only">{label}</span>
    </Button>
  </Link>
);

const ProfileSection = () => (
  <div className="space-y-2">
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="bg-gradient-to-r from-zinc-300 via-zinc-200/90 to-zinc-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
        Hamaguchi Ryota
      </h1>
    </motion.div>
    <motion.div
      transition={{ duration: 0.2, delay: 0.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-xl text-zinc-400">System Engineer, Programmer</p>
    </motion.div>
  </div>
);

const ProjectsSection = () => (
  <div className="container max-w-3xl mx-auto mt-8">
    <h2 className="sm:text-3xl text-2xl font-bold text-zinc-200 text-center">
      Projects
    </h2>
    <p className="text-zinc-300"></p>
    {projects.map((item, index) => (
      <div key={index}>
        <Link href={item.link} passHref>
          <BentoGrid items={[item]} />
        </Link>
      </div>
    ))}
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-zinc-50">
        <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-600 via-zinc-500/50 to-zinc-600 opacity-75 blur-md" />
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-700">
                <Image
                  src="/hamaryo.jpg"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <ProfileSection />

          <motion.div
            transition={{ duration: 0.2, delay: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="italic max-w-[600px] text-zinc-200/80 md:text-lg">
              PC turns off the power.
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 0.2, delay: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <SocialButton
                href="https://twitter.com/_hamaryo"
                icon={Twitter}
                label="X"
              />
              <SocialButton
                href="https://www.instagram.com/hamaryo_2"
                icon={Instagram}
                label="Instagram"
              />
              <SocialButton
                href="https://github.com/HamaguchiRyota"
                icon={Github}
                label="GitHub"
              />
              <SocialButton
                href="https://www.youtube.com/@Fumolat"
                icon={Youtube}
                label="YouTube"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0.0, x: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center"
        >
          <ChevronDown className="absolute bottom-6 animate-bounce h-8 w-8 text-zinc-400" />
        </motion.div>
      </div>
      <ProjectsSection />
    </div>
  );
}
