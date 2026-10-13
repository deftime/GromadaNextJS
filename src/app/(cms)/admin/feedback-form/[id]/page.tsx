'use client'

import { useParams } from 'next/navigation';
import '@/styles/admin/edit.scss';

export default function FeedbackEdit() {
  const { id } = useParams();

  // + useState для поля
  // + handler-функции для кнопок
  // + ручной loading и скелетон
  // Firebase: useEffect and get all data
  // Firebase: update or delete by buttons
  // Server Actions?

  return (
    <div className="admin-edit">
      <div className="params-flex">
        <div className="param-block">
          <span>ID: </span>
          <span>{id}</span>
        </div>
        <div className="param-block">
          <span>Answered: </span>
          <span></span>
        </div>
      </div>
      <div className="edit-block">
        <span>Name</span>
        <div className="data">Іван Петренко</div>
      </div>
      <div className="edit-block">
        <span>Phone</span>
        <div className="data">0678889901</div>
      </div>
      <div className="edit-block">
        <span>Email</span>
        <div className="data">mail@gmail.com</div>
      </div>
      <div className="edit-block">
        <span>Message</span>
        <div className="data">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid commodi consectetur culpa delectus distinctio eos laborum magni maxime nemo, nulla quibusdam rerum voluptatum. Asperiores labore minus mollitia quos voluptatem!</div>
      </div>
      <div className="edit-block">
        <label htmlFor="msgInput">Answer</label>
        <textarea id="msgInput" />
      </div>
      <div className="edit-block btns">
        <button>Save</button>
        <button style={{backgroundColor: '#305987'}}>Send</button>
        <button style={{backgroundColor: '#a42222'}}>Delete</button>
      </div>
    </div>
  );
}