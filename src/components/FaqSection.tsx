"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="ss-container max-w-[860px]">
        <h2 className="text-center text-[28px] font-bold tracking-[-0.02em] text-ss-ink sm:text-[36px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y divide-ss-chip border-y border-ss-chip">
          {faqs.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="text-[16px] font-bold text-ss-ink sm:text-[18px]">
                    {item.question}
                  </span>
                  <PlusIcon
                    className={cn(
                      "shrink-0 transition duration-200",
                      open && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-6 text-ss-muted sm:text-[16px] sm:leading-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
