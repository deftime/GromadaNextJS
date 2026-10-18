'use client'

import { useState } from "react"
import logoUrl from "@/assets/logo.svg"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1636652966850-5ac4d02370e9?w=1920&h=1080&fit=crop&auto=format"

const NAV_LINKS = ["Практика", "Команда", "Справи", "Контакти"]

const SERVICES = [
  {
    title: "Кримінальний захист",
    desc: "Представництво інтересів підозрюваних, обвинувачених і засуджених на всіх стадіях кримінального провадження.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L4 7v7c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z"
          stroke="#5157A3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="#FFBF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Цивільні справи",
    desc: "Вирішення спорів щодо майна, договорів, спадщини, відшкодування шкоди та захисту особистих немайнових прав.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="4"
          width="18"
          height="21"
          rx="2"
          stroke="#5157A3"
          strokeWidth="1.5"
        />
        <path
          d="M9 10h10M9 14h10M9 18h6"
          stroke="#FFBF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Господарські спори",
    desc: "Захист прав бізнесу: корпоративні конфлікти, стягнення боргів, визнання договорів недійсними, банкрутство.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 22h20M7 22V13m5 9V10m5 12V13m5 9V7"
          stroke="#5157A3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="5" r="2" stroke="#FFBF37" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Адміністративне право",
    desc: "Оскарження рішень органів влади, захист у справах про адміністративні правопорушення та публічно-правові спори.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#5157A3" strokeWidth="1.5" />
        <path
          d="M14 9v5l3 3"
          stroke="#FFBF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Договірна практика",
    desc: "Розробка, аналіз і супровід договорів будь-якої складності. Мінімізація правових ризиків для бізнесу та приватних осіб.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M8 4h8l6 6v14H6V4h2"
          stroke="#5157A3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 4v6h6"
          stroke="#5157A3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 16l2 2 5-5"
          stroke="#FFBF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Юридичні консультації",
    desc: "Первинна та глибинна правова аналітика. Усні й письмові висновки з будь-яких правових питань у стислі терміни.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4C9 4 5 8 5 13c0 2.8 1.2 5.3 3 7v4l4-2h2c5 0 9-4 9-9S19 4 14 4z"
          stroke="#5157A3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 11v2m0 3h.01"
          stroke="#FFBF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const TEAM = [
  {
    name: "Олексій Васильченко",
    role: "Керуючий партнер",
    bio: "Доктор юридичних наук, заслужений юрист України. Понад 20 років практики у кримінальному та господарському судочинстві.",
    photo:
      "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Наталія Коваленко",
    role: "Партнер, кримінальна практика",
    bio: "Кандидат юридичних наук, членкиня Національної асоціації адвокатів України. Спеціалізується на справах про економічні злочини.",
    photo:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Марина Іщенко",
    role: "Старший адвокат",
    bio: "Магістр права Київського національного університету. Експерт у сфері захисту прав споживачів та сімейного права.",
    photo:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Олена Романова",
    role: "Адвокат, цивільне право",
    bio: "Науковий співробітник Інституту держави і права НАН України. Авторка понад 30 наукових публікацій з цивільного процесу.",
    photo:
      "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Дмитро Лисенко",
    role: "Адвокат, господарські справи",
    bio: "Арбітр Міжнародного комерційного арбітражного суду. Спеціалізується на транскордонних корпоративних спорах.",
    photo:
      "https://images.unsplash.com/photo-1584940120505-117038d90b05?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Артем Гриценко",
    role: "Адвокат-стажист",
    bio: "Випускник Національного юридичного університету імені Ярослава Мудрого. Переможець Всеукраїнської олімпіади з права.",
    photo:
      "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?w=600&h=500&fit=crop&auto=format",
  },
]

const OFFICES = [
  {
    city: "Київ",
    label: "Головний офіс",
    desc: "Центральний офіс об'єднання. Тут зосереджені ключові практики та керівництво. Приймаємо клієнтів щодня та дистанційно.",
    address: "вул. Хрещатик, 22, офіс 15, м. Київ, 01001",
    phone: "+38 (044) 123-45-67",
    email: "kyiv@gromada-zakon.ua",
    head: "Олексій Васильченко",
    headRole: "Керуючий партнер",
    photo:
      "https://images.unsplash.com/photo-1775144657610-9a6f171e522f?w=900&h=600&fit=crop&auto=format",
  },
  {
    city: "Львів",
    label: "Західний офіс",
    desc: "Регіональний офіс із фокусом на цивільних та господарських спорах. Обслуговує клієнтів у Львівській, Волинській та Закарпатській областях.",
    address: "пл. Ринок, 8, офіс 3, м. Львів, 79000",
    phone: "+38 (032) 987-65-43",
    email: "lviv@gromada-zakon.ua",
    head: "Наталія Коваленко",
    headRole: "Партнер, кримінальна практика",
    photo:
      "https://images.unsplash.com/photo-1775144657566-e5b093073baf?w=900&h=600&fit=crop&auto=format",
  },
  {
    city: "Харків",
    label: "Східний офіс",
    desc: "Офіс зі спеціалізацією на адміністративному праві та захисті бізнесу. Обслуговує клієнтів у Харківській, Полтавській та Сумській областях.",
    address: "майдан Конституції, 1, офіс 210, м. Харків, 61022",
    phone: "+38 (057) 456-78-90",
    email: "kharkiv@gromada-zakon.ua",
    head: "Марина Іщенко",
    headRole: "Старший адвокат",
    photo:
      "https://images.unsplash.com/photo-1775144657626-29ff0a46ca90?w=900&h=600&fit=crop&auto=format",
  },
]

const FOOTER_NAV = [
  "Практика",
  "Наша команда",
  "Судові справи",
  "Публікації",
  "Контакти",
]

const GENERAL_CONTACTS = [
  {
    label: "Головний телефон",
    value: "+38 (044) 123-45-67",
    href: "tel:+380441234567",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 3.5A.5.5 0 013.5 3l2.5.6a.5.5 0 01.37.4l.5 2.5a.5.5 0 01-.14.46l-1 .9a9.1 9.1 0 004.48 4.48l.9-1a.5.5 0 01.46-.14l2.5.5a.5.5 0 01.4.37L17 14.5a.5.5 0 01-.5.5C9.6 15 5 10.4 5 3.5a.5.5 0 010-.07L3 3.5z"
          stroke="#FFBF37"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Електронна пошта",
    value: "info@gromada-zakon.ua",
    href: "mailto:info@gromada-zakon.ua",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="4"
          width="16"
          height="12"
          rx="2"
          stroke="#FFBF37"
          strokeWidth="1.4"
        />
        <path
          d="M2 7l8 5 8-5"
          stroke="#FFBF37"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Адреса",
    value: "вул. Хрещатик, 22, офіс 15, Київ",
    href: "https://maps.google.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C7.2 2 5 4.2 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.8-2.2-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
          stroke="#FFBF37"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Графік роботи",
    value: "Пн–Пт: 9:00–18:00",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#FFBF37" strokeWidth="1.4" />
        <path
          d="M10 6v4l3 3"
          stroke="#FFBF37"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 10a8 8 0 10-9.25 7.9v-5.59H6.72V10h2.03V8.27c0-2 1.19-3.1 3-3.1.87 0 1.78.15 1.78.15v1.96h-1c-.99 0-1.3.61-1.3 1.24V10h2.2l-.35 2.31H11.2V17.9A8 8 0 0018 10z" />
      </svg>
    ),
  },
  {
    label: "Viber",
    href: "viber://chat?number=+380441234567",
    color: "#7360F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16.3 3.8C14.7 2.3 12.5 1.5 10 1.5 5.3 1.5 1.5 5.3 1.5 10c0 1.5.4 3 1.1 4.3L1.5 18.5l4.3-1.1c1.3.7 2.7 1.1 4.2 1.1 4.7 0 8.5-3.8 8.5-8.5 0-2.3-.9-4.5-2.2-6.2zM10 17c-1.3 0-2.5-.3-3.6-1l-.3-.1-2.6.7.7-2.5-.2-.3C3.4 12.6 3 11.3 3 10c0-3.9 3.1-7 7-7 1.9 0 3.6.7 4.9 2 1.3 1.3 2 3 2 4.9 0 3.9-3.1 7-6.9 7zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3-.1-.1-.5-1.1-.7-1.5-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.6s.7 1.9.8 2c.1.1 1.4 2.2 3.4 3.1.5.2.9.3 1.2.4.5.1 1 .1 1.3 0 .4-.1 1.2-.5 1.4-1s.2-.9.1-1c-.1 0-.2-.1-.4-.2z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/gromada_zakon",
    color: "#26A5E4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm4.2 5.8l-1.7 8c-.1.5-.5.6-.8.4l-2.3-1.7-1.1 1-.2.2c-.2.1-.3 0-.3-.2l.4-3.7 5-4.5c.2-.2-.1-.3-.3-.1L6.1 12.3 3.9 11.6c-.5-.1-.5-.5.1-.7l9.5-3.7c.4-.1.8.1.7.6z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/380441234567",
    color: "#25D366",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5a8.5 8.5 0 00-7.2 13L1.5 18.5l4.1-1.3A8.5 8.5 0 1010 1.5zm0 15.5a7 7 0 01-3.6-1l-.3-.2-2.4.8.8-2.3-.2-.3A7 7 0 1110 17zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3-.1-.1-.5-1.1-.7-1.5-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.6s.7 1.9.8 2c.1.1 1.4 2.2 3.4 3.1.5.2.9.3 1.2.4.5.1 1 .1 1.3 0 .4-.1 1.2-.5 1.4-1s.2-.9.1-1c-.1 0-.2-.1-.4-.2z" />
      </svg>
    ),
  },
]

const ContactsSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    fontSize: "0.9rem",
    border: "1px solid rgba(81,87,163,0.22)",
    borderRadius: 8,
    background: "#fff",
    color: "#241102",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    transition: "border-color 0.2s",
  }

  return (
    <section
      className="py-24 md:py-36 px-8 md:px-16"
      style={{ background: "#FAFAF8" }}
      aria-label="Контакти"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#5157A3" }}
          >
            Зв'язок
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#241102",
              lineHeight: 1.15,
            }}
          >
            Контакти
          </h2>
          <div
            className="mx-auto mt-8"
            style={{ width: 56, height: 2, background: "#FFBF37" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — contacts + socials */}
          <div>
            {/* General contacts */}
            <ul className="space-y-5 mb-10">
              {GENERAL_CONTACTS.map(({ label, value, href, icon }) => (
                <li key={label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "#241102",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-0.5"
                      style={{ color: "#5157A3" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium hover:text-[#5157A3] transition-colors"
                        style={{ color: "#241102" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#241102" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "rgba(81,87,163,0.12)",
                marginBottom: 28,
              }}
            />

            {/* Social / messengers */}
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#5157A3" }}
            >
              Соціальні мережі та месенджери
            </p>
            <div className="flex gap-10">
              {SOCIAL.map(({ label, href, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:opacity-80"
                  style={{ color }}
                >
                  <span
                    style={{ display: "flex", transform: "scale(2)", color }}
                  >
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="p-8 md:p-10"
            style={{
              border: "1px solid rgba(81,87,163,0.16)",
              borderRadius: 14,
              background: "#fff",
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#241102",
              }}
            >
              Замовити консультацію
            </h3>
            <p
              className="text-sm mb-8"
              style={{ color: "#3D3229", opacity: 0.65 }}
            >
              Залиште свої дані — ми зв'яжемося з вами протягом робочого дня.
            </p>

            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(35,86,30,0.1)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#23561E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#241102",
                  }}
                >
                  Дякуємо за звернення!
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#3D3229", opacity: 0.65 }}
                >
                  Ми отримали вашу заявку і зв'яжемося з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-1.5"
                    style={{ color: "#5157A3" }}
                  >
                    Ім'я
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Іван Петренко"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "#5157A3")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(81,87,163,0.22)")
                    }
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-1.5"
                    style={{ color: "#5157A3" }}
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+38 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "#5157A3")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(81,87,163,0.22)")
                    }
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-1.5"
                    style={{ color: "#5157A3" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "#5157A3")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(81,87,163,0.22)")
                    }
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-1.5"
                    style={{ color: "#5157A3" }}
                  >
                    Повідомлення
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Опишіть вашу ситуацію або запитання..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    style={{ ...inputBase, resize: "vertical", minHeight: 130 }}
                    onFocus={(e) => (e.target.style.borderColor = "#5157A3")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(81,87,163,0.22)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    background: "#FFBF37",
                    color: "#241102",
                    borderRadius: 8,
                    letterSpacing: "0.12em",
                  }}
                >
                  Надіслати заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        aria-label="Перший екран"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(36,17,2,0.88) 0%, rgba(81,87,163,0.55) 60%, rgba(35,86,30,0.35) 100%)",
          }}
        />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8 pb-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img
              src={logoUrl}
              alt="Логотип Громада і Закон"
              className="h-14 w-14 object-contain flex-shrink-0"
            />
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Адвокатське об'єднання
              </p>
              <p
                className="font-bold leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.15rem",
                  color: "#FFBF37",
                  letterSpacing: "0.01em",
                }}
              >
                Громада і Закон
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Основна навігація"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  letterSpacing: "0.06em",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:opacity-90"
              style={{
                background: "#FFBF37",
                color: "#241102",
                letterSpacing: "0.12em",
              }}
            >
              Консультація
            </a>
          </nav>
        </header>

        {/* Hero body */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-8 pb-32 pt-8">
          <div className="max-w-4xl w-full">
            {/* Hairline rule */}
            <div
              className="mx-auto mb-8"
              style={{ width: 48, height: 2, background: "#FFBF37" }}
            />

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Захист ваших прав —{" "}
              <em style={{ color: "#FFBF37", fontStyle: "italic" }}>
                наш обов'язок
              </em>
            </h1>

            <p
              className="mt-7 mb-10 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Кваліфікована юридична допомога у кримінальних, цивільних та
              господарських справах. Ми відстоюємо справедливість на кожному
              етапі судового провадження.
            </p>

            <button
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "#FFBF37",
                color: "#241102",
                letterSpacing: "0.14em",
              }}
            >
              Замовити консультацію
            </button>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(36,17,2,0.5), transparent)",
          }}
        />
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-8 md:px-16"
        style={{ background: "#FAFAF8" }}
        aria-label="Про нас"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#5157A3" }}
          >
            Адвокатське об'єднання
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#241102",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Про нас
          </h2>

          {/* Hairline */}
          <div
            className="mx-auto mt-8 mb-12"
            style={{ width: 56, height: 2, background: "#FFBF37" }}
          />

          {/* Description */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: "#3D3229", opacity: 0.82 }}
          >
            Адвокатське об'єднання «Громада і Закон» засноване у 2018 році
            командою досвідчених правників із понад 15-річним стажем у судових
            та консультаційних практиках. Ми спеціалізуємося на захисті прав
            фізичних і юридичних осіб у кримінальному, цивільному та
            господарському судочинстві.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#3D3229", opacity: 0.65 }}
          >
            Наш підхід базується на принципах законності, прозорості та
            відповідальності перед клієнтом. Кожна справа для нас — це не просто
            юридичний процес, а можливість відновити справедливість і захистити
            те, що справді важливо. Ми працюємо по всій Україні та супроводжуємо
            клієнтів на кожному етапі — від первинної консультації до виконання
            судового рішення.
          </p>
        </div>

        {/* Stats row */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: "2018", label: "Рік заснування" },
            { value: "500+", label: "Виграних справ" },
            { value: "15+", label: "Років досвіду" },
            { value: "12", label: "Адвокатів у команді" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#5157A3",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                className="mt-2 text-xs tracking-widest uppercase"
                style={{ color: "#241102", opacity: 0.5 }}
              >
                {label}
              </div>
              <div
                className="mx-auto mt-3"
                style={{ width: 24, height: 1, background: "#FFBF37" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-8 md:px-16"
        style={{ background: "#fff" }}
        aria-label="Наша команда"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#5157A3" }}
            >
              Команда фахівців
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#241102",
                lineHeight: 1.15,
              }}
            >
              Наша команда
            </h2>
            <div
              className="mx-auto mt-8"
              style={{ width: 56, height: 2, background: "#FFBF37" }}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {TEAM.map(({ name, role, bio, photo }) => (
              <article key={name} className="group flex flex-col">
                {/* Photo */}
                <div
                  className="overflow-hidden mb-5"
                  style={{ aspectRatio: "5/4", background: "#E8E4DF" }}
                >
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "top" }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5">
                  <div
                    style={{
                      width: 24,
                      height: 2,
                      background: "#FFBF37",
                      marginBottom: 2,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#241102",
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-wide"
                    style={{ color: "#5157A3", letterSpacing: "0.08em" }}
                  >
                    {role}
                  </p>
                  <p
                    className="text-sm leading-relaxed mt-1"
                    style={{ color: "#3D3229", opacity: 0.65 }}
                  >
                    {bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-8 md:px-16"
        style={{ background: "#FAFAF8" }}
        aria-label="Наші послуги"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#5157A3" }}
            >
              Правова допомога
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#241102",
                lineHeight: 1.15,
              }}
            >
              Наші послуги
            </h2>
            <div
              className="mx-auto mt-8"
              style={{ width: 56, height: 2, background: "#FFBF37" }}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map(({ title, desc, icon }) => (
              <article
                key={title}
                className="group flex items-start gap-5 p-7 transition-shadow duration-300 hover:shadow-md"
                style={{
                  border: "1px solid rgba(81,87,163,0.18)",
                  borderRadius: 12,
                  background: "#fff",
                }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    border: "1px solid rgba(81,87,163,0.14)",
                    background: "rgba(81,87,163,0.04)",
                  }}
                >
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#241102",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3D3229", opacity: 0.68 }}
                  >
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offices ──────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-8 md:px-16"
        style={{ background: "#fff" }}
        aria-label="Наші офіси"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#5157A3" }}
            >
              Представництво
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#241102",
                lineHeight: 1.15,
              }}
            >
              Наші офіси в Україні
            </h2>
            <div
              className="mx-auto mt-8"
              style={{ width: 56, height: 2, background: "#FFBF37" }}
            />
          </div>

          {/* Office list */}
          <div className="flex flex-col gap-8">
            {OFFICES.map(
              (
                {
                  city,
                  label,
                  desc,
                  address,
                  phone,
                  email,
                  head,
                  headRole,
                  photo,
                },
                idx,
              ) => (
                <article
                  key={city}
                  className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
                  style={{
                    border: "1px solid rgba(81,87,163,0.14)",
                    borderRadius: 14,
                  }}
                >
                  {/* Photo — alternates sides */}
                  <div
                    className={`overflow-hidden ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                    style={{ minHeight: 280, background: "#E8E4DF" }}
                  >
                    <img
                      src={photo}
                      alt={`Офіс у ${city}`}
                      className="w-full h-full object-cover"
                      style={{ minHeight: 280 }}
                    />
                  </div>

                  {/* Details */}
                  <div
                    className={`flex flex-col justify-between p-8 md:p-10 ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    }`}
                    style={{ background: "#FAFAF8" }}
                  >
                    {/* Top */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          style={{
                            width: 3,
                            height: 36,
                            background: "#FFBF37",
                            borderRadius: 2,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <p
                            className="text-xs tracking-[0.18em] uppercase"
                            style={{ color: "#5157A3" }}
                          >
                            {label}
                          </p>
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.5rem",
                              fontWeight: 700,
                              color: "#241102",
                              lineHeight: 1.2,
                            }}
                          >
                            {city}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: "#3D3229", opacity: 0.7 }}
                      >
                        {desc}
                      </p>

                      {/* Divider */}
                      <div
                        style={{
                          height: 1,
                          background: "rgba(81,87,163,0.12)",
                          marginBottom: 20,
                        }}
                      />

                      {/* Contact details */}
                      <ul
                        className="space-y-2.5 text-sm"
                        style={{ color: "#3D3229" }}
                      >
                        <li className="flex items-start gap-2.5">
                          <svg
                            className="flex-shrink-0 mt-0.5"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.5 1C5 1 3 3 3 5.5c0 3.5 4.5 8.5 4.5 8.5S12 9 12 5.5C12 3 10 1 7.5 1zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              stroke="#5157A3"
                              strokeWidth="1.1"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span style={{ opacity: 0.75 }}>{address}</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <svg
                            className="flex-shrink-0"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M2 3h11v9H2V3zm0 0l5.5 5L13 3"
                              stroke="#5157A3"
                              strokeWidth="1.1"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <a
                            href={`mailto:${email}`}
                            className="hover:text-[#5157A3] transition-colors"
                            style={{ opacity: 0.75 }}
                          >
                            {email}
                          </a>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <svg
                            className="flex-shrink-0"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M5 1.5A.5.5 0 014.5 2l-2 .5A1 1 0 002 3.5C2 9.3 5.7 13 11.5 13a1 1 0 001-.5l.5-2a.5.5 0 00-.3-.55l-2-.8a.5.5 0 00-.55.13l-.8.9a7.1 7.1 0 01-3.5-3.5l.9-.8a.5.5 0 00.13-.55l-.8-2A.5.5 0 005 1.5z"
                              stroke="#5157A3"
                              strokeWidth="1.1"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <a
                            href={`tel:${phone.replace(/\D/g, "")}`}
                            className="hover:text-[#5157A3] transition-colors"
                            style={{ opacity: 0.75 }}
                          >
                            {phone}
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Head of office */}
                    <div
                      className="mt-7 flex items-center gap-3 pt-5"
                      style={{ borderTop: "1px solid rgba(81,87,163,0.12)" }}
                    >
                      <div
                        className="flex-shrink-0 flex items-center justify-center text-sm font-semibold"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(81,87,163,0.1)",
                          color: "#5157A3",
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
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "#241102" }}
                        >
                          {head}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#5157A3", opacity: 0.8 }}
                        >
                          {headRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Contacts ─────────────────────────────────────────────── */}
      <ContactsSection />

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ background: "#241102" }} aria-label="Підвал сайту">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={logoUrl}
                  alt="Логотип Громада і Закон"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <p
                    className="text-xs tracking-[0.18em] uppercase mb-1"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    Адвокатське об'єднання
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      color: "#FFBF37",
                    }}
                  >
                    Громада і Закон
                  </p>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                Кваліфікована правнича допомога. Відстоюємо ваші інтереси в суді
                та поза ним на всіх стадіях провадження.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                style={{ color: "#FFBF37" }}
              >
                Навігація
              </p>
              <ul className="space-y-3">
                {FOOTER_NAV.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-[#FFBF37]"
                      style={{ color: "rgba(255,255,255,0.58)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                style={{ color: "#FFBF37" }}
              >
                Контакти
              </p>
              <ul
                className="space-y-3 text-sm"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                <li>вул. Хрещатик, 22, офіс 15</li>
                <li>м. Київ, 01001</li>
                <li className="pt-1">
                  <a
                    href="tel:+380441234567"
                    className="transition-colors duration-200 hover:text-[#FFBF37]"
                  >
                    +38 (044) 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@gromada-zakon.ua"
                    className="transition-colors duration-200 hover:text-[#FFBF37]"
                  >
                    info@gromada-zakon.ua
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Адвокатське об'єднання «Громада і Закон». Усі права
              захищено.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Свідоцтво АО № 0001 від 12.03.2018
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
