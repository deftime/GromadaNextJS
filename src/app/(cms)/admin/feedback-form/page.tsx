import { verifySession } from "@/api/adminAuthVerify";
import { dbServer } from "@/api/firebase-server";
import { FeedbackType } from "@/types/firebase-data";
import { arrFromObject } from "@/utils/arrFromObject";
import { Item } from "@/components/admin/Item";
import '@/styles/admin/FeedbacksPage.scss';

export default async function FeedbackForm() {
  await verifySession(); // Проверка сессии, серверная админская авторизация
  const snapshot = await dbServer.ref('Feedbacks').once('value'); // Получаем данные прямо в теле компонента
  const readyData: FeedbackType[] = arrFromObject(snapshot.val()); // Превращаем в массив

  return (
    <div className="admin-list feedbacks-page">
      <div className="admin-list-head">
        <div className="num">#</div>
        <div className="title">Title</div>
        <div className="side-zone">
          <span className="list-answer">Answered by</span>
          <span className="list-date">Date</span>
          <span>ID</span>
        </div>
      </div>
      {readyData.length > 0 ? (
        readyData.map((item, index) => (
          <Item key={item.id} num={index + 1} title={item.message} href={`feedback-form/${item.id}`} id={item.id} options={[item.answered, item.date]} />
        ))
      ) : (
          <div className="admin-no-data">No feedbacks items</div>
      )}
    </div>
  )
}