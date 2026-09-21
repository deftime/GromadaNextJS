import Image from "next/image";
import clsx from "clsx";
import pointIcon from '@/assets/point.svg';
import mailIcon from '@/assets/mail3.svg';
import phoneIcon from '@/assets/phone.svg';

type OfficeProps = {
  city: string;
  label: string;
  desc?: string;
  address?: string;
  phone?: string;
  email?: string;
  head?: string;
  headRole?: string;
  photo: string;
}

export function Office({ city, label, desc, address, phone, email, head, headRole, photo }: OfficeProps) {
  return (
    <div className="block border border-solid border-[rgba(81,87,163,0.14)] rounded-xl overflow-hidden lg:flex even:flex-row-reverse">

      {/*Pic side*/}
      <div className="bg-[#E8E4DF] min-h-70 shrink-0 w-auto lg:w-127">
        <Image
          src={photo}
          alt={`Офіс у ${city}`}
          className="w-full h-full object-cover min-h-70"
          width={510}
          height={420}
        />
      </div>

      {/*Content side*/}
      <div className={"flex flex-col grow justify-between bg-[#FAFAF8] p-8 md:p-10"}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="shrink-0 w-0.75 h-9 rounded-xs bg-[#FFBF37]" />
            <div>
              <span className="block text-xs text-[#5157A3] tracking-[0.18em] uppercase">
                {label}
              </span>
              <h3 className="text-[1.5rem] text-[#241102]  font-bold leading-snug"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {city}
              </h3>
            </div>
          </div>

          {desc && <div className="text-sm text-[#3D3229] opacity-70 leading-relaxed mb-6">
            {desc}
          </div>}

          <div className="h-px bg-[rgba(81,87,163,0.12)] mb-5" />

          <div className="text-[#3D3229] space-y-2.5 text-sm">
            {address && <div className="flex items-start gap-2.5">
              <Image src={pointIcon} alt="map icon" width={15} height={15} className="shrink-0 h-auto w-4" />
              <span className="opacity-75">{address}</span>
            </div>}
            {email && <div className="flex items-center gap-2.5">
              <Image src={mailIcon} alt="map icon" width={15} height={15} className="shrink-0 w-4" />
              <a href={`mailto:${email}`} className="opacity-75 hover:text-[#5157A3] transition-colors">
                {email}
              </a>
            </div>}
            {phone && <div className="flex items-center gap-2.5">
              <Image src={phoneIcon} alt="map icon" width={15} height={15} className="shrink-0 w-4" />
              <a href={`tel:${phone.replace(/\D/g, "")}`} className="opacity-75 hover:text-[#5157A3] transition-colors">
                {phone}
              </a>
            </div>}
          </div>
        </div>

        {(head && headRole) && <div className="mt-7 flex items-center gap-3 pt-5 border-t border-solid border-[rgba(81,87,163,0.12)]">
          <div
            className="shrink-0 flex items-center justify-center text-sm text-[#5157A3] font-semibold w-10 h-10 rounded-[50%] bg-[rgba(81,87,163,0.1)]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {head
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <span className="block text-sm text-[#241102] font-semibold">
              {head}
            </span>
            <span className="block text-xs text-[#5157A3] opacity-80">
              {headRole}
            </span>
          </div>
        </div>}
      </div>
    </div>
  )
}