import { verifySession } from "@/api/adminAuthVerify";
import { dbServer } from "@/api/firebase-server";
import { FeedbackType } from "@/types/firebase-data";
import { arrFromObject } from "@/utils/arrFromObject";
import { Item } from "@/components/admin/Item";

export default async function FeedbackForm() {
  await verifySession();
  const snapshot = await dbServer.ref('Feedbacks').once('value');
  const readyData: FeedbackType[] = arrFromObject(snapshot.val());

  return (
    <div className="admin-list">
      <div className="admin-list-head">
        <div className="num">#</div>
        <div className="title">Title</div>
        <div className="side-zone">ID</div>
      </div>
      {readyData.length > 0 ? (
        readyData.map((item, index) => (
          <Item key={item.id} num={index + 1} title={item.message} href={`feedback-form/${item.id}`} id={item.id} />
        ))
      ) : (
          <div className="admin-no-data">No feedbacks items</div>
      )}
    </div>
  )
}