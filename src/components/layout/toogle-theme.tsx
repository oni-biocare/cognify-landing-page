"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme ?? theme;

  if (!mounted) {
    return (
      <Button size="sm" variant="ghost" className="w-full justify-start" aria-label="Toggle theme" />
    );
  }

  const isDark = currentTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <div className="flex gap-2">
          <Moon className="size-5" />
          <span className="block lg:hidden">Dark</span>
        </div>
      ) : (
        <div className="flex gap-2">
          <Sun className="size-5" />
          <span className="block lg:hidden">Light</span>
        </div>
      )}
    </Button>
  );
};
