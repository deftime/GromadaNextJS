import Image from "next/image";

type ServicePlateProps = {
  icon: string,
  title: string,
  desc: string,
}

export function ServicePlate({ icon, title, desc }: ServicePlateProps) {
  return (
    <div className="group flex items-start gap-5 p-7 bg-white border border-solid rounded-xl border-[rgba(81,87,163,0.18)] hover:shadow-md transition-shadow duration-300">

      <div className="shrink-0 flex items-center justify-center bg-[rgba(81,87,163,0.04)] w-13 h-13 border border-solid border-[rgba(81,87,163,0.14)] rounded-[10] group-hover:-translate-y-0.5 transition-transform duration-300">
        <Image src={icon} alt={'service icon'} width={28} height={28} />
      </div>

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