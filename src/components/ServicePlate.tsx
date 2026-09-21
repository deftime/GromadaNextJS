import Image from "next/image";
import clsx from "clsx";
import cls from '@/styles/modules/servicePlate.module.scss';

type ServicePlateProps = {
  icon: string,
  title: string,
  desc: string,
}

export function ServicePlate({ icon, title, desc }: ServicePlateProps) {
  return (
    <div className={clsx(cls.service, "group flex items-start gap-4 p-7 bg-white border border-solid rounded-xl border-[rgba(81,87,163,0.18)] hover:shadow-md transition-shadow duration-300")}>

      <Image src={icon} alt={'service icon'} width={28} height={28} className="shrink-0 w-10 h-10 sm:w-14 sm:h-14" />

      <div>
        <span className="block mb-2 text-[18px] font-semibold leading-[1.3] text-[#241102]">
          {title}
        </span>
        <span className="block text-sm text-[#3D3229] opacity-65 leading-relaxed">
          {desc}
        </span>
      </div>

    </div>
  )
}