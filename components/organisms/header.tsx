"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Plus, Sun } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background-1">
      <div className="mx-auto flex h-16 max-w-[1376px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Plus className="size-5" strokeWidth={3} />
          </span>
          <span className="text-base font-bold text-text-title">
            Highland Medical Center
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="text-text-body transition-colors hover:text-text-title"
          >
            {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </button>
          <Link
            href="/"
            className="text-sm font-medium text-text-body transition-colors hover:text-text-title"
          >
            Home
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Book Appointment
            </Link>
            <Link
              href="/sign-in"
              className="rounded-md border border-border-2 bg-background px-4 py-2 text-sm font-medium text-text-body transition-colors hover:bg-background-2"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
