"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn(
        "gap-2 hover:bg-muted focus:ring-2 focus:ring-muted px-3",
        className
      )}
      onClick={copy}
      {...props}
    >
      {isCopied ? (
        <>
          <Check className="h-4 w-4" />
          <span className="sr-only">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy</span>
        </>
      )}
    </Button>
  );
}
