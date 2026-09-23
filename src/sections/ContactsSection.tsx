import Image from "next/image";
import { Title } from "@/components/Title";
import { Contact } from "@/components/Contact";
import fbIcon from '@/assets/facebook.svg';
import viberIcon from '@/assets/viber.svg';
import whatsappIcon from '@/assets/whatsapp.svg';
import tgIcon from '@/assets/telegram.svg';
import { ContactForm } from "@/components/ContactForm";

type Contact = {
  label: string;
  value: string;
  icon: 'phone' | 'mail3' | 'point' | 'clock';
  href?: string;
}

const GENERAL_CONTACTS: Contact[] = [
  {
    label: "Головний телефон",
    value: "+38 (044) 123-45-67",
    href: "tel:+380441234567",
    icon: 'phone',
  },
  {
    label: "Електронна пошта",
    value: "info@gromada-zakon.ua",
    href: "mailto:info@gromada-zakon.ua",
    icon: 'mail3',
  },
  {
    label: "Адреса",
    value: "вул. Хрещатик, 22, офіс 15, Київ",
    href: "https://maps.google.com",
    icon: 'point',
  },
  {
    label: "Графік роботи",
    value: "Пн–Пт: 9:00–18:00",
    href: undefined,
    icon: 'clock',
  },
]

export function ContactsSection() {

  return (
    <section id="contacts" className="py-15 px-8 bg-[#FAFAF8] md:px-16 md:py-18" aria-label="Контакти">
      <div className="max-w-5xl mx-auto">

        <Title sup="Зв'язок" title="Контакти" />

        <div className="block md:flex md:gap-10 md:mt-20">

          {/* Left side */}
          <div className="mb-12 md:mb-0 md:grow">
            {GENERAL_CONTACTS.map((contact) => (
              <Contact key={contact.value} label={contact.label} value={contact.value} icon={contact.icon} href={contact.href} />
            ))}

            <div className="h-px mb-7 bg-[rgba(81,87,163,0.12)]" />

            <div className="text-xs text-center md:text-left text-[#5157A3] font-semibold tracking-[0.18em] uppercase mb-5">
              Соціальні мережі та месенджери
            </div>
            <div className="flex justify-center md:justify-normal gap-10">
              <a href="https://facebook.com" target="_blank" className="block w-10 h-10 hover:-translate-y-1 hover:opacity-80 transition-all duration-200">
                <Image src={fbIcon} alt="facebook" width={40} height={40} />
              </a>
              <a href="https://viber.com" target="_blank" className="block w-10 h-10 hover:-translate-y-1 hover:opacity-80 transition-all duration-200">
                <Image src={viberIcon} alt="viber" width={40} height={40} />
              </a>
              <a href="https://whatsapp.com" target="_blank" className="block w-10 h-10 hover:-translate-y-1 hover:opacity-80 transition-all duration-200">
                <Image src={whatsappIcon} alt="whatsapp" width={40} height={40} />
              </a>
              <a href="https://telegram.com" target="_blank" className="block w-10 h-10 hover:-translate-y-1 hover:opacity-80 transition-all duration-200">
                <Image src={tgIcon} alt="telegram" width={40} height={40} />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-120 md:shrink-0">
            <ContactForm title="Замовити консультацію" desc="Залиште свої дані — ми зв'яжемося з вами протягом робочого дня." />
          </div>

        </div>
      </div>
    </section>
  )
}