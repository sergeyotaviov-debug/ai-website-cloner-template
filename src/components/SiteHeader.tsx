"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  SkillshareLogo,
} from "@/components/icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-transparent bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 lg:gap-6">
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>

          <a href="/" className="shrink-0" aria-label="Home">
            <SkillshareLogo />
          </a>

          <button
            type="button"
            className="hidden items-center gap-1.5 text-[15px] font-bold text-ss-ink lg:inline-flex"
          >
            Browse
            <ChevronDownIcon className="opacity-70" />
          </button>
        </div>

        <div className="mx-auto hidden max-w-[500px] flex-1 md:block lg:mx-0">
          <label className="relative block">
            <span className="sr-only">Search box</span>
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-ss-muted" />
            <input
              type="search"
              placeholder="Search classes, digital products, teachers, and more."
              className="h-10 w-full rounded border border-ss-chip bg-white pr-3 pl-10 text-[15px] text-ss-ink outline-none transition focus:border-ss-purple focus:ring-1 focus:ring-ss-purple"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="p-2 text-ss-ink md:hidden"
            aria-label="Search"
          >
            <SearchIcon className="size-5" />
          </button>
          <button
            type="button"
            className="hidden text-[15px] font-bold text-ss-ink sm:inline-flex"
          >
            Sign In
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded bg-ss-mint px-4 text-[16px] font-bold text-ss-ink sm:px-5 sm:text-[18px]",
              "border border-ss-mint transition duration-200 ease-in-out hover:brightness-95"
            )}
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-ss-chip bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-[15px] font-bold">
            <button type="button" className="text-left">
              Browse
            </button>
            <button type="button" className="text-left">
              Sign In
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
