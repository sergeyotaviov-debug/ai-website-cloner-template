"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayBadgeIcon } from "@/components/icons";
import {
  categories,
  classesByCategory,
} from "@/lib/content";
import type { CategoryId, ClassCard } from "@/types/skillshare";
import { cn } from "@/lib/utils";

export function PopularClasses() {
  const [active, setActive] = useState<CategoryId>("featured");
  const cards = classesByCategory[active] ?? classesByCategory.featured;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="ss-container">
        <div className="max-w-[640px]">
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-black sm:text-[40px]">
            Explore Popular Classes
          </h2>
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-black sm:text-[40px]">
            on Skillshare
          </h2>
        </div>

        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-[14px] font-bold transition",
                  isActive
                    ? "bg-ss-ink text-white"
                    : "bg-transparent text-ss-ink hover:bg-[#f2f3f4]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          key={active}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <ClassCardItem key={`${active}-${card.id}`} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassCardItem({ card, index }: { card: ClassCard; index: number }) {
  return (
    <a
      href={card.href}
      className={cn(
        "group block fade-up",
        index === 1 && "fade-up-delay-1",
        index === 2 && "fade-up-delay-2",
        index === 3 && "fade-up-delay-3"
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-[#eee]">
        <Image
          src={card.image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {card.staffPick ? (
          <span className="absolute top-2 left-2 rounded bg-white/95 px-2 py-0.5 text-[11px] font-bold tracking-wide text-ss-ink">
            Staff Pick
          </span>
        ) : null}
        <span className="absolute right-2 bottom-2 opacity-90 transition group-hover:opacity-100">
          <PlayBadgeIcon />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3 text-[12px] text-ss-muted">
        <span>{card.students}</span>
        <span aria-hidden>·</span>
        <span>{card.duration}</span>
      </div>
      <h3 className="mt-1 line-clamp-2 text-[15px] leading-5 font-semibold text-ss-ink">
        {card.title}
      </h3>
      <p className="mt-1 text-[13px] text-ss-muted">{card.teacher}</p>
    </a>
  );
}
