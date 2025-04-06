import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={cn("text-center", className)}>
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "5rem", opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </div>
  );
}
