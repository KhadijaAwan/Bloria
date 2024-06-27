"use client"
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button variant="outline" size="sm" onClick={toggleTheme} className="mr-3">
            <Sun className={`h-[18px] w-[18px] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
            <Moon className={`absolute h-[18px] w-[18px] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
