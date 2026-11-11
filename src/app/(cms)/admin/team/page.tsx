import Link from "next/link";

import { verifySession } from "@/api/adminAuthVerify";
import { dbServer } from "@/api/firebase-server";
import { TeamMemberType } from "@/types/firebase-data";
import { arrFromObject } from "@/utils/arrFromObject";
import { sortByOrder } from "@/utils/sortByOrder";
import { Item } from "@/components/admin/Item";
import '@/styles/admin/TeamPage.scss';

export default async function Team() {
  await verifySession();
  const snapshot = await dbServer.ref('Team').once('value');
  const unsortedData: TeamMemberType[] = arrFromObject(snapshot.val());
  const readyData: TeamMemberType[] = sortByOrder(unsortedData); // Сортируем по Порядку

  return (
    <div className="admin-list team-page">
      <div className="admin-list-head">
        <div className="num">#</div>
        <div className="title">Title</div>
        <div className="side-zone">
          <span className="list-status">Status</span>
          <span className="list-order">Order</span>
          <span className="list-order">Active</span>
          <span>ID</span>
        </div>
      </div>
      {readyData.length > 0 ? (
        <>
          {readyData.map((item, index) => (
            <Item key={item.id} num={index + 1} title={item.name} href={`team/${item.id}`} id={item.id} isDisabled={!item.active}
                  options={[item.status, item.order.toString(), item.active ? '✔' : '✖',]}/>
          ))}
          <Link href="/admin/team/new" className="btn-admin">Add new member</Link>
        </>
      ) : (
          <div className="admin-no-data">No feedbacks items</div>
      )}
    </div>
  )
}