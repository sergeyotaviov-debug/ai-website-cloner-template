import Image from "next/image";
import { teachers, teachersIntro } from "@/lib/content";

export function TeachersSection() {
  return (
    <section className="bg-white py-16 text-ss-ink sm:py-20">
      <div className="ss-container">
        <div className="max-w-[720px]">
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[40px]">
            {teachersIntro.title}
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-ss-muted sm:text-[18px]">
            {teachersIntro.body}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {teachers.map((teacher) => (
            <a
              key={teacher.id}
              href={teacher.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-br from-[#5620c1] to-[#24c2f2]"
            >
              <Image
                src={teacher.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f6e]/90 via-[#5620c1]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                <p className="text-[11px] font-bold tracking-[0.12em] text-white/80 uppercase">
                  Meet
                </p>
                <p className="mt-1 text-[18px] leading-tight font-bold sm:text-[22px]">
                  {teacher.name}
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.08em] text-white/75 uppercase">
                  {teacher.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
