import Image from "next/image";
import { feedColumns } from "@/lib/content";

export function CreativeFeed() {
  return (
    <section className="bg-ss-ink py-16 text-white sm:py-24">
      <div className="ss-container">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="max-w-[320px] text-[36px] leading-[1] font-bold tracking-[-0.02em] sm:text-[46px]">
              Explore Your
              <br />
              Creative Feed
            </h2>
            <div className="relative mt-10 hidden aspect-[3/4] max-w-[360px] overflow-hidden rounded-md lg:block">
              <Image
                src="/images/feed/feed-4.png"
                alt=""
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {feedColumns.map((col, i) => (
              <div
                key={col.id}
                className={
                  i === 0
                    ? "fade-up"
                    : i === 1
                      ? "fade-up fade-up-delay-1"
                      : "fade-up fade-up-delay-2"
                }
              >
                <h2 className="text-[28px] leading-[1.1] font-bold sm:text-[34px] sm:leading-[37.4px]">
                  {col.title}
                </h2>
                <p className="mt-3 max-w-[420px] text-[16px] leading-6 text-white/80">
                  {col.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
