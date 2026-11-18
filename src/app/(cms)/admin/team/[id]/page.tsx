'use client'

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { ref, deleteObject } from "firebase/storage";
import { storage } from "@/api/firebase-client";

import { TeamMemberType } from "@/types/firebase-data";
import { MemberObject } from "@/types/classes";
import { createTeammate, deleteTeammate, getTeammate, updateTeammate } from "@/actions/team";

import { Msg } from "@/components/admin/Msg";
import { SkeletonEdit } from "@/components/admin/Skeletons";
import { ImageManager } from "@/components/admin/ImageManager";
import '@/styles/admin/edit.scss';

// Страница просмотра и редактирования/создания елемента Команды

type FormDataType = {
  name: string;
  status: string;
  description: string;
  order: number;
  active: boolean;
}

type ErrorsMsgType = {
  text: string;
  status: 'error' | 'success';
} | null

export default function TeamMemberEdit() {
  const router = useRouter();
  const { id } = useParams<{id: string}>();
  const [ isImgPending, startTransition ] = useTransition(); // Ожидание процеса для Картинок
  const [item, setItem] = useState<TeamMemberType | null>(null); // Стейт главных данных текущего Итема
  const [msg, setMsg] = useState<ErrorsMsgType>(null); // Универсальное сообщение про успех или ошибку
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      status: '',
      description: '',
      order: 0,
      active: true
    }
  });

  // РАЗДЕЛЕННАЯ система загрузки фото.
  // Отдельный компонент, который будет забирать файл, отправлять в Стор и возвращать полученную ссылку и реф, который кладем в Стейт.
  // При сохранении, создании или удалении данные берем из стейта и передаем компоненту.

  // Есть не-критическая проблема.
  // Если добавить или удалить фото и НЕ сохарнить Итем - в базе будут неверные данные (битые ссылки или пустые строки)
  // Но это решается просто повторным добавлением фото, так как запись всегда ПЕРЕЗАПИСЫВАЕТ тот же путь.

  // Один раз получаем данные Итема или открываем пустую форму нового Итема
  useEffect(()=> {
    let ignore = false;

    if (id === 'new') {
      setItem({
        id: 'NEW',
        order: 0,
        name: '',
        status: '',
        desc: '',
        photo: {
          url: '',
          storage: ''
        },
        active: true,
      });
      return;
    }

    getTeammate(id).then(result => {
      if (result.data && !ignore) {
        setItem(result.data);
        reset({
          name: result.data.name,
          status: result.data.status,
          description: result.data.desc,
          order: result.data.order,
          active: result.data.active
        });
      } else if (!ignore) {
        setMsg({ text: 'Error get data. No data available!', status: 'error' });
      }
    }).catch(error => {
      console.error(error);
    })

    return () => {
      ignore = true;
    }

  }, [id])

  // Создание или Обновление Итема через хендлер формы
  const onSaveCreate = async (formData: FormDataType) => {
    if (!item) return;
    if (id === 'new') {

      const tm = new MemberObject(formData.name, formData.status, formData.description, item.photo.url, item.photo.storage, formData.order, formData.active);
      try {
        const { error, success } = await createTeammate({...tm});
        if (success) {
          setMsg({ text: success, status: 'success' });
          router.push(`/admin/team`);
        } else if (error) {
          setMsg({ text: error, status: 'error' });
        }
      } catch {
        setMsg({ text: 'Error save data! Wrong data or connection failed.', status: 'error' });
      }

    } else {

      try {
        const { error, success } = await updateTeammate({
          id: id,
          name: formData.name,
          status: formData.status,
          desc: formData.description,
          photo: {
            url: item.photo.url,
            storage: item.photo.storage,
          },
          order: formData.order,
          active: formData.active
        });
        if (success) {
          setMsg({ text: success, status: 'success' });
        } else if (error) {
          setMsg({ text: error, status: 'error' });
        }
      } catch(error) {
        setMsg({ text: 'Error save data! Wrong data or connection failed.', status: 'error' });
        console.log(error);
      }

    }
  }

  // Удаляем Итем
  const handlerDelete = async () => {
    if (!confirm('Are you sure, that you want to DELETE this member?')) return;

    startTransition(async () => {
      try {
        if (item?.photo.storage) {
          const picRef = ref(storage, item.photo.storage);
          await deleteObject(picRef);
        }
        const result = await deleteTeammate(id);
        if (result && result.error) {
          setMsg({ text: result.error, status: 'error' });
        } else {
          setMsg({ text: 'Member deleted!', status: 'success' });
          router.push('/admin/team');
        }
      } catch {
        setMsg({ text: 'Delete failed! General connection error.', status: 'error' });
      }
    })

  }

  // Закрываем Итем
  const handlerClose = () => {
    router.push('/admin/team');
  }

  // Функция для компонента Управления Изображениями, которая забираем из него Ссылку и Реф.
  const onImageUpdate = (url: string = '', ref: string = '') => {
    if (!item) return;
    setItem({ ...item, photo: {url: url, storage: ref} });
  }

  return (
    item ? (
      <div className={clsx("admin-edit", {'loading': isSubmitting || isImgPending})}>
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
          <div className="double-picture-layout">
            <div className="pic-side">
              <ImageManager imgUrl={item.photo.url} refTemplate={'images/teammate'} refString={item.photo.storage} onSuccess={onImageUpdate} />
              <div className="edit-block">
                <span>Order:</span>
                <input type="number" min={1} max={100} {...register('order')} />
              </div>
              <div className="edit-block checkbox">
                <label>
                  <input type="checkbox" {...register('active')}/>
                  <span className="box"></span>
                  <span className="label">Active</span>
                </label>
              </div>
            </div>
            <div className="data-side">
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
              <div className="edit-block btns">
                <div className="btn-msg">
                  <button type="submit">{id === 'new' ? 'Create' : 'Save'}</button>
                  {msg && <Msg msg={msg.text} status={msg.status} />}
                </div>
                <button type="button" className="warn" onClick={handlerClose}>Close</button>
                {id !== 'new' && <button type="button" className="warn" onClick={handlerDelete}>Delete</button>}
              </div>
            </div>
          </div>
        </form>
      </div>
      ) : (
        <SkeletonEdit />
    )
  )

}