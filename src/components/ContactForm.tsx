'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type FormProps = {
  title?: string,
  desc?: string,
}
type FormDataType = yup.InferType<typeof schema>

const schema = yup.object({
  name: yup.string().required('Enter your name!').min(3, 'Minimum 3 chars!'),
  phone: yup.string().matches(/^[0-9+\-() ]*$/, 'Тільки цифри та символи телефону'),
  email: yup.string().required('Enter your email!').email('Enter correct email!'),
  message: yup.string().required('Enter your question!').min(20, 'Minimum 20 chars!').matches(/^[^a-z]*$/i, 'No Latin letters or links!'),
})

export function ContactForm({ title, desc }: FormProps) {
  const [sent, setSent] = useState<'ok' | 'error' | false>(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema)
  });

  const onSend = async (data: FormDataType) => {
    console.log(data);
    setSent('error');
  }

  return (
    <div className="p-8 border border-solid border-[rgba(81,87,163,0.16)] rounded-[14px] bg-white md:p-10 md:w-120 md:shrink-0">
      {title && <div className="mb-2 text-[1.5rem] font-bold text-[#241102]" style={{ fontFamily: "'PlayfairDisplay', sans-serif", }}>
        {title}
      </div>}
      {desc && <div className="text-sm text-[#3D3229] opacity-65 mb-8">
        {desc}
      </div>}

      {sent === 'ok' ? (
        <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-[50%] bg-[rgba(35,86,30,0.1)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#23561E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="block font-xl font-semibold text-[#241102" style={{ fontFamily: "'Playfair Display', serif", }}>
            Дякуємо за звернення!
          </span>
          <span className="block text-sm text-[#3D3229] opacity-65">
            Ми отримали вашу заявку і зв'яжемося з вами найближчим часом.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSend)} className="flex flex-col gap-5">
          <div className="mb-1.5">
            <label className="block text-xs text-[#5157A3] tracking-widest uppercase mb-1.5">
              Ім'я
            </label>
            <input type="text" placeholder="Іван Петренко" {...register('name')} />
            {errors.name && <span className="block text-[12px] leading-4 text-red-700 mt-0.5">{errors.name?.message}</span>}
          </div>
          <div className="mb-1.5">
            <label className="block text-xs text-[#5157A3] tracking-widest uppercase mb-1.5">
              Телефон
            </label>
            <input type="tel" placeholder="+38 (___) ___-__-__" {...register('phone')} />
            {errors.phone && <span className="block text-[12px] leading-4 text-red-700 mt-0.5">{errors.phone?.message}</span>}
          </div>
          <div className="mb-1.5">
            <label className="block text-xs text-[#5157A3] tracking-widest uppercase mb-1.5">
              Email
            </label>
            <input type="email" placeholder="ivan@example.com" {...register('email')} />
            {errors.email && <span className="block text-[12px] leading-4 text-red-700 mt-0.5">{errors.email?.message}</span>}
          </div>
          <div className="mb-1.5">
            <label className="block text-xs text-[#5157A3] tracking-widest uppercase mb-1.5">
              Повідомлення
            </label>
            <textarea rows={5} placeholder="Опишіть вашу ситуацію або запитання..." {...register('message')} />
            {errors.message && <span className="block text-[12px] leading-4 text-red-700 mt-0.5">{errors.message?.message}</span>}
            {sent === 'error' && <span className="block text-[12px] leading-4 text-red-700 mt-0.5">Форма ще не працює. Очікуйте запуску!</span>}
          </div>

          <button type="submit" className="mt-1 w-full py-3.5 text-sm text-[#241102] bg-[#FFBF37] rounded-lg font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer">
            Надіслати заявку
          </button>

        </form>
      )}
    </div>
  )
}