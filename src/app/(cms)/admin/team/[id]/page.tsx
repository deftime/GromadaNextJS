'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { TeamMemberType } from "@/types/firebase-data";
// import { deleteFeedback, getFeedback, updateFeedback } from "@/actions/feedbacks";

import { Msg } from "@/components/admin/Msg";
import { SkeletonEdit } from "@/components/admin/Skeletons";
import '@/styles/admin/edit.scss';

// Страница просмотра и редактирования елемента Команды

type FormDataType = {
  name: string;
  status: string;
  description: string;
  order: number;
}

export default function TeamMemberEdit() {
  const router = useRouter();
  const { id } = useParams<{id: string}>();
  const [item, setItem] = useState<TeamMemberType | null>(null);
  const [msg, setMsg] = useState<{text: string, status: 'error' | 'success'} | null>(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      status: '',
      description: '',
      order: 0
    }
  });

  // > Делаем подстановку данных в форму через reset()
  // > В сабмите формы смотрим на ID и разделяем функции по реальному айдишнику или NEW
  // > Делаем Server Actions, юзаем внутри сабмита формы
  // > Удаление делаем за пределами формы
  // > Выводим сначала все данные на фронт БЕЗ фото, а потом дорабатываем его отдельно везде

  const onSaveCreate = (data: FormDataType) => {
    console.log(data);
  }

  // Один раз получаем данные Фидбека
  useEffect(()=> {

  }, [id])

  // Сохраняем Итем
  const handlerSave = () => {

  }

  // Создаем новый Итем
  const handlerCreate = () => {

  }

  // Удаляем Итем
  const handlerDelete = () => {

  }

  // Закрываем Итем
  const handlerClose = () => {
    router.push('/admin/team');
  }

  return (
    item ? (
      <div className={clsx("admin-edit", {'loading': false})}>
        <div className="params-flex">
          <div className="param-block">
            <span>ID: </span>
            <span>{item.id}</span>
          </div>
          <div className="param-block">
            <span>Order: </span>
            <span>{item.order}</span>
          </div>
        </div>
        <form action="#" onSubmit={handleSubmit(onSaveCreate)}>
          <div className="edit-block">
            <span>Name:</span>
            <input type="text" {...register('name')}/>
          </div>
          <div className="edit-block">
            <span>Status:</span>
            <input type="text" {...register('status')}/>
          </div>
          <div className="edit-block">
            <span>Description:</span>
            <textarea {...register('description')} />
          </div>
          <div className="edit-block">
            <span>Order:</span>
            <input type="number" min={1} max={100} {...register('order')} />
          </div>
          <div className="edit-block btns">
            <div className="btn-msg">
              <button type="submit">Save</button>
              <button type="submit">Create</button>
              {msg && <Msg msg={msg.text} status={msg.status} />}
            </div>
            <button type="button" className="warn" onClick={handlerClose}>Close</button>
            <button type="button" className="warn" onClick={handlerDelete}>Delete</button>
          </div>
        </form>
      </div>
      ) : (
        <SkeletonEdit />
    )
  )

}