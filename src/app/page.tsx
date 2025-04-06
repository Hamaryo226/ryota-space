"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Twitter, Instagram, Github, Youtube } from "lucide-react";
import Link from "next/link";
import { BentoGrid } from "@/components/Bento";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const NavLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.15 }}
    className="flex flex-wrap justify-center gap-3 my-4"
  >
    {[
      { name: "Blog", path: "/Blog" },
      { name: "Skills", path: "/Skills" },
      { name: "About", path: "/About" },
      { name: "Privacy", path: "/Privacy" },
      { name: "Terms", path: "/Terms" },
    ].map((link, index) => (
      <Link href={link.path} key={index}>
        <span className="relative inline-block px-4 py-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 group">
          <span className="absolute inset-0 w-full h-full bg-zinc-800/30 rounded-md -z-10 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
          {link.name}
          <span className="block h-0.5 w-0 bg-gradient-to-r from-zinc-500 to-zinc-300 group-hover:w-full transition-all duration-300"></span>
        </span>
      </Link>
    ))}
  </motion.div>
);

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
      className="group relative border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
    >
      <span className="absolute inset-0 bg-gradient-to-tr from-zinc-900/0 to-zinc-500/20 opacity-0 transition-opacity group-hover:opacity-100 rounded-md" />
      <Icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
      <span className="sr-only">{label}</span>
    </Button>
  </Link>
);

const ProfileSection = () => (
  <div className="space-y-3">
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-6xl drop-shadow-sm">
        Hamaguchi Ryota
      </h1>
    </motion.div>
    <motion.div
      transition={{ duration: 0.3, delay: 0.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-xl text-zinc-400 tracking-wide">
        <span className="text-zinc-300">System Engineer</span> &{" "}
        <span className="text-zinc-300">Programmer</span>
      </p>
    </motion.div>
  </div>
);

const ProjectsSection = () => (
  <div className="container max-w-4xl mx-auto mt-16 px-4 pb-24 bg-zinc-950">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <h2 className="sm:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 text-center mb-3">
        Projects
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-zinc-600 to-zinc-800 mx-auto rounded-full"></div>
    </motion.div>

    <div className="space-y-8">
      {projects.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link href={item.link} passHref>
            <BentoGrid items={[item]} />
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-zinc-50">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zinc-700/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-zinc-600/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-10 px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 opacity-75 blur-md" />
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-600/40 via-zinc-500/30 to-zinc-600/40 opacity-50 animate-pulse"
                style={{ animationDuration: "3s" }}
              />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-700/80 shadow-lg">
                <Image
                  src="/hamaryo.jpg"
                  alt="Profile"
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <ProfileSection />

          <motion.div
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="italic max-w-[600px] text-zinc-400/90 md:text-lg font-light leading-relaxed">
              &ldquo;PC turns off the power.&rdquo;
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 0.3, delay: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap justify-center gap-5">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center"
        >
          <ChevronDown className="absolute bottom-8 animate-bounce h-8 w-8 text-zinc-400 cursor-pointer hover:text-zinc-200 transition-colors" />
        </motion.div>
      </div>
      <ProjectsSection />
      <NavLinks />
    </div>
  );
}
