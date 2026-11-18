import Image from "next/image";
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  HeroRibbon,
} from "@/components/icons";
import { heroCopy } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20">
      <div className="pointer-events-none absolute top-16 left-[-8%] hidden h-[520px] w-[320px] opacity-90 lg:block xl:left-0 xl:w-[380px]">
        <HeroRibbon />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-start gap-10 px-4 pt-10 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-8 lg:px-10 lg:pt-14 lg:pb-16">
        <div className="fade-up relative z-10 max-w-[520px]">
          <h1 className="text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-black sm:text-[46px] sm:leading-[57.96px]">
            {heroCopy.headline}
          </h1>
          <p className="fade-up fade-up-delay-1 mt-5 max-w-[420px] text-[16px] leading-6 text-ss-ink sm:text-[18px] sm:leading-7">
            {heroCopy.sublineBefore}{" "}
            <span className="font-bold">{heroCopy.highlight}</span>.{" "}
            {heroCopy.sublineAfter}
          </p>

          <div className="fade-up fade-up-delay-2 relative mt-10 grid max-w-[520px] grid-cols-[1.1fr_0.9fr] gap-3 sm:mt-14 sm:gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f4f4f4]">
              <Image
                src="/images/hero/purple-hair-illustration.webp"
                alt="Illustration of a woman with vibrant purple hair and striking blue eyes"
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[5/3] overflow-hidden rounded-sm bg-[#f4f4f4]">
                <Image
                  src="/images/hero/tablet-drawing.webp"
                  alt="A person drawing on a tablet screen with a stylus"
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-sm bg-[#f4f4f4]">
                <Image
                  src="/images/hero/woman-red-shirt.webp"
                  alt="An excited woman in a red shirt focused on a tablet"
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-[13px] leading-5 text-ss-muted">
            <span className="font-bold text-ss-ink">
              {heroCopy.teacherCredit.name}
            </span>
            <br />
            {heroCopy.teacherCredit.role}
          </p>
        </div>

        <aside className="fade-up fade-up-delay-2 w-full justify-self-center lg:justify-self-end">
          <div className="rounded-md border border-ss-chip bg-white p-6 shadow-[0_8px_30px_rgba(11,18,21,0.06)] sm:p-8">
            <h3 className="text-center text-[22px] leading-[31.9px] font-bold text-ss-ink">
              {heroCopy.signupTitle}
            </h3>

            <form className="mt-6 flex flex-col items-center gap-3">
              <SsoButton icon={<GoogleIcon />} label="Continue with Google" />
              <SsoButton
                icon={<FacebookIcon />}
                label="Continue with Facebook"
              />
              <SsoButton icon={<AppleIcon />} label="Continue with Apple" />
              <button
                type="button"
                className="inline-flex h-10 w-full max-w-[320px] items-center justify-center rounded px-2 text-[16px] font-bold text-ss-purple transition hover:bg-[#5620c1]/08"
              >
                Continue with email
              </button>
            </form>

            <p className="mt-5 text-center text-[11px] leading-[15.4px] text-ss-muted">
              By signing up you agree to Skillshare&apos;s{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              , and agree to receive marketing communications from Skillshare at
              the email address provided. This page is protected by reCAPTCHA
              and is subject to Google&apos;s{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SsoButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-full max-w-[320px] items-center justify-center gap-3 rounded border border-ss-muted bg-white px-[15px] text-[16px] leading-6 font-bold text-ss-ink transition-[background-color,box-shadow,border] duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#f7f8f8]"
    >
      {icon}
      {label}
    </button>
  );
}
