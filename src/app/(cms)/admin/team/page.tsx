import { verifySession } from "@/api/adminAuthVerify";
import { dbServer } from "@/api/firebase-server";
import { TeamMemberType } from "@/types/firebase-data";
import { arrFromObject } from "@/utils/arrFromObject";
import { Item } from "@/components/admin/Item";
import { sortByOrder } from "@/utils/sortByOrder";
import '@/styles/admin/TeamPage.scss';

export default async function Team() {
  await verifySession();
  const snapshot = await dbServer.ref('Team').once('value');
  const unsortedData: TeamMemberType[] = arrFromObject(snapshot.val());
  const readyData = sortByOrder(unsortedData); // Сортируем по дате

  return (
    <div className="admin-list team-page">
      <div className="admin-list-head">
        <div className="num">#</div>
        <div className="title">Title</div>
        <div className="side-zone">
          <span className="list-status">Status</span>
          <span className="list-order">Order</span>
          <span>ID</span>
        </div>
      </div>
      {readyData.length > 0 ? (
        readyData.map((item, index) => (
          <Item key={item.id} num={index + 1} title={item.name} href={`team/${item.id}`} id={item.id} options={[item.status, item.order]} />
        ))
      ) : (
          <div className="admin-no-data">No feedbacks items</div>
      )}
    </div>
  )
}