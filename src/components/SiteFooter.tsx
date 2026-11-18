import Image from "next/image";
import { SkillshareLogo } from "@/components/icons";
import { footerColumns } from "@/lib/content";

const social = [
  { name: "Instagram", src: "/images/social/instagram.svg", href: "#" },
  { name: "TikTok", src: "/images/social/tiktok-logo.svg", href: "#" },
  { name: "Pinterest", src: "/images/social/pinterest.svg", href: "#" },
  { name: "Twitter", src: "/images/social/twitter.svg", href: "#" },
  { name: "Facebook", src: "/images/social/facebook.svg", href: "#" },
  { name: "LinkedIn", src: "/images/social/linkedin.svg", href: "#" },
  { name: "Youtube", src: "/images/social/youtube.svg", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ss-ink text-white">
      <div className="ss-container border-b border-white/10 py-10">
        <p className="text-[13px] font-bold tracking-[0.08em] text-white/60 uppercase">
          Featured In:
        </p>
        <div className="relative mt-4 h-10 w-full max-w-[720px] opacity-80">
          <Image
            src="/images/press/featured-in-logos.webp"
            alt="Featured in press logos"
            fill
            className="object-contain object-left"
            sizes="720px"
          />
        </div>

        <p className="mt-8 text-[13px] font-bold tracking-[0.08em] text-white/60 uppercase">
          Follow us on:
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              className="opacity-80 transition hover:opacity-100"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="ss-container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[14px] font-bold">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ss-container border-t border-white/10 py-8">
        <p className="max-w-[900px] text-[12px] leading-5 text-white/55">
          All memberships will be billed automatically on a recurring basis
          until canceled. If eligible for a free trial, cancel before the trial
          ends to avoid being charged. Offer only valid for new paid
          subscribers. See full terms of service{" "}
          <a href="#" className="underline">
            here
          </a>
          .
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <SkillshareLogo className="text-white" />
          </div>
          <p className="text-[13px] text-white/60">
            © Skillshare, Inc. 2026
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white">
              Help
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
