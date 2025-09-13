"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // 現在の実際のテーマを取得（systemの場合は実際のシステムテーマを使用）
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isCurrentlyDark = currentTheme === "dark";

  const handleToggle = () => {
    if (theme === "system") {
      // システムモードの場合、現在のシステムテーマと逆にする
      setTheme(isCurrentlyDark ? "light" : "dark");
    } else {
      // 明示的なテーマの場合、逆に切り替える
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
