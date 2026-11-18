import { useRef, useState, useTransition } from "react";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { FirebaseError } from "firebase/app";

import { storage } from "@/api/firebase-client";
import { Msg } from "@/components/admin/Msg";
import clsx from "clsx";

type ImageManagerProps = {
  imgUrl: string,
  refTemplate: string,
  refString?: string,
  onSuccess?: (url?: string, ref?: string) => void,
}

type ErrorsMsgType = {
  text: string,
  status: 'success' | 'error',
} | null;

// Отдельный UI-компонент админки, который отвечает чисто за Добавление/Обновление/Удаление картинок в Storage
// Получает данные текущей картинки или ее отсутсвие.
// Выполняет переданную функцию после успешного действия.

export function ImageManager({ imgUrl, refString, refTemplate, onSuccess }: ImageManagerProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState<ErrorsMsgType>(null);

  // Загрузить Картинку
  // Делаем по сути CREATE или UPDATE, в зависимости от того, получили ли мы реф текущей существующей картинки
  const handlerAddImage = () => {
    const file = imgRef.current?.files?.[0];
    if (!file) {
      setMsg({ text: 'No file selected!', status: 'error' });
      return;
    }

    const ext = file.name.split('.').pop();
    const maxSize = 1024 * 1024 * 2;
    const needRef = refString || `${refTemplate}-${Date.now().toString(36)}.${ext}`; // Отдельный независимый ID для картинки
    if (file.size > maxSize) {
      setMsg({ text: 'Image size is too big! Max 2MB', status: 'error' });
      return;
    }
    if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png') {
      setMsg({ text: 'File type is not supported! Accept only JPG, JPEG, PNG.', status: 'error' });
      return;
    }

    startTransition(async () => {
      setMsg({ text: 'Uploading...', status: 'success' });

      try {
        const picRef = ref(storage, needRef);
        await uploadBytes(picRef, file);
        const link = await getDownloadURL(picRef);
        onSuccess && onSuccess(link, needRef);
        if (imgRef.current) imgRef.current.value = '';
        setMsg(null);
      } catch(error) {
        if (error instanceof FirebaseError) {
          setMsg({ text: `Image upload error! Code: ${error.code}`, status: 'error' });
        }
      }

    })

  }

  // Удалить Картинку (не просто убираем, а удаляем из Стора)
  const handlerDeleteImage = () => {
    if (!refString) return;

    startTransition(async () => {
      try {
        const picRef = ref(storage, refString);
        await deleteObject(picRef);
        onSuccess && onSuccess();
      } catch(error) {
        if (error instanceof FirebaseError) {
          setMsg({ text: `Image delete error! Code: ${error.code}`, status: 'error' });
        }
      }
    })

  }

  return (
    <div className={clsx("pic-block", isPending && 'loading')}>
      <div className="view">
        {imgUrl && <img src={imgUrl} alt="image preview"/>}
      </div>
      <div className="edit-block">
        <input type="file" ref={imgRef}/>
      </div>
      {msg && <Msg msg={msg.text} status={msg.status} />}
      <div className="edit-block btns">
        <button type="button" className="sec" onClick={handlerAddImage}>Add Image</button>
        <button type="button" className={clsx("warn", !refString && 'disabled')} onClick={handlerDeleteImage}>Delete Image</button>
      </div>
    </div>
  )
}