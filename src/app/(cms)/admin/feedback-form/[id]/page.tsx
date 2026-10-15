'use client'

import { useContext, useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { ref, get } from "firebase/database";

import { FeedbackType } from "@/types/firebase-data";
import { Auth } from "@/components/admin/AuthClientProvider";
import { db } from "@/api/firebase-client";
import '@/styles/admin/edit.scss';
import '@/styles/admin/skeletons.scss';

// Нужна ли тут клиентская проверка авторизации? Или proxy все отловит?

export default function FeedbackEdit() {
  const { id } = useParams();
  const [item, setItem] = useState<FeedbackType | null>(null);
  const [answerText, setAnswerText] = useState<string>('');

  const user = useContext(Auth);

  // + useState для поля
  // + handler-функции для кнопок
  // + ручной loading и скелетон
  // Firebase: useEffect and get all data
  // Firebase: update or delete by buttons
  // Server Actions?

  useEffect(()=> {
    const dbRef = ref(db, `Feedbacks/Fe-${id}`);
    get(dbRef).then(snapshot => {
      if (snapshot.exists()) {
        setItem(snapshot.val());
        setAnswerText(snapshot.val().answer);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [id])

  const handlerSave = () => {
    console.log('Save data');
  }

  const handlerDelete = () => {
    console.log('Delete data');
  }

  const handlerSend = () => {
    console.log('Open mail for chating...');
  }

  return (
    item ? (
      <div className="admin-edit">
        <div className="params-flex">
          <div className="param-block">
            <span>ID: </span>
            <span>{item.id}</span>
          </div>
          <div className="param-block">
            <span>Answered: </span>
            <span>{item.answered}</span>
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
          <button>Save</button>
          <button className="sec">Send</button>
          <button className="warn">Delete</button>
        </div>
      </div>
      ) : (
        <div className="skeleton edit">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="area"></div>
          <div className="row">
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
          </div>
        </div>
    )
  )

}