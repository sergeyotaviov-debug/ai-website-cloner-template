import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  title?: string;
};

export function SkillshareLogo({ className, title = "Skillshare" }: IconProps) {
  return (
    <span
      aria-label={title}
      role="img"
      className={cn(
        "relative inline-flex items-baseline font-bold tracking-[-0.03em] text-[22px] leading-none text-black sm:text-[26px]",
        className
      )}
    >
      <span className="absolute -top-1 left-[2.55em] size-[7px] rounded-full bg-[#55da9b] sm:size-[8px]" />
      <span className="absolute top-[0.85em] right-[-0.15em] size-[7px] rounded-full bg-[#55da9b] sm:size-[8px]" />
      Skillshare
    </span>
  );
}

export function SkillshareWordmark({
  className,
  title = "Skillshare",
}: IconProps) {
  return <SkillshareLogo className={className} title={title} />;
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={cn("fill-current", className)}
    >
      <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm6-1.708l5.854 5.854a.5.5 0 0 1-.708.708l-5.854-5.855a8 8 0 1 1 .707-.707z" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 10"
      width="10"
      height="10"
      className={cn("fill-current", className)}
    >
      <path d="M9.71533 9.68522C9.70988 9.69105 9.70437 9.69681 9.69879 9.70251C9.30372 10.1058 8.6706 10.0981 8.28467 9.68522L0.159216 0.992738C-0.0530721 0.765635 -0.0530721 0.397429 0.159216 0.170327C0.371504 -0.0567756 0.715692 -0.0567756 0.92798 0.170327L9 8.80564L17.072 0.170327C17.2843 -0.0567756 17.6285 -0.0567756 17.8408 0.170327C18.0531 0.397429 18.0531 0.765635 17.8408 0.992738L9.71533 9.68522Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="25"
      height="25"
      className={cn("fill-current", className)}
    >
      <path d="M2 5.5C2 5.77614 2.22386 6 2.5 6H21.5C21.7761 6 22 5.77614 22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5ZM2.5 12C2.22386 12 2 11.7761 2 11.5C2 11.2239 2.22386 11 2.5 11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H2.5ZM2.5 18C2.22386 18 2 17.7761 2 17.5C2 17.2239 2.22386 17 2.5 17H21.5C21.7761 17 22 17.2239 22 17.5C22 17.7761 21.7761 18 21.5 18H2.5Z" />
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={cn("size-5", className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65476 14.4204 4.67176 12.8372 3.96476 10.71H.957764V13.0418C2.43876 15.9831 5.48176 18 8.99976 18Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.964 10.71C3.784 10.17 3.682 9.593 3.682 9C3.682 8.407 3.784 7.83 3.964 7.29V4.958H.957C.347 6.173 0 7.548 0 9C0 10.452 .347 11.827 .957 13.042L3.964 10.71Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99976 3.57955C10.3218 3.57955 11.5078 4.03355 12.4408 4.92555L15.0218 2.34555C13.4598 .872549 11.4258 0 8.99976 0C5.48176 0 2.43876 2.01691 .957764 4.95818L3.96476 7.29C4.67176 5.16273 6.65476 3.57955 8.99976 3.57955Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={cn("size-5", className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0829 3.65686 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.93043 3.93012 12.2146 3.93012C13.3087 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1921C11.9499 6.60261 11.5625 7.37816 11.5625 8.17381V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3431 19.2452 20 15.0829 20 10.0611Z"
        fill="#1877F2"
      />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={cn("size-5 fill-current", className)}
    >
      <path d="M16 14.673C15.3712 16.573 13.4888 19.9373 11.5496 19.974C10.2632 19.9998 9.8496 19.1798 8.3792 19.1798C6.9096 19.1798 6.4496 19.949 5.2336 19.999C3.176 20.0815 0 15.143 0 10.8362C0 6.88022 2.6464 4.91933 4.9584 4.88349C6.1984 4.86016 7.3696 5.75435 8.1256 5.75435C8.8848 5.75435 10.3072 4.67932 11.8024 4.83682C12.428 4.86432 14.1856 5.09933 15.3136 6.81772C12.3208 8.85279 12.7872 13.1088 16 14.673ZM11.8 3.2C12.4 2.4 12.9 1.3 12.7 0C11.7.1 10.5.7 9.8 1.5C9.2 2.2 8.6 3.4 8.9 4.6C10 4.7 11.1 4 11.8 3.2Z" />
    </svg>
  );
}

export function PlayBadgeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 40"
      width="40"
      height="40"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="rgba(11,18,21,0.72)" />
      <path
        fill="#fff"
        d="M16.0663 11.0001C14.8479 11.0027 13.8611 12.0018 13.8594 13.2345V26.7657C13.8586 27.5643 14.2795 28.3024 14.9631 28.7016C15.6467 29.1008 16.489 29.1002 17.1716 28.6997L28.1716 22.234C28.854 21.834 29.274 21.096 29.274 20.2976C29.274 19.4993 28.854 18.7613 28.1716 18.3613L17.1716 11.8956C16.8316 11.695 16.4516 11.595 16.0663 11.595V11.0001Z"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("size-5 stroke-current", className)}
      fill="none"
      strokeWidth="2"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function HeroRibbon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 700 1228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
    >
      <path
        d="M21.1318 379.718C88.4903 353.303 159.777 355.446 151.887 392.925C143.962 430.567 -34.6157 580.164 46.8866 567.265C128.389 554.365 244.381 482.634 241.037 549.435C237.572 618.675 92.3722 835.14 170.377 785.189C245.66 736.982 544.942 497.545 532.264 654.434C521.698 785.189 561.981 836.699 678.868 861.793"
        stroke="url(#paint0_ribbon)"
        strokeWidth="31.6981"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_ribbon"
          x1="40"
          y1="380"
          x2="680"
          y2="860"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08d078" />
          <stop offset="0.45" stopColor="#1cc7d8" />
          <stop offset="1" stopColor="#ff119d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
