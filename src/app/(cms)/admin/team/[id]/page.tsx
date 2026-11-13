'use client'

import { useEffect, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { TeamMemberType } from "@/types/firebase-data";
import { MemberObject } from "@/types/classes";
import { createTeammate, deleteTeammate, getTeammate, updateTeammate } from "@/actions/team";

import { Msg } from "@/components/admin/Msg";
import { SkeletonEdit } from "@/components/admin/Skeletons";
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
  form?: boolean;
  img?: boolean;
  text: string;
  status: 'error' | 'success';
} | null

export default function TeamMemberEdit() {
  const router = useRouter();
  const { id } = useParams<{id: string}>();
  const imgRef = useRef<HTMLInputElement>(null);
  const [ isImgPending, startTransition ] = useTransition();
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

  // РАЗДЕЛЕННАЯ система загрузки фото
  // - Отдельная функция, которая по нажатию будет забирать файл, отправлять в Стор и ставить полученную ссылку в стейт
  // - При сохранение или создании эту ссылку мы берем из стейта

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
        photo: '',
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
        setMsg({form: true, text: 'Error get data. No data available!', status: 'error'});
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
    if (id === 'new') {

      const tm = new MemberObject(formData.name, formData.status, formData.description, '', formData.order, formData.active);
      try {
        const { error, success } = await createTeammate({...tm});
        if (success) {
          setMsg({form: true, text: success, status: 'success'});
          router.push(`/admin/team`);
        } else if (error) {
          setMsg({form: true, text: error, status: 'error'});
        }
      } catch {
        setMsg({form: true, text: 'Error save data! Wrong data or connection failed.', status: 'error'});
      }

    } else {

      try {
        const { error, success } = await updateTeammate({
          id: id,
          name: formData.name,
          status: formData.status,
          desc: formData.description,
          photo: '',
          order: formData.order,
          active: formData.active
        });
        if (success) {
          setMsg({form: true, text: success, status: 'success'});
        } else if (error) {
          setMsg({form: true, text: error, status: 'error'});
        }
      } catch(error) {
        setMsg({form: true, text: 'Error save data! Wrong data or connection failed.', status: 'error'});
        console.log(error);
      }

    }
  }

  // Удаляем Итем
  const handlerDelete = async () => {
    if (!confirm('Are you sure, that you want to DELETE this member?')) return;
    try {
      const result = await deleteTeammate(id);
      if (result && result.error) {
        setMsg({form: true, text: result.error, status: 'error'});
      } else {
        setMsg({form: true, text: 'Member deleted!', status: 'success'});
        router.push('/admin/team');
      }
    } catch {
      setMsg({form: true, text: 'Delete failed! General connection error.', status: 'error'});
    }
  }

  // Закрываем Итем
  const handlerClose = () => {
    router.push('/admin/team');
  }

  // Загрузить Картинку
  const handlerAddImage = () => {
    const file = imgRef.current?.files?.[0];
    if (!file) {
      setMsg({img: true, text: 'No file selected!', status: 'error'});
      return;
    }
    const ext = file.name.split('.').pop();
    const maxSize = 1024 * 1024 * 2;
    if (file.size > maxSize) {
      setMsg({img: true, text: 'Image size is too big!', status: 'error'});
      return;
    }
    if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png') {
      setMsg({img: true, text: 'File type is not supported! Accept only JPG, JPEG, PNG.', status: 'error'});
      return;
    }

    startTransition(async () => {
      setMsg({img: true, text: 'Uploading...', status: 'success'});
    })

  }

  // Удалить Картинку (не просто убираем, а удаляем из Стора)
  const handlerDeleteImage = () => {

  }

  return (
    item ? (
      <div className={clsx("admin-edit", {'loading': isSubmitting})}>
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
              <div className={clsx("pic-block", isImgPending && 'loading')}>
                <div className="view">
                  {item.photo && <img src={item.photo} alt="image preview"/>}
                </div>
                <div className="edit-block">
                  <input type="file" ref={imgRef}/>
                </div>
                {msg && msg.img && <Msg msg={msg.text} status={msg.status} />}
                <div className="edit-block btns">
                  <button type="button" className="sec" onClick={handlerAddImage}>Add Image</button>
                  <button type="button" className={clsx("warn", !item.photo && 'disabled')} onClick={handlerDeleteImage}>Delete Image</button>
                </div>
              </div>
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
                  {msg && msg.form && <Msg msg={msg.text} status={msg.status} />}
                </div>
                <button type="button" className="warn" onClick={handlerClose}>Close</button>
                <button type="button" className="warn" onClick={handlerDelete}>Delete</button>
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