'use client'

import { useEffect, useState, useTransition } from "react";
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { FeedbackType } from "@/types/firebase-data";
import { deleteFeedback, getFeedback, updateFeedback } from "@/actions/feedbacks";

import { Msg } from "@/components/admin/Msg";
import { SkeletonEdit } from "@/components/admin/Skeletons";
import '@/styles/admin/edit.scss';

// Страница просмотра и редактирования елемента Фидбека

export default function FeedbackEdit() {
  const router = useRouter();
  const { id } = useParams<{id: string}>(); // Берем ID із адресной строки
  const [isPending, startTransition] = useTransition(); // Хук, который показывает процес работы асинхронных операций
  const [item, setItem] = useState<FeedbackType | null>(null); // Стейт с данными Фидбека
  const [answerText, setAnswerText] = useState<string>(''); // Стейт для поля ответа
  const [msg, setMsg] = useState<{text: string, status: 'error' | 'success'} | null>(null); // Стейт для статусних сообщений

  // Один раз получаем данные Фидбека
  useEffect(()=> {
    getFeedback(id).then(result => {
      if (result.data) {
        setItem(result.data);
        setAnswerText(result.data.answer);
      } else {
        setMsg({text: 'Error get data. No data available!', status: 'error'});
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [id])

  // Сохраняем ответ
  const handlerSave = () => {
    setMsg(null);
    startTransition(async ()=> {
      try {
        const { error, success } = await updateFeedback(answerText, id);
        if (success) {
          setMsg({text: success, status: 'success'});
          if (item) setItem({ ...item, answer: answerText });
        } else if (error) {
          setMsg({text: error, status: 'error'});
        }
      } catch {
        setMsg({text: 'Error with connection to DB!', status: 'error'});
      }
    })
  }

  // Удаляем Фидбек
  const handlerDelete = () => {
    if(!confirm('Are you sure, that you want to DELETE this feedback?')) return;
    setMsg(null);
    startTransition(async ()=> {
      try {
        const failed = await deleteFeedback(id);
        if (failed) {
          setMsg({text: failed.error, status: 'success'});
        } else {
          router.push('/admin/feedback-form');
        }
      } catch {
        setMsg({text: 'Error with connection to DB!', status: 'error'});
      }
    })
  }

  // Отправить ответ, открываем почту по-умолчанию
  const handlerSend = () => {
    window.open(`mailto:${item?.email}?subject=Відповідь на вашу заявку&body=Шановний ${item?.name}, вас вітає адвокатське об'єднання "Громада і Закон"! \n\n${item?.answer}`);
  }

  // Закрываем текущий Фидбек
  const handlerClose = () => {
    router.push('/admin/feedback-form');
  }

  return (
    item ? (
      <div className={clsx("admin-edit", {'loading': isPending})}>
        <div className="params-flex">
          <div className="param-block">
            <span>ID: </span>
            <span>{item.id}</span>
          </div>
          <div className="param-block">
            <span>Answered: </span>
            <span>{item.answered}</span>
          </div>
          <div className="param-block">
            <span>Date: </span>
            <span>{item.date}</span>
          </div>
        </div>
        <div className="edit-block">
          <span>Name</span>
          <div className="data">{item.name}</div>
        </div>
        <div className="edit-block">
          <span>Phone</span>
          <div className="data">{item.phone}</div>
        </div>
        <div className="edit-block">
          <span>Email</span>
          <div className="data">{item.email}</div>
        </div>
        <div className="edit-block">
          <span>Message</span>
          <div className="data">{item.message}</div>
        </div>
        <div className="edit-block">
          <label htmlFor="msgInput">Answer</label>
          <textarea id="msgInput" value={answerText} onChange={(e) => setAnswerText(e.target.value)} />
        </div>
        <div className="edit-block btns">
          <div className="btn-msg">
            <button onClick={handlerSave}>Save</button>
            {msg && <Msg msg={msg.text} status={msg.status} />}
          </div>
          <button className="sec" onClick={handlerSend}>Send</button>
          <button className="warn" onClick={handlerClose}>Close</button>
          <button className="warn" onClick={handlerDelete}>Delete</button>
        </div>
      </div>
      ) : (
        <SkeletonEdit />
    )
  )

}