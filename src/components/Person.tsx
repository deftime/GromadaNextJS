import Image from "next/image";
import cls from '@/styles/modules/person.module.scss';

type PersonProps = {
  name: string,
  role: string,
  bio: string,
  photo: string,
}

export function Person({ name, bio, photo, role }: PersonProps) {
  return (
    <div className="group flex flex-col">

      <div className="overflow-hidden mb-5 bg-[#E8E4DF]"
        style={{ aspectRatio: "5/4"}}
      >
        <Image
          src={photo}
          alt={name}
          width={355}
          height={285}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: "top" }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="w-10 h-1 bg-[#FFBF37] mb-0.5" />
        <h3 className={cls.name}>
          {name}
        </h3>
        <div className="text-xs text-[#5157A3] uppercase tracking-wide">
          {role}
        </div>
        <div className="text-sm text-[#3D3229] opacity-65 leading-relaxed mt-1">
          {bio}
        </div>
      </div>

    </div>
  )
}