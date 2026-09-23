import Image, { StaticImageData } from "next/image";
import phone from '@/assets/phone.svg';
import mail3 from '@/assets/mail3.svg';
import point from '@/assets/point.svg';
import clock from '@/assets/clock.svg';

type ContactProps = {
  label: string,
  value: string,
  icon: IconType,
  href?: string,
}

// Тип для пропса-иконки, который собирается из ключей объекта ниже
// Проходят строго определнные стрки
type IconType = keyof typeof icons;

// Map-object для динамического одключения импортированных иконок в зависимости от пропса
const icons = {
  phone,
  mail3,
  point,
  clock,
} satisfies Record<string, StaticImageData>

export function Contact({ label, value, icon, href }: ContactProps) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-[10px] bg-[#241102]">
        <Image src={icons[icon]} alt="contact icon" width={20} height={20} className="shrink-0 w-5 h-5" style={{ filter: 'invert(74%) sepia(72%) saturate(420%) hue-rotate(360deg) brightness(105%) contrast(95%)' }} />
      </div>
      <div>
        <span className="block text-xs text-[#5157A3] tracking-widest uppercase mb-0.5">
          {label}
        </span>
        {href ? (
          <a href={href} className="block text-sm text-[#241102] font-medium hover:text-[#5157A3] transition-colors">
            {value}
          </a>
        ) : (
          <span className="block text-sm font-medium text-[#241102]">
            {value}
          </span>
        )}
      </div>
    </div>
  )
}